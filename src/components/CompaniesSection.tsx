
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2 } from "lucide-react";

const CompaniesSection = () => {
  return (
    <section id="companies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Building2 className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-foreground mb-4">Company Profiles</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect businesses, explore partnerships, and discover collaboration opportunities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5" />
                  <span>Register Your Company</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Company Name" />
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Industry" />
                  <Input placeholder="Company Size" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Founded Year" type="number" />
                  <Input placeholder="Revenue Range" />
                </div>
                <Input placeholder="Website URL" />
                <Input placeholder="Business Email" />
                <Input placeholder="Phone Number" />
                <Textarea placeholder="Company Description - What does your company do? What services or products do you offer? What kind of partnerships are you seeking?" />
                <Input placeholder="Address/Location" />
                <Input placeholder="Key Services/Products" />
                <Button className="w-full">
                  <Building2 className="h-4 w-4 mr-2" />
                  Register Company
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Featured Companies</CardTitle>
              </CardHeader>
              <CardContent className="p-12 text-center">
                <Building2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Companies Yet</h3>
                <p className="text-muted-foreground">
                  Be the first to register your company!
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Partnership Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <h5 className="font-semibold text-primary">Joint Ventures</h5>
                    <p className="text-muted-foreground">Collaborate on new projects</p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <h5 className="font-semibold text-primary">Service Exchange</h5>
                    <p className="text-muted-foreground">Trade complementary services</p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <h5 className="font-semibold text-primary">Referral Partners</h5>
                    <p className="text-muted-foreground">Refer clients to each other</p>
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

export default CompaniesSection;
