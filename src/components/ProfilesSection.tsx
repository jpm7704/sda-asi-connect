
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
            <CardContent className="p-12 text-center">
              <User className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Members Yet</h3>
              <p className="text-muted-foreground">
                Be the first to create your member profile!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;
