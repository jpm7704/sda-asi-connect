
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, QrCode } from "lucide-react";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "ASI International Convention 2024",
      date: "July 15-18, 2024",
      location: "Orlando, Florida",
      type: "Convention",
      attendees: 1250,
      status: "Open",
      description: "Annual ASI convention featuring business networking, workshops, and spiritual growth sessions"
    },
    {
      id: 2,
      title: "Pacific Northwest ASI Meeting",
      date: "March 22, 2024",
      location: "Seattle, Washington",
      type: "Regional",
      attendees: 180,
      status: "Open",
      description: "Regional networking event for Pacific Northwest ASI members"
    },
    {
      id: 3,
      title: "ASI Business Leadership Summit",
      date: "May 10-11, 2024",
      location: "Atlanta, Georgia",
      type: "Workshop",
      attendees: 300,
      status: "Filling Fast",
      description: "Leadership development workshop for ASI business owners and executives"
    }
  ];

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Calendar className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-foreground mb-4">ASI Events & Registration</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Register for ASI conventions, meetings, and workshops. Connect with fellow Adventist business professionals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {events.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-muted-foreground mb-2">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={event.status === "Open" ? "secondary" : "default"}>
                          {event.status}
                        </Badge>
                        <Badge variant="outline">{event.type}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span className="text-sm">{event.attendees} registered</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">View Details</Button>
                        <Button size="sm">Register Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Registration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Event Code or Name" />
                <Input placeholder="Your ASI Member ID" />
                <Input placeholder="Email Address" />
                <Button className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Quick Register
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <QrCode className="h-5 w-5" />
                  <span>Digital Card Ready</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <QrCode className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground mb-4">
                    Your ASI digital business card is ready for easy contact sharing at events
                  </p>
                  <Button variant="outline" size="sm">View My Card</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
