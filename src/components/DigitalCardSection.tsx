
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { QrCode, Scan, Share } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const DigitalCardSection = () => {
  const [showScanner, setShowScanner] = useState(false);
  const { toast } = useToast();

  const handleShareContact = () => {
    toast({
      title: "Contact Shared",
      description: "Your ASI business card has been shared successfully!",
    });
  };

  const handleScanContact = () => {
    toast({
      title: "Contact Added",
      description: "New contact has been added to your ASI network!",
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
            Instantly share and collect business contacts at ASI events
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-32 h-32 bg-primary/20 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <QrCode className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Your ASI Digital Card</h3>
              <p className="text-muted-foreground mb-6">
                Share your contact instantly or scan others' cards
              </p>
              <div className="flex justify-center space-x-4">
                <Button onClick={handleShareContact}>
                  <Share className="h-4 w-4 mr-2" />
                  Share My Card
                </Button>
                <Dialog open={showScanner} onOpenChange={setShowScanner}>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <Scan className="h-4 w-4 mr-2" />
                      Scan Contact
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Scan Business Card</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-48 h-48 bg-accent rounded-lg flex items-center justify-center">
                        <Scan className="h-16 w-16 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground text-center">
                        Point your camera at the QR code to add contact
                      </p>
                      <Button onClick={handleScanContact} className="w-full">
                        Add Contact
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
