
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Share } from "lucide-react";

const DigitalCardSection = () => {
  return (
    <section id="digital-cards" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <QrCode className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-foreground mb-4">Digital Business Cards</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Easy contact sharing at ASI events
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
                Scan to instantly share your contact information
              </p>
              <div className="flex justify-center space-x-4">
                <Button>
                  <Share className="h-4 w-4 mr-2" />
                  Share Card
                </Button>
                <Button variant="outline">View My Card</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DigitalCardSection;
