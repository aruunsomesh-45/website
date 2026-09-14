import { NextResponse } from "next/server";
import { getServerSupabase } from "@/lib/supabaseClient";

export const dynamic = "force-dynamic";

/**
 * GET /api/health
 * Lightweight keep-alive endpoint that pings Supabase to prevent
 * the free-tier project from pausing due to inactivity.
 * Designed to be called by an external cron service (e.g. cron-job.org).
 */
export async function GET() {
  const timestamp = new Date().toISOString();

  try {
    const supabase = getServerSupabase();

    if (!supabase) {
      return NextResponse.json(
        {
          status: "degraded",
          message: "Supabase client not configured.",
          timestamp,
        },
        { status: 503 }
      );
    }

    // Execute a trivial query to keep the Supabase project active and verify table
    const { error } = await supabase
      .from("contact_submissions")
      .select("id")
      .limit(1);

    if (error) {
      console.error("[Health Check] Supabase query error:", error.message);
      return NextResponse.json(
        {
          status: "unhealthy",
          message: "Database query failed.",
          timestamp,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      status: "healthy",
      message: "Supabase connection active.",
      timestamp,
    });
  } catch (err: unknown) {
    console.error("[Health Check] Unexpected error:", err);
    return NextResponse.json(
      {
        status: "error",
        message: "Health check encountered an unexpected error.",
        timestamp,
      },
      { status: 500 }
    );
  }
}
