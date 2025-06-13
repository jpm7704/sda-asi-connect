
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, MapPin, Calendar, Settings } from "lucide-react";

const ChaptersSection = () => {
  const chapters = [
    {
      id: 1,
      name: "Greater Los Angeles ASI",
      location: "Los Angeles, CA",
      members: 145,
      president: "David Martinez",
      nextMeeting: "March 15, 2024",
      status: "Active"
    },
    {
      id: 2,
      name: "New York Metro ASI",
      location: "New York, NY",
      members: 203,
      president: "Sarah Johnson",
      nextMeeting: "March 20, 2024",
      status: "Active"
    },
    {
      id: 3,
      name: "Texas Central ASI",
      location: "Dallas, TX",
      members: 98,
      president: "Michael Chen",
      nextMeeting: "March 18, 2024",
      status: "Active"
    },
    {
      id: 4,
      name: "Pacific Northwest ASI",
      location: "Seattle, WA",
      members: 167,
      president: "Emma Rodriguez",
      nextMeeting: "March 22, 2024",
      status: "Active"
    }
  ];

  return (
    <section id="chapters" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Building2 className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-foreground mb-4">ASI Chapters</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with your local ASI chapter. Manage registrations, events, and member networking.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {chapters.map((chapter) => (
                <Card key={chapter.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg mb-2">{chapter.name}</CardTitle>
                        <div className="flex items-center space-x-1 text-muted-foreground mb-1">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{chapter.location}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span className="text-sm">{chapter.members} members</span>
                        </div>
                      </div>
                      <Badge variant="secondary">{chapter.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm"><strong>President:</strong> {chapter.president}</p>
                      <div className="flex items-center space-x-1 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span><strong>Next Meeting:</strong> {chapter.nextMeeting}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">Join Chapter</Button>
                      <Button size="sm">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Chapter Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Manage My Chapter
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Member Registration
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Meeting
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Building2 className="h-4 w-4 mr-2" />
                  Create New Chapter
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Find Your Chapter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Enter your city or zip code" />
                <Button className="w-full">
                  <MapPin className="h-4 w-4 mr-2" />
                  Find Nearest Chapter
                </Button>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">No local chapter?</p>
                  <Button variant="link" size="sm">Start one in your area</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChaptersSection;
