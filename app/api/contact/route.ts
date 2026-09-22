import { NextRequest, NextResponse } from "next/server";
import { getServerSupabase } from "@/lib/supabaseClient";
import { validateContactSubmission, isAuthorizedAdmin } from "@/lib/contactValidation";

export const dynamic = "force-dynamic";

/**
 * Forward submission to AIS Cloud Run Webhook
 */
async function triggerAISWebhook(payload: {
  name: string;
  email: string;
  subject?: string | null;
  message?: string | null;
  websiteUrl: string;
}) {
  const webhookUrl = "https://ais-dev-ca2vwgvemvn7ngm5oh4vgk-133888572211.asia-southeast1.run.app/api/webhook/contact";

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000); // 12 second timeout

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "ArunaSomeshPortfolio-AISWebhook/1.0",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json().catch(() => null);
      return { success: true, data };
    } else {
      console.warn(`[AIS Webhook] Returned HTTP status: ${response.status}`);
      return { success: false, status: response.status };
    }
  } catch (error) {
    console.error("[AIS Webhook] Dispatch error:", error);
    return { success: false, error };
  }
}

/**
 * Forward submission to Make.com Webhook if configured
 */
async function triggerMakeWebhook(payload: {
  id?: string;
  name: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message?: string | null;
  submittedAt: string;
}) {
  const webhookUrl = process.env.MAKE_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    return { dispatched: false, reason: "MAKE_WEBHOOK_URL is not configured" };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "ArunaSomeshPortfolio-ContactWebhook/1.0",
      },
      body: JSON.stringify({
        ...payload,
        source: "portfolio_contact_form",
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`[Make.com Webhook] Returned HTTP status: ${response.status}`);
      return { dispatched: false, status: response.status };
    }

    return { dispatched: true };
  } catch (error) {
    console.error("[Make.com Webhook] Dispatch error:", error);
    return { dispatched: false, error };
  }
}

/**
 * POST /api/contact
 * Handles contact form submissions, stores in database, and triggers AIS & Make.com webhook automation
 */
export async function POST(request: NextRequest) {
  try {
    let body: unknown;
    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      try {
        body = await request.json();
      } catch {
        return NextResponse.json(
          { success: false, error: "Invalid JSON format in request body." },
          { status: 400 }
        );
      }
    } else if (contentType.includes("multipart/form-data") || contentType.includes("application/x-www-form-urlencoded")) {
      try {
        const formData = await request.formData();
        const obj: Record<string, unknown> = {};
        formData.forEach((value, key) => {
          obj[key] = typeof value === "string" ? value : "";
        });
        body = obj;
      } catch {
        return NextResponse.json(
          { success: false, error: "Invalid form data format." },
          { status: 400 }
        );
      }
    } else {
      // Fallback try JSON
      try {
        body = await request.json();
      } catch {
        return NextResponse.json(
          { success: false, error: "Unsupported Content-Type header." },
          { status: 400 }
        );
      }
    }

    // 1. Server-side validation and sanitization
    const validation = validateContactSubmission(body);
    if (!validation.isValid || !validation.data) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    const submissionData = validation.data;
    const submittedAt = new Date().toISOString();
    const origin = request.headers.get("origin") || request.headers.get("referer") || "https://arunasomesh.com";
    const websiteUrl = submissionData.websiteUrl || origin;

    // 2. Dispatch to AIS Cloud Run Webhook
    const aisResult = await triggerAISWebhook({
      name: submissionData.name,
      email: submissionData.email,
      subject: submissionData.subject,
      message: submissionData.message,
      websiteUrl: websiteUrl,
    });

    const inquiryId = aisResult.data?.inquiryId || undefined;
    const queryMessages = aisResult.data?.queryMessages || [];
    let savedId: string | undefined = undefined;

    // 3. Persist complete record into Supabase Database
    const supabase = getServerSupabase();
    if (supabase) {
      try {
        // Try inserting with all extended columns (website_url, inquiry_id, query_messages)
        const { data, error } = await supabase
          .from("contact_submissions")
          .insert([
            {
              name: submissionData.name,
              email: submissionData.email,
              phone: submissionData.phone || null,
              subject: submissionData.subject || null,
              message: submissionData.message || null,
              website_url: websiteUrl,
              inquiry_id: inquiryId || null,
              query_messages: queryMessages,
              status: "new",
            },
          ])
          .select("id, created_at")
          .single();

        if (error) {
          // If schema has not added new columns yet, fallback to base insertion
          console.warn("[Contact API] Full schema insert fallback:", error.message);
          const fallback = await supabase
            .from("contact_submissions")
            .insert([
              {
                name: submissionData.name,
                email: submissionData.email,
                phone: submissionData.phone || null,
                subject: submissionData.subject || null,
                message: submissionData.message || null,
                status: "new",
              },
            ])
            .select("id, created_at")
            .single();

          if (fallback.data?.id) {
            savedId = fallback.data.id;
          }
        } else if (data?.id) {
          savedId = data.id;
        }
      } catch (dbError) {
        console.warn("[Contact API] Supabase connection warning:", dbError);
      }
    }

    // 4. Asynchronously trigger Make.com Webhook automation (if configured)
    const webhookResult = await triggerMakeWebhook({
      id: savedId || inquiryId,
      name: submissionData.name,
      email: submissionData.email,
      phone: submissionData.phone,
      subject: submissionData.subject,
      message: submissionData.message,
      submittedAt,
    });

    // 5. Return success response with inquiry details
    return NextResponse.json(
      {
        success: true,
        message: "Thanks! Your message has been received.",
        id: savedId || inquiryId,
        inquiryId: inquiryId || savedId,
        queryMessages,
        webhookDispatched: webhookResult.dispatched,
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    console.error("[Contact API] Unexpected error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/contact
 * Retrieves contact submissions (Authorized Admin only)
 * Supports pagination (?page=1&limit=20) and status filtering (?status=new)
 */
export async function GET(request: NextRequest) {
  try {
    // 1. Enforce authentication / authorization
    const authorized = await isAuthorizedAdmin(request);
    if (!authorized) {
      return NextResponse.json(
        { success: false, error: "Unauthorized access." },
        { status: 401 }
      );
    }

    const supabase = getServerSupabase();
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: "Database configuration is missing." },
        { status: 503 }
      );
    }

    // 2. Parse query parameters
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") || "20", 10) || 20));
    const status = searchParams.get("status");

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    // 3. Build query
    let query = supabase
      .from("contact_submissions")
      .select("id, name, email, phone, subject, message, status, created_at", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(from, to);

    if (status) {
      query = query.eq("status", status);
    }

    const { data, error, count } = await query;

    if (error) {
      console.error("[Contact API] Supabase query error:", error.message);
      return NextResponse.json(
        { success: false, error: "Failed to retrieve submissions." },
        { status: 500 }
      );
    }

    const total = count || 0;
    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      success: true,
      data: data || [],
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    });
  } catch (err: unknown) {
    console.error("[Contact API] Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
