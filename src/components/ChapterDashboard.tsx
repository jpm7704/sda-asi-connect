
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, DollarSign, Calendar, TrendingUp } from "lucide-react";

const ChapterDashboard = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Chapter Management</h2>
          <p className="text-xl text-muted-foreground">Track your chapter's growth and registrations</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">0</p>
                <p className="text-sm text-muted-foreground">Total Members</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">$0</p>
                <p className="text-sm text-muted-foreground">Monthly Revenue</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">0</p>
                <p className="text-sm text-muted-foreground">New This Month</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">0%</p>
                <p className="text-sm text-muted-foreground">Growth Rate</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-12 text-center">
              <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Registrations Yet</h3>
              <p className="text-muted-foreground mb-4">
                Registration data will appear here once members start joining.
              </p>
              <Button>Invite Members</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChapterDashboard;
