import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wallet, Target, BookOpen, TrendingUp } from "lucide-react";
import Icon2 from '/public/icon.png';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Wallet,
      title: "Smart eWallet",
      description: "Track your income and expenses effortlessly with intelligent categorization",
    },
    {
      icon: Target,
      title: "Goal Planning",
      description: "Set financial goals and watch your progress with visual tracking",
    },
    {
      icon: BookOpen,
      title: "Financial Education",
      description: "Learn through interactive lessons and improve your financial literacy",
    },
    {
      icon: TrendingUp,
      title: "AI Insights",
      description: "Get personalized advice and spending insights powered by AI",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-accent to-primary">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20  flex items-center justify-center mx-auto mb-8 ">
            <img 
              src={Icon2}
              alt="SellWay" 
              className="h-[300px] w-[250px] object-contain"
            />
              </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to <br />
            <span className="text-white/90">MoneyTalks</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Your personal finance assistant for tracking spending, achieving goals, 
            and building financial literacy
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate("/dashboard")}
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate("/login")}
              className="bg-white text-primary hover:bg-white/90 text-lg px-6 py-6"
            >
              Sign In
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
