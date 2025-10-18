import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Assistant = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Smart <span className="text-gradient">Assistant</span>
          </h1>
          <p className="text-muted-foreground">Get personalized financial advice and guidance</p>
        </div>

        <Card className="p-8 text-center glass-effect border-primary/20">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
            <Sparkles className="h-10 w-10 text-primary-foreground" />
          </div>
          
          <h2 className="text-2xl font-bold text-foreground mb-3">AI Financial Assistant</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Your personal finance guide is here to help. Ask questions about budgeting, 
            saving strategies, or understanding financial terms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card className="p-4 text-left hover:shadow-md transition-all cursor-pointer">
              <MessageCircle className="h-5 w-5 text-primary mb-2" />
              <h3 className="font-semibold text-foreground text-sm mb-1">Quick Tips</h3>
              <p className="text-xs text-muted-foreground">Get instant advice on saving money</p>
            </Card>
            
            <Card className="p-4 text-left hover:shadow-md transition-all cursor-pointer">
              <MessageCircle className="h-5 w-5 text-primary mb-2" />
              <h3 className="font-semibold text-foreground text-sm mb-1">Explain Terms</h3>
              <p className="text-xs text-muted-foreground">Understand complex financial concepts</p>
            </Card>
            
            <Card className="p-4 text-left hover:shadow-md transition-all cursor-pointer">
              <MessageCircle className="h-5 w-5 text-primary mb-2" />
              <h3 className="font-semibold text-foreground text-sm mb-1">Budget Help</h3>
              <p className="text-xs text-muted-foreground">Create a personalized budget plan</p>
            </Card>
            
            <Card className="p-4 text-left hover:shadow-md transition-all cursor-pointer">
              <MessageCircle className="h-5 w-5 text-primary mb-2" />
              <h3 className="font-semibold text-foreground text-sm mb-1">Goal Planning</h3>
              <p className="text-xs text-muted-foreground">Set realistic financial goals</p>
            </Card>
          </div>

          <Button className="btn-gradient" size="lg">
            Start Conversation
          </Button>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Assistant;
