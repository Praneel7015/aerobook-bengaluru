-- Bookings hold customers' names and phone numbers, so the public must not be
-- able to read them. The app only inserts (it no longer reads the row back).
DROP POLICY IF EXISTS "Anyone can view bookings" ON public.bookings;

-- The Solo Pod tier was added to the app but not to this check, so every Solo
-- booking was rejected by the database.
ALTER TABLE public.bookings DROP CONSTRAINT IF EXISTS bookings_tier_check;
ALTER TABLE public.bookings
  ADD CONSTRAINT bookings_tier_check CHECK (tier IN ('solo', 'standard', 'premium', 'executive'));
