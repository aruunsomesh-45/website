import { NextRequest, NextResponse } from "next/server";
import { getServerSupabase } from "@/lib/supabaseClient";
import { validateContactSubmission, isAuthorizedAdmin } from "@/lib/contactValidation";

export const dynamic = "force-dynamic";

/**
 * POST /api/contact
 * Handles contact form submissions
 */
export async function POST(request: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON format in request body." },
        { status: 400 }
      );
    }

    // 1. Server-side validation and sanitization
    const validation = validateContactSubmission(body);
    if (!validation.isValid || !validation.data) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    // 2. Obtain Supabase server client
    const supabase = getServerSupabase();
    if (!supabase) {
      return NextResponse.json(
        {
          success: false,
          error: "Database configuration is not initialized on the server.",
        },
        { status: 503 }
      );
    }

    // 3. Insert record into Supabase contact_submissions table
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name: validation.data.name,
          email: validation.data.email,
          phone: validation.data.phone || null,
          subject: validation.data.subject || null,
          message: validation.data.message || null,
          status: "new",
        },
      ])
      .select("id, created_at")
      .single();

    if (error) {
      console.error("[Contact API] Supabase insertion error:", error.message);
      return NextResponse.json(
        {
          success: false,
          error: "Failed to save submission. Please try again later.",
        },
        { status: 500 }
      );
    }

    // 4. Return compact success response
    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully.",
        id: data?.id,
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
