
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Database, Search, Plus } from "lucide-react";

const DatabaseSection = () => {
  return (
    <section id="database" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Database className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-foreground mb-4">ASI Business Directory</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple and effective directory of ASI businesses and professionals
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Find ASI Businesses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4">
                <Input placeholder="What are you looking for?" className="flex-1" />
                <Input placeholder="Location" className="flex-1" />
                <Button>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <Button variant="outline" className="h-20 flex-col">
                  <span className="text-2xl mb-1">🏥</span>
                  <span className="text-sm">Healthcare</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <span className="text-2xl mb-1">🏗️</span>
                  <span className="text-sm">Construction</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <span className="text-2xl mb-1">💼</span>
                  <span className="text-sm">Professional</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <span className="text-2xl mb-1">🍽️</span>
                  <span className="text-sm">Food Service</span>
                </Button>
              </div>
              
              <div className="text-center">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  List Your Business
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DatabaseSection;
