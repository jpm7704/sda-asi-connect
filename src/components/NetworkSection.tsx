
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Users, TrendingUp, MessageCircle, Calendar } from "lucide-react";

const NetworkSection = () => {
  const opportunities = [
    {
      id: 1,
      title: "Looking for Marketing Partner",
      company: "TechFlow Solutions",
      type: "Partnership",
      industry: "Technology",
      description: "Seeking marketing agency for product launch campaign",
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Joint Venture Opportunity",
      company: "GreenLeaf Consulting",
      type: "Joint Venture",
      industry: "Sustainability",
      description: "Collaborate on large-scale environmental project",
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Seeking Tech Development Partner",
      company: "Digital Marketing Pro",
      type: "Service Exchange",
      industry: "Marketing",
      description: "Need custom software development for client portal",
      posted: "3 days ago"
    }
  ];

  return (
    <section id="network" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Network className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-foreground mb-4">Business Network</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Where opportunities meet preparation. You never know when opportunity can knock - be ready!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground">1,247</h3>
              <p className="text-muted-foreground">Active Members</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground">89</h3>
              <p className="text-muted-foreground">Active Opportunities</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground">342</h3>
              <p className="text-muted-foreground">Connections Made</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground">56</h3>
              <p className="text-muted-foreground">Deals Closed</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Latest Opportunities</span>
                  <Button size="sm">Post Opportunity</Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {opportunities.map((opp) => (
                    <div key={opp.id} className="border border-border rounded-lg p-6 hover:bg-accent/50 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-1">{opp.title}</h4>
                          <p className="text-muted-foreground">{opp.company}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">{opp.type}</Badge>
                          <Badge variant="outline">{opp.industry}</Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{opp.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{opp.posted}</span>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">Learn More</Button>
                          <Button size="sm">Connect</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Find Partners
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Meeting
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Post Opportunity
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Success Stories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">
                      "Found my perfect business partner through SDA ASI. Our joint venture is now generating 6-figure revenue!"
                    </p>
                    <p className="text-xs font-semibold">- Sarah M., Marketing Director</p>
                  </div>
                  
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">
                      "The networking opportunities here are incredible. Closed 3 major deals in 6 months."
                    </p>
                    <p className="text-xs font-semibold">- Michael C., Tech Entrepreneur</p>
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

export default NetworkSection;
