import { NextRequest } from "next/server";
import { getServerSupabase, SubmissionStatus } from "./supabaseClient";

export interface ValidatedContactData {
  name: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message?: string | null;
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const VALID_STATUSES: SubmissionStatus[] = ["new", "read", "replied", "archived"];

/**
 * Basic HTML tag sanitization to prevent script injection
 */
export function sanitizeString(input: string): string {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/[<>]/g, "");
}

/**
 * Validates and sanitizes incoming contact submission body
 */
export function validateContactSubmission(body: unknown): {
  isValid: boolean;
  errors: string[];
  data?: ValidatedContactData;
} {
  const errors: string[] = [];

  if (!body || typeof body !== "object") {
    return { isValid: false, errors: ["Invalid request body. Expected JSON object."] };
  }

  const payload = body as Record<string, unknown>;

  // Validate Name
  if (typeof payload.name !== "string" || payload.name.trim() === "") {
    errors.push("Name is required and cannot be empty.");
  } else if (payload.name.trim().length > 100) {
    errors.push("Name cannot exceed 100 characters.");
  }

  // Validate Email
  if (typeof payload.email !== "string" || payload.email.trim() === "") {
    errors.push("Email is required and cannot be empty.");
  } else {
    const trimmedEmail = payload.email.trim();
    if (trimmedEmail.length > 255) {
      errors.push("Email cannot exceed 255 characters.");
    } else if (!EMAIL_REGEX.test(trimmedEmail)) {
      errors.push("Please provide a valid email address.");
    }
  }

  // Optional Phone
  let phone: string | null = null;
  if (payload.phone !== undefined && payload.phone !== null && payload.phone !== "") {
    if (typeof payload.phone !== "string") {
      errors.push("Phone must be a string.");
    } else if (payload.phone.trim().length > 50) {
      errors.push("Phone cannot exceed 50 characters.");
    } else {
      phone = sanitizeString(payload.phone.trim());
    }
  }

  // Optional Subject
  let subject: string | null = null;
  if (payload.subject !== undefined && payload.subject !== null && payload.subject !== "") {
    if (typeof payload.subject !== "string") {
      errors.push("Subject must be a string.");
    } else if (payload.subject.trim().length > 200) {
      errors.push("Subject cannot exceed 200 characters.");
    } else {
      subject = sanitizeString(payload.subject.trim());
    }
  }

  // Optional Message
  let message: string | null = null;
  if (payload.message !== undefined && payload.message !== null && payload.message !== "") {
    if (typeof payload.message !== "string") {
      errors.push("Message must be a string.");
    } else if (payload.message.trim().length > 5000) {
      errors.push("Message cannot exceed 5000 characters.");
    } else {
      message = sanitizeString(payload.message.trim());
    }
  }

  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  return {
    isValid: true,
    errors: [],
    data: {
      name: sanitizeString((payload.name as string).trim()),
      email: (payload.email as string).trim().toLowerCase(),
      phone,
      subject,
      message,
    },
  };
}

/**
 * Validates status update input
 */
export function validateStatus(status: unknown): { isValid: boolean; status?: SubmissionStatus } {
  if (typeof status === "string" && VALID_STATUSES.includes(status as SubmissionStatus)) {
    return { isValid: true, status: status as SubmissionStatus };
  }
  return { isValid: false };
}

/**
 * Validates whether the incoming request is authorized to perform administrative actions.
 */
export async function isAuthorizedAdmin(request: NextRequest): Promise<boolean> {
  const adminKeyHeader = request.headers.get("x-admin-key");
  const authHeader = request.headers.get("authorization");

  const configuredAdminKey = process.env.ADMIN_API_KEY;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  // 1. Check direct Admin API Key header
  if (configuredAdminKey && adminKeyHeader === configuredAdminKey) {
    return true;
  }

  // 2. Check Bearer token against Admin key or Service Role Key
  if (authHeader?.startsWith("Bearer ")) {
    const token = authHeader.substring(7).trim();

    if (configuredAdminKey && token === configuredAdminKey) {
      return true;
    }

    if (serviceRoleKey && token === serviceRoleKey) {
      return true;
    }

    // 3. Check Supabase Auth JWT token if a user session is present
    const supabase = getServerSupabase();
    if (supabase) {
      const { data: { user }, error } = await supabase.auth.getUser(token);
      if (!error && user) {
        return true;
      }
    }
  }

  return false;
}
