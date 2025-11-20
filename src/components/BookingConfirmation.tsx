import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MapPin, Clock, Plane } from "lucide-react";

interface BookingConfirmationProps {
  podId: string;
  tier: string;
  distance: number;
  fare: number;
  flightTime: number;
  arrivalTime: number;
  onNewBooking: () => void;
}

export default function BookingConfirmation({
  podId,
  tier,
  distance,
  fare,
  flightTime,
  arrivalTime,
  onNewBooking,
}: BookingConfirmationProps) {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 animate-slide-up">
      <Card className="max-w-md w-full p-8 bg-card border-primary/30 shadow-2xl shadow-primary/20">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <CheckCircle2 className="w-20 h-20 text-primary animate-pulse-glow" />
              <div className="absolute inset-0 animate-ping">
                <CheckCircle2 className="w-20 h-20 text-primary opacity-20" />
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Booking Confirmed!
            </h2>
            <p className="text-muted-foreground">
              Your flying taxi is on its way
            </p>
          </div>

          <div className="bg-primary/10 backdrop-blur-sm rounded-xl p-6 border border-primary/20 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Pod ID</span>
              <span className="text-lg font-mono font-bold text-primary">
                {podId}
              </span>
            </div>
            
            <div className="h-px bg-border"></div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div className="flex-1 text-left">
                  <p className="text-xs text-muted-foreground">Arrival Time</p>
                  <p className="text-lg font-semibold text-foreground">
                    ~{arrivalTime} minutes
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Plane className="w-5 h-5 text-accent" />
                <div className="flex-1 text-left">
                  <p className="text-xs text-muted-foreground">Flight Duration</p>
                  <p className="text-lg font-semibold text-foreground">
                    {flightTime} minutes
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-500" />
                <div className="flex-1 text-left">
                  <p className="text-xs text-muted-foreground">Distance</p>
                  <p className="text-lg font-semibold text-foreground">
                    {distance.toFixed(1)} km
                  </p>
                </div>
              </div>
            </div>
            
            <div className="h-px bg-border"></div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total Fare</span>
              <span className="text-3xl font-bold text-primary">
                ₹{fare.toFixed(0)}
              </span>
            </div>
          </div>

          <div className="text-xs text-muted-foreground bg-muted/20 rounded-lg p-3">
            <p>Track your pod in real-time via our mobile app</p>
          </div>

          <Button
            onClick={onNewBooking}
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/30 transition-all hover:scale-105"
          >
            Book Another Ride
          </Button>
        </div>
      </Card>
    </div>
  );
}
