
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Database, Plus, Table, FileText } from "lucide-react";
import { useState } from "react";

const DatabaseSection = () => {
  const [databases, setDatabases] = useState([
    { id: 1, name: "Client Database", type: "Customer Management", records: 250 },
    { id: 2, name: "Product Inventory", type: "Inventory", records: 150 },
    { id: 3, name: "Business Contacts", type: "Networking", records: 420 }
  ]);

  return (
    <section id="database" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Database className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-foreground mb-4">Database Creation Hub</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create, manage, and organize your business data with powerful database tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Table className="h-5 w-5" />
                  <span>Your Databases</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {databases.map((db) => (
                    <div key={db.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                      <div>
                        <h4 className="font-semibold text-foreground">{db.name}</h4>
                        <p className="text-sm text-muted-foreground">{db.type} • {db.records} records</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="h-5 w-5" />
                  <span>Create New Database</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Database Name" />
                <select className="w-full p-2 border border-border rounded-md bg-background">
                  <option>Customer Management</option>
                  <option>Inventory</option>
                  <option>Networking</option>
                  <option>Financial</option>
                  <option>Project Management</option>
                </select>
                <Button className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Database
                </Button>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-3">Quick Templates</h4>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Client Database
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Business Contacts
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Project Tracker
                    </Button>
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

export default DatabaseSection;
