-- Contact Submissions Extended Migration (v2)
-- Updates contact_submissions schema to persist website_url, inquiry_id, and query_messages

-- 1. Ensure table exists with all standard columns
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT,
    message TEXT,
    website_url TEXT,
    inquiry_id TEXT,
    query_messages JSONB DEFAULT '[]'::jsonb,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Add columns if table already exists in older migration state
ALTER TABLE public.contact_submissions 
ADD COLUMN IF NOT EXISTS website_url TEXT,
ADD COLUMN IF NOT EXISTS inquiry_id TEXT,
ADD COLUMN IF NOT EXISTS query_messages JSONB DEFAULT '[]'::jsonb;

-- 3. Indexes for fast lookup
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON public.contact_submissions (status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON public.contact_submissions (email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_inquiry_id ON public.contact_submissions (inquiry_id);

-- 4. Automatic updated_at trigger
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

-- 5. Row Level Security (RLS)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public submission insertion" ON public.contact_submissions;
CREATE POLICY "Allow public submission insertion"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated read submissions" ON public.contact_submissions;
CREATE POLICY "Allow authenticated read submissions"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "Allow authenticated update submissions" ON public.contact_submissions;
CREATE POLICY "Allow authenticated update submissions"
ON public.contact_submissions
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated delete submissions" ON public.contact_submissions;
CREATE POLICY "Allow authenticated delete submissions"
ON public.contact_submissions
FOR DELETE
TO authenticated
USING (true);
