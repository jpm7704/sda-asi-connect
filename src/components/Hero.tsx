
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Users, Building2, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            SDA ASI Platform
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            The ultimate networking and database platform where opportunities meet preparation. 
            Create databases, build profiles, connect with companies, and grow your business network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Building Your Network
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Explore Platform
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Database className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Database Creation</h3>
              <p className="text-muted-foreground">Build and manage custom databases for your business needs</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Personal Profiles</h3>
              <p className="text-muted-foreground">Showcase your skills, experience, and business interests</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Company Profiles</h3>
              <p className="text-muted-foreground">Connect businesses and explore collaboration opportunities</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Business Growth</h3>
              <p className="text-muted-foreground">You never know when opportunity can knock - be ready</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
