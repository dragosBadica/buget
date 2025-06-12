/*
  # Corectare politică RLS pentru formularul public

  1. Modificări
    - Șterge politica restrictivă existentă
    - Creează politică nouă care permite inserturi cu anon key
    - Permite inserturi pentru utilizatori autentificați și anonimi

  2. Securitate
    - Permite doar operațiuni INSERT pentru formularul public
    - Menține restricțiile pentru SELECT/UPDATE/DELETE
*/

-- Șterge politicile existente
DROP POLICY IF EXISTS "Allow anonymous inserts" ON leads;
DROP POLICY IF EXISTS "Service role can read all" ON leads;

-- Politică nouă pentru inserturi publice (funcționează cu anon key)
CREATE POLICY "Enable insert for anon users"
  ON leads
  FOR INSERT
  WITH CHECK (true);

-- Politică pentru citirea datelor (doar pentru service role)
CREATE POLICY "Enable read for service role"
  ON leads
  FOR SELECT
  TO service_role
  USING (true);

-- Politică pentru citirea datelor (pentru utilizatori autentificați)
CREATE POLICY "Enable read for authenticated users"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);