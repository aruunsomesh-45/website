import { NextRequest, NextResponse } from "next/server";
import { getServerSupabase } from "@/lib/supabaseClient";
import { isAuthorizedAdmin, validateStatus } from "@/lib/contactValidation";

export const dynamic = "force-dynamic";

interface RouteContext {
  params: Promise<{ id: string }>;
}

/**
 * GET /api/contact/:id
 * Retrieve a single contact submission by ID (Authorized Admin only)
 */
export async function GET(request: NextRequest, context: RouteContext) {
  try {
    const authorized = await isAuthorizedAdmin(request);
    if (!authorized) {
      return NextResponse.json(
        { success: false, error: "Unauthorized access." },
        { status: 401 }
      );
    }

    const { id } = await context.params;
    if (!id) {
      return NextResponse.json(
        { success: false, error: "Submission ID is required." },
        { status: 400 }
      );
    }

    const supabase = getServerSupabase();
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: "Database configuration is missing." },
        { status: 503 }
      );
    }

    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) {
      console.error("[Contact API] Fetch single submission error:", error.message);
      return NextResponse.json(
        { success: false, error: "Failed to retrieve submission." },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { success: false, error: "Submission not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    console.error("[Contact API] Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/contact/:id
 * Update status or fields of a contact submission (Authorized Admin only)
 */
export async function PATCH(request: NextRequest, context: RouteContext) {
  try {
    const authorized = await isAuthorizedAdmin(request);
    if (!authorized) {
      return NextResponse.json(
        { success: false, error: "Unauthorized access." },
        { status: 401 }
      );
    }

    const { id } = await context.params;
    if (!id) {
      return NextResponse.json(
        { success: false, error: "Submission ID is required." },
        { status: 400 }
      );
    }

    let body: Record<string, unknown>;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON body." },
        { status: 400 }
      );
    }

    const updates: Record<string, unknown> = {};

    if ("status" in body) {
      const statusValidation = validateStatus(body.status);
      if (!statusValidation.isValid || !statusValidation.status) {
        return NextResponse.json(
          {
            success: false,
            error: "Invalid status. Allowed values: 'new', 'read', 'replied', 'archived'.",
          },
          { status: 400 }
        );
      }
      updates.status = statusValidation.status;
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { success: false, error: "No valid fields provided to update." },
        { status: 400 }
      );
    }

    const supabase = getServerSupabase();
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: "Database configuration is missing." },
        { status: 503 }
      );
    }

    const { data, error } = await supabase
      .from("contact_submissions")
      .update(updates)
      .eq("id", id)
      .select()
      .maybeSingle();

    if (error) {
      console.error("[Contact API] Update submission error:", error.message);
      return NextResponse.json(
        { success: false, error: "Failed to update submission." },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { success: false, error: "Submission not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Submission updated successfully.",
      data,
    });
  } catch (err: unknown) {
    console.error("[Contact API] Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/contact/:id
 * Delete a contact submission by ID (Authorized Admin only)
 */
export async function DELETE(request: NextRequest, context: RouteContext) {
  try {
    const authorized = await isAuthorizedAdmin(request);
    if (!authorized) {
      return NextResponse.json(
        { success: false, error: "Unauthorized access." },
        { status: 401 }
      );
    }

    const { id } = await context.params;
    if (!id) {
      return NextResponse.json(
        { success: false, error: "Submission ID is required." },
        { status: 400 }
      );
    }

    const supabase = getServerSupabase();
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: "Database configuration is missing." },
        { status: 503 }
      );
    }

    const { error, count } = await supabase
      .from("contact_submissions")
      .delete({ count: "exact" })
      .eq("id", id);

    if (error) {
      console.error("[Contact API] Delete submission error:", error.message);
      return NextResponse.json(
        { success: false, error: "Failed to delete submission." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Submission deleted successfully.",
      deleted: (count ?? 1) > 0,
    });
  } catch (err: unknown) {
    console.error("[Contact API] Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
