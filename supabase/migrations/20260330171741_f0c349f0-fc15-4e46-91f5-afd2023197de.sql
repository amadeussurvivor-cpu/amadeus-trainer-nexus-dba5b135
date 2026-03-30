
-- Add name and subject columns to contact_messages
ALTER TABLE public.contact_messages ADD COLUMN IF NOT EXISTS name text;
ALTER TABLE public.contact_messages ADD COLUMN IF NOT EXISTS subject text;

-- Allow anonymous inserts to contact_messages
CREATE POLICY "Anyone can insert contact messages"
ON public.contact_messages
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
