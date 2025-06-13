
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Building2, MapPin, Users, DollarSign } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ChaptersSection = () => {
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const { toast } = useToast();

  const chapters = [
    { 
      id: "la", 
      name: "Greater Los Angeles ASI", 
      location: "Los Angeles, CA", 
      members: 145,
      monthlyFee: 25,
      registrations: 12
    },
    { 
      id: "ny", 
      name: "New York Metro ASI", 
      location: "New York, NY", 
      members: 203,
      monthlyFee: 30,
      registrations: 18
    },
    { 
      id: "tx", 
      name: "Texas Central ASI", 
      location: "Dallas, TX", 
      members: 98,
      monthlyFee: 20,
      registrations: 8
    },
    { 
      id: "wa", 
      name: "Pacific Northwest ASI", 
      location: "Seattle, WA", 
      members: 167,
      monthlyFee: 25,
      registrations: 15
    }
  ];

  const handleJoinChapter = (chapterId: string) => {
    const chapter = chapters.find(c => c.id === chapterId);
    toast({
      title: "Chapter Joined!",
      description: `Welcome to ${chapter?.name}! Membership fee: $${chapter?.monthlyFee}/month`,
    });
    setSelectedChapter(null);
  };

  return (
    <section id="chapters" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Building2 className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-foreground mb-4">ASI Chapters</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join your local ASI chapter and manage memberships
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {chapters.map((chapter) => (
                <Card key={chapter.id}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{chapter.name}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{chapter.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{chapter.members} members</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>${chapter.monthlyFee}/month</span>
                      </div>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" className="w-full">Join Chapter</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Join {chapter.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="text-center">
                            <p className="text-lg font-semibold">Monthly Membership: ${chapter.monthlyFee}</p>
                            <p className="text-muted-foreground">Includes access to all chapter events and networking</p>
                          </div>
                          <Input placeholder="Full Name" />
                          <Input placeholder="Email Address" />
                          <Input placeholder="Phone Number" />
                          <Button 
                            onClick={() => handleJoinChapter(chapter.id)} 
                            className="w-full"
                          >
                            Complete Registration
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Find Your Chapter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Enter your city or zip code" />
                <Button className="w-full">Find Chapter</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Chapter Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Total Chapters:</span>
                    <span className="font-medium">{chapters.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Members:</span>
                    <span className="font-medium">{chapters.reduce((sum, c) => sum + c.members, 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>New Registrations:</span>
                    <span className="font-medium">{chapters.reduce((sum, c) => sum + c.registrations, 0)}</span>
                  </div>
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
