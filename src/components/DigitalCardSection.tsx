
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { QrCode, Scan, Share, Camera } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const DigitalCardSection = () => {
  const [showScanner, setShowScanner] = useState(false);
  const { toast } = useToast();

  const handleShareContact = () => {
    toast({
      title: "Profile Required",
      description: "Please create your profile first to share your contact information.",
    });
  };

  const handleScanContact = () => {
    toast({
      title: "Scanner Ready",
      description: "QR code scanning functionality will be available once profiles are created.",
    });
    setShowScanner(false);
  };

  return (
    <section id="digital-cards" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <QrCode className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-foreground mb-4">Digital Business Cards</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Share your ASI contact instantly with QR codes
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card>
            <CardContent className="p-8 text-center">
              {/* QR Code Placeholder */}
              <div className="mb-6">
                <div className="w-48 h-48 bg-accent rounded-lg mx-auto flex items-center justify-center">
                  <QrCode className="h-16 w-16 text-muted-foreground" />
                </div>
              </div>

              {/* Contact Info Placeholder */}
              <div className="mb-6 text-center bg-accent/30 p-4 rounded-lg">
                <h3 className="font-semibold text-lg text-muted-foreground">No Profile Created</h3>
                <p className="text-muted-foreground">Create your profile to generate your QR code</p>
              </div>

              <div className="flex flex-col space-y-3">
                <Button onClick={handleShareContact} className="w-full" disabled>
                  <Share className="h-4 w-4 mr-2" />
                  Share My Card
                </Button>
                
                <Dialog open={showScanner} onOpenChange={setShowScanner}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <Scan className="h-4 w-4 mr-2" />
                      Scan Contact
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Scan ASI Business Card</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-64 h-64 bg-accent rounded-lg flex items-center justify-center border-2 border-dashed">
                        <Camera className="h-16 w-16 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground text-center">
                        QR code scanning will be available once members create profiles
                      </p>
                      <Button onClick={handleScanContact} className="w-full">
                        Close
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DigitalCardSection;
