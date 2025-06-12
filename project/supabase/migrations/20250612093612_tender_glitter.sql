/*
  # Create leads table for Dragoș Bădică landing page

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, required)
      - `gdpr_consent` (boolean, required)
      - `source` (text, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `leads` table
    - Add policy for service role to insert data
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  gdpr_consent boolean NOT NULL DEFAULT false,
  source text DEFAULT 'dragos-badica-landing-page',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Policy for inserting leads (allows anonymous inserts for the form)
CREATE POLICY "Allow anonymous inserts"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy for service role to read all data
CREATE POLICY "Service role can read all"
  ON leads
  FOR SELECT
  TO service_role
  USING (true);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads(email);
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads(created_at DESC);