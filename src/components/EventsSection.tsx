
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const EventsSection = () => {
  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Calendar className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-foreground mb-4">ASI Events</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Register for upcoming ASI events and meetings
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-12 text-center">
              <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Events Available</h3>
              <p className="text-muted-foreground mb-4">
                There are currently no upcoming events. Check back soon!
              </p>
              <Button>Create Event</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
