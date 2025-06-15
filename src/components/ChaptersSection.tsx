
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Building2 } from "lucide-react";

const ChaptersSection = () => {
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
            <Card>
              <CardContent className="p-12 text-center">
                <Building2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Chapters Available</h3>
                <p className="text-muted-foreground mb-4">
                  Be the first to create a chapter in your area!
                </p>
                <Button>Create Chapter</Button>
              </CardContent>
            </Card>
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
                    <span className="font-medium">0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Members:</span>
                    <span className="font-medium">0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>New Registrations:</span>
                    <span className="font-medium">0</span>
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
