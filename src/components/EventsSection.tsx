
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const EventsSection = () => {
  const events = [
    {
      title: "ASI Annual Convention",
      date: "July 15-18, 2024",
      location: "Orlando, Florida"
    },
    {
      title: "Local ASI Meeting",
      date: "March 22, 2024",
      location: "Seattle, Washington"
    },
    {
      title: "Business Workshop",
      date: "May 10, 2024",
      location: "Atlanta, Georgia"
    }
  ];

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
          <div className="grid gap-6">
            {events.map((event, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <div className="flex items-center space-x-4 text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <Button>Register</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
