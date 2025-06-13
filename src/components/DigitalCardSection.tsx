
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { QrCode, Share, Download, Smartphone, Zap, Users } from "lucide-react";

const DigitalCardSection = () => {
  return (
    <section id="digital-cards" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <QrCode className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-foreground mb-4">ASI Digital Business Cards</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Instantly share your contact information at ASI events, conferences, and networking sessions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <QrCode className="h-5 w-5" />
                <span>Your ASI Digital Card</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border-2 border-dashed border-primary/20">
                <div className="w-32 h-32 bg-primary/20 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <QrCode className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                <p className="text-muted-foreground mb-1">Tech Solutions Inc.</p>
                <p className="text-sm text-muted-foreground mb-4">ASI Member #12345</p>
                <Badge className="mb-4">Active Member</Badge>
                <div className="flex space-x-2 justify-center">
                  <Button size="sm">
                    <Share className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>Quick Contact Exchange</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-accent/50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Sarah Johnson connected</p>
                      <p className="text-sm text-muted-foreground">Marketing Director • 2 minutes ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-accent/50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Michael Chen connected</p>
                      <p className="text-sm text-muted-foreground">Tech Entrepreneur • 5 minutes ago</p>
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    <Smartphone className="h-4 w-4 mr-2" />
                    Scan Contact QR Code
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Card Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Instant contact sharing via QR code</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Auto-sync with ASI member directory</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Real-time contact exchange at events</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Business card with ASI branding</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground">2,847</h3>
              <p className="text-muted-foreground">Digital Cards Created</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground">15,623</h3>
              <p className="text-muted-foreground">Contact Exchanges</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <QrCode className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground">98%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DigitalCardSection;
