import { Target, Plus, TrendingUp, X } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const goals = [
  {
    id: 1,
    name: "New Car",
    target: 15000,
    current: 8500,
    deadline: "Dec 2025",
  },
  {
    id: 2,
    name: "Wedding",
    target: 25000,
    current: 12000,
    deadline: "Jun 2026",
  },
  {
    id: 3,
    name: "Emergency Fund",
    target: 10000,
    current: 7500,
    deadline: "Mar 2025",
  },
];

const Goals = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-secondary/30">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Financial <span className="text-gradient">Goals</span>
            </h1>
            <p className="text-muted-foreground">
              Visualize, track, and stay motivated to achieve your financial dreams
            </p>
          </div>
          <Button className="btn-gradient" onClick={() => setShowModal(true)}>
            <Plus className="h-5 w-5 mr-2" />
            Add Goal
          </Button>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {goals.map((goal) => {
            const progress = (goal.current / goal.target) * 100;
            const remaining = goal.target - goal.current;

            const progressColor =
              progress < 40 ? "bg-red-500" : progress < 70 ? "bg-yellow-500" : "bg-green-500";
            
            return (
              <Card
                key={goal.id}
                className="p-6 bg-gradient-to-br from-white/90 to-secondary/10 hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 border border-primary/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground">{goal.name}</h3>
                  <span className="text-sm text-muted-foreground">{goal.deadline}</span>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-semibold text-primary">{progress.toFixed(0)}%</span>
                  </div>
                  <Progress value={progress} className={`h-3 ${progressColor}`} />
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current</span>
                    <span className="font-semibold text-foreground">
                      ${goal.current.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Target</span>
                    <span className="font-semibold text-foreground">
                      ${goal.target.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Remaining</span>
                    <span className="font-semibold text-warning">
                      ${remaining.toLocaleString()}
                    </span>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-4">
                  View Details
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Smart Saving Tips */}
        <Card className="p-6 glass-effect border-primary/20 mb-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
              <Target className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Smart Saving Tips Backed by Research
              </h3>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Automate your savings:</strong> Studies show that people who automate transfers save up to 40% more over time.
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Follow the 50/30/20 rule:</strong> Allocate 50% to needs, 30% to wants, and 20% to savings to maintain balance and discipline.
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Name your goals:</strong> Behavioral economists found that labeling savings accounts (like “Travel Fund”) increases motivation and savings rates.
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Avoid lifestyle inflation:</strong> Increase your savings rate whenever your income grows to build long-term stability.
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Leverage compound interest:</strong> Even small amounts saved early grow significantly through reinvested earnings over time.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Financial Insights Section */}
        <Card className="p-6 border-primary/20 bg-card">
          <h3 className="text-lg font-semibold text-foreground mb-3">Financial Insights & Recommendations</h3>
          <p className="text-muted-foreground mb-2">
            You’re progressing well toward your short- and mid-term goals. To strengthen your portfolio, consider setting a target savings-to-income ratio of 20%.
          </p>
          <p className="text-muted-foreground mb-2">
            Adjust for inflation when setting multi-year targets and regularly evaluate expenses. Breaking large goals into 25%, 50%, and 75% milestones helps maintain momentum and celebrate progress.
          </p>
          <p className="text-muted-foreground">
            Regularly reviewing and adapting your goals ensures you stay aligned with changing financial conditions and personal priorities. Consistency, not perfection, drives long-term success.
          </p>
        </Card>
      </main>

      <Footer />

      {/* Placeholder Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <Card className="p-6 max-w-sm w-full relative">
            <button
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
              onClick={() => setShowModal(false)}
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-xl font-semibold mb-2">Add Goal</h2>
            <p className="text-muted-foreground mb-4">
              The interactive Add Goal feature will be available soon. For now, this MVP demonstrates the visual and analytical features of MoneyTalks.
            </p>
            <Button className="w-full" onClick={() => setShowModal(false)}>
              Got it
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Goals;
