-- Create bookings table for flying taxi rides
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  pickup_lat DECIMAL(10, 8) NOT NULL,
  pickup_lng DECIMAL(11, 8) NOT NULL,
  destination_lat DECIMAL(10, 8) NOT NULL,
  destination_lng DECIMAL(11, 8) NOT NULL,
  distance_km DECIMAL(10, 2) NOT NULL,
  fare DECIMAL(10, 2) NOT NULL,
  tier TEXT NOT NULL CHECK (tier IN ('standard', 'premium', 'executive')),
  pod_id TEXT NOT NULL,
  estimated_arrival_minutes INTEGER NOT NULL,
  estimated_flight_minutes INTEGER NOT NULL,
  user_name TEXT,
  user_contact TEXT,
  status TEXT NOT NULL DEFAULT 'confirmed' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (for MVP demo purposes)
CREATE POLICY "Anyone can view bookings"
ON public.bookings
FOR SELECT
USING (true);

-- Create policy for public insert (for MVP demo purposes)
CREATE POLICY "Anyone can create bookings"
ON public.bookings
FOR INSERT
WITH CHECK (true);

-- Create index on created_at for efficient querying
CREATE INDEX idx_bookings_created_at ON public.bookings(created_at DESC);

-- Create index on status for filtering
CREATE INDEX idx_bookings_status ON public.bookings(status);