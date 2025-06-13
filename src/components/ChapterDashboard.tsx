
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, Calendar, TrendingUp } from "lucide-react";

const ChapterDashboard = () => {
  const dashboardData = {
    totalMembers: 145,
    monthlyRevenue: 3625,
    activeRegistrations: 12,
    growthRate: 8.5
  };

  const recentRegistrations = [
    { name: "John Smith", email: "john@email.com", date: "2024-01-15", status: "Paid" },
    { name: "Mary Johnson", email: "mary@email.com", date: "2024-01-14", status: "Pending" },
    { name: "David Lee", email: "david@email.com", date: "2024-01-13", status: "Paid" }
  ];

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
                <p className="text-2xl font-bold">{dashboardData.totalMembers}</p>
                <p className="text-sm text-muted-foreground">Total Members</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">${dashboardData.monthlyRevenue}</p>
                <p className="text-sm text-muted-foreground">Monthly Revenue</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">{dashboardData.activeRegistrations}</p>
                <p className="text-sm text-muted-foreground">New This Month</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">{dashboardData.growthRate}%</p>
                <p className="text-sm text-muted-foreground">Growth Rate</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Registrations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentRegistrations.map((registration, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{registration.name}</p>
                      <p className="text-sm text-muted-foreground">{registration.email}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">{registration.date}</p>
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        registration.status === 'Paid' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {registration.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4">View All Registrations</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChapterDashboard;
