-- Contact Submissions Table Migration
-- Production schema for Next.js + Supabase contact backend

-- 1. Create table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT,
    message TEXT,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Indexes for efficient querying, filtering, and ordering
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON public.contact_submissions (status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON public.contact_submissions (email);

-- 3. Trigger to keep updated_at in sync
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_contact_submissions_updated_at ON public.contact_submissions;
CREATE TRIGGER set_contact_submissions_updated_at
BEFORE UPDATE ON public.contact_submissions
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- 5. RLS Policies

-- Allow anonymous and authenticated users to submit contact requests (INSERT only)
DROP POLICY IF EXISTS "Allow public submission insertion" ON public.contact_submissions;
CREATE POLICY "Allow public submission insertion"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Disallow anonymous reading: Only authenticated users (admins) can view submissions
DROP POLICY IF EXISTS "Allow authenticated read submissions" ON public.contact_submissions;
CREATE POLICY "Allow authenticated read submissions"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (true);

-- Disallow anonymous updating: Only authenticated users can update submissions (e.g. status)
DROP POLICY IF EXISTS "Allow authenticated update submissions" ON public.contact_submissions;
CREATE POLICY "Allow authenticated update submissions"
ON public.contact_submissions
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Disallow anonymous deleting: Only authenticated users can delete submissions
DROP POLICY IF EXISTS "Allow authenticated delete submissions" ON public.contact_submissions;
CREATE POLICY "Allow authenticated delete submissions"
ON public.contact_submissions
FOR DELETE
TO authenticated
USING (true);
