
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { QrCode, Scan, Share, Camera } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import QRCode from 'qrcode';

const DigitalCardSection = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const { toast } = useToast();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Sample contact data - in real app this would come from user profile
  const contactData = {
    name: "John Doe",
    title: "Sales Manager",
    company: "ASI Member Company",
    email: "john.doe@company.com",
    phone: "+1 (555) 123-4567",
    chapter: "Greater Los Angeles ASI"
  };

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        // Create vCard format for contact sharing
        const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${contactData.name}
ORG:${contactData.company}
TITLE:${contactData.title}
EMAIL:${contactData.email}
TEL:${contactData.phone}
NOTE:ASI Chapter: ${contactData.chapter}
END:VCARD`;

        const url = await QRCode.toDataURL(vCard, {
          width: 200,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });
        setQrCodeUrl(url);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };

    generateQRCode();
  }, []);

  const handleShareContact = () => {
    if (navigator.share && qrCodeUrl) {
      navigator.share({
        title: 'ASI Business Card',
        text: `${contactData.name} - ${contactData.company}`,
        url: qrCodeUrl
      }).catch(console.error);
    } else {
      // Fallback: copy contact info to clipboard
      const contactText = `${contactData.name}\n${contactData.title}\n${contactData.company}\n${contactData.email}\n${contactData.phone}`;
      navigator.clipboard.writeText(contactText).then(() => {
        toast({
          title: "Contact Copied",
          description: "Contact information copied to clipboard!",
        });
      });
    }
  };

  const handleScanContact = () => {
    // Simulate scanning a contact
    toast({
      title: "Contact Scanned",
      description: "New ASI member contact added to your network!",
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
              {/* Real QR Code */}
              <div className="mb-6">
                {qrCodeUrl ? (
                  <img 
                    src={qrCodeUrl} 
                    alt="Contact QR Code"
                    className="w-48 h-48 mx-auto border rounded-lg"
                  />
                ) : (
                  <div className="w-48 h-48 bg-accent rounded-lg mx-auto flex items-center justify-center">
                    <QrCode className="h-16 w-16 text-muted-foreground" />
                  </div>
                )}
              </div>

              {/* Contact Info */}
              <div className="mb-6 text-left bg-accent/30 p-4 rounded-lg">
                <h3 className="font-semibold text-lg">{contactData.name}</h3>
                <p className="text-muted-foreground">{contactData.title}</p>
                <p className="text-muted-foreground">{contactData.company}</p>
                <p className="text-sm text-muted-foreground mt-2">{contactData.chapter}</p>
              </div>

              <div className="flex flex-col space-y-3">
                <Button onClick={handleShareContact} className="w-full">
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
                        Point your camera at an ASI member's QR code
                      </p>
                      <Button onClick={handleScanContact} className="w-full">
                        Simulate Scan
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
