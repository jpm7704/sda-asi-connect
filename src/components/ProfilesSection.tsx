
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Users, User } from "lucide-react";

const ProfilesSection = () => {
  return (
    <section id="profiles" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Users className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-foreground mb-4">Member Profiles</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple member directory for easy networking
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Create Your Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Full Name" />
              <Input placeholder="Business/Company" />
              <Input placeholder="Phone Number" />
              <Input placeholder="Email" />
              <Input placeholder="Industry" />
              <Button className="w-full">Create Profile</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "John Smith", business: "Smith Construction", industry: "Construction" },
                  { name: "Mary Johnson", business: "Johnson Health Clinic", industry: "Healthcare" },
                  { name: "David Lee", business: "Lee Accounting", industry: "Professional Services" }
                ].map((member, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.business}</p>
                      <p className="text-xs text-muted-foreground">{member.industry}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;
