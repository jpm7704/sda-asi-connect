
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Building2, MapPin, Users } from "lucide-react";

const ChaptersSection = () => {
  const chapters = [
    { name: "Greater Los Angeles ASI", location: "Los Angeles, CA", members: 145 },
    { name: "New York Metro ASI", location: "New York, NY", members: 203 },
    { name: "Texas Central ASI", location: "Dallas, TX", members: 98 },
    { name: "Pacific Northwest ASI", location: "Seattle, WA", members: 167 }
  ];

  return (
    <section id="chapters" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Building2 className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-foreground mb-4">ASI Chapters</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find and join your local ASI chapter
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {chapters.map((chapter, index) => (
                <Card key={index}>
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
                    </div>
                    <Button size="sm" className="w-full">Join Chapter</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Find Your Chapter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Enter your city or zip code" />
              <Button className="w-full">Find Chapter</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChaptersSection;
