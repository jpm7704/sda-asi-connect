
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, User, Award, Briefcase } from "lucide-react";

const ProfilesSection = () => {
  return (
    <section id="profiles" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Users className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-foreground mb-4">Personal Profiles</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build your professional presence and showcase your expertise to potential partners
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Create Your Profile</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Professional Title" />
              <Input placeholder="Company/Organization" />
              <Input placeholder="Email Address" />
              <Input placeholder="Phone Number" />
              <Textarea placeholder="Professional Bio - Tell others about your experience, skills, and what you're looking for in business partnerships..." />
              <Input placeholder="Industry/Specialization" />
              <Input placeholder="Years of Experience" type="number" />
              <Button className="w-full">
                <User className="h-4 w-4 mr-2" />
                Create Profile
              </Button>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>Featured Professionals</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Sarah Johnson</h4>
                      <p className="text-sm text-muted-foreground">Marketing Director • 8 years exp</p>
                      <p className="text-xs text-muted-foreground">Digital Marketing & Brand Strategy</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Michael Chen</h4>
                      <p className="text-sm text-muted-foreground">Tech Entrepreneur • 12 years exp</p>
                      <p className="text-xs text-muted-foreground">Software Development & AI</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Emma Rodriguez</h4>
                      <p className="text-sm text-muted-foreground">Financial Consultant • 10 years exp</p>
                      <p className="text-xs text-muted-foreground">Investment & Risk Management</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5" />
                  <span>Profile Benefits</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Connect with like-minded professionals</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Showcase your expertise and experience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Discover business opportunities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Build your professional network</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;
