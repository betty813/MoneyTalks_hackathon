import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp } from "lucide-react";

const Reports = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Financial <span className="text-gradient">Reports</span>
          </h1>
          <p className="text-muted-foreground">Analyze your spending patterns and trends</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 card-gradient">
            <BarChart3 className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-1">Monthly Overview</h3>
            <p className="text-sm text-muted-foreground">Track spending by month</p>
          </Card>
          
          <Card className="p-6 card-gradient">
            <PieChart className="h-8 w-8 text-accent mb-3" />
            <h3 className="font-semibold text-foreground mb-1">Category Analysis</h3>
            <p className="text-sm text-muted-foreground">See spending by category</p>
          </Card>
          
          <Card className="p-6 card-gradient">
            <TrendingUp className="h-8 w-8 text-success mb-3" />
            <h3 className="font-semibold text-foreground mb-1">Trends</h3>
            <p className="text-sm text-muted-foreground">Compare month-to-month</p>
          </Card>
        </div>

        <Card className="p-8 text-center glass-effect">
          <div className="max-w-md mx-auto">
            <BarChart3 className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Reports Coming Soon</h2>
            <p className="text-muted-foreground">
              We're building powerful analytics tools to help you understand your finances better. 
              Stay tuned for detailed reports and insights!
            </p>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Reports;
