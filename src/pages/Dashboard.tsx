import { Wallet, TrendingUp, Target, PiggyBank, Plus, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const recentTransactions = [
  { id: 1, name: "Grocery Shopping", amount: -45.20, category: "Food", date: "Today", type: "expense" },
  { id: 2, name: "Salary Deposit", amount: 2500.00, category: "Income", date: "Yesterday", type: "income" },
  { id: 3, name: "Electricity Bill", amount: -85.00, category: "Utilities", date: "2 days ago", type: "expense" },
  { id: 4, name: "Restaurant", amount: -32.50, category: "Food", date: "3 days ago", type: "expense" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Welcome back, <span className="text-gradient">User</span>!
          </h1>
          <p className="text-muted-foreground">Here's your financial overview for this month</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Balance"
            value="$4,532.50"
            icon={Wallet}
            trend="+12.5% from last month"
            trendUp={true}
          />
          <StatsCard
            title="Monthly Income"
            value="$2,500.00"
            icon={TrendingUp}
            trend="+5.2%"
            trendUp={true}
          />
          <StatsCard
            title="Monthly Expenses"
            value="$1,247.80"
            icon={ArrowDownRight}
            trend="-8.3%"
            trendUp={true}
          />
          <StatsCard
            title="Savings Goal"
            value="65%"
            icon={Target}
          />
        </div>

        {/* AI Insight Card */}
        <Card className="p-6 mb-8 glass-effect border-primary/20">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
              <PiggyBank className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Smart Insight</h3>
              <p className="text-muted-foreground">
                Great job! You saved <span className="text-success font-semibold">25%</span> more this month compared to last month. 
                Keep up the excellent spending habits!
              </p>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Transactions */}
          <Card className="lg:col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Recent Transactions</h2>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'income' ? 'bg-success/10' : 'bg-destructive/10'
                    }`}>
                      {transaction.type === 'income' ? (
                        <ArrowUpRight className={`h-5 w-5 text-success`} />
                      ) : (
                        <ArrowDownRight className={`h-5 w-5 text-destructive`} />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{transaction.name}</p>
                      <p className="text-sm text-muted-foreground">{transaction.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${
                      transaction.type === 'income' ? 'text-success' : 'text-destructive'
                    }`}>
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                    </p>
                    <p className="text-sm text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <Button className="w-full btn-gradient justify-start" size="lg">
                <Plus className="h-5 w-5 mr-2" />
                Add Transaction
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <Target className="h-5 w-5 mr-2" />
                Create Goal
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <TrendingUp className="h-5 w-5 mr-2" />
                View Reports
              </Button>
            </div>

            {/* Monthly Budget Progress */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-foreground mb-3">Monthly Budget</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Food</span>
                    <span className="font-medium">$320 / $500</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '64%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Transport</span>
                    <span className="font-medium">$85 / $200</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '42%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Entertainment</span>
                    <span className="font-medium">$145 / $150</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-warning rounded-full" style={{ width: '97%' }} />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
