import { useState, useEffect } from "react";
import { BookOpen, Clock, Star, BarChart3, Shield, CreditCard, LineChart, TrendingUp, PiggyBank } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const lessons = [
  {
    id: 1,
    title: "Understanding Interest Rates",
    description: "Learn how interest rates work and their impact on loans and savings.",
    duration: "15 min",
    difficulty: "Beginner",
    category: "Banking",
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    url: "https://www.youtube.com/watch?v=VgcqPpYz8NA",
  },
  {
    id: 2,
    title: "Building an Emergency Fund",
    description: "Essential guide to creating a financial safety net.",
    duration: "20 min",
    difficulty: "Beginner",
    category: "Savings",
    icon: <Shield className="h-10 w-10 text-accent" />,
    url: "https://www.youtube.com/watch?v=aOqJsdzZqvU",
  },
  {
    id: 3,
    title: "Debt Management Strategies",
    description: "Effective methods to pay off and manage debt.",
    duration: "25 min",
    difficulty: "Intermediate",
    category: "Debt",
    icon: <CreditCard className="h-10 w-10 text-warning" />,
    url: "https://www.youtube.com/watch?v=msiD9TJzZcE",
  },
  {
    id: 4,
    title: "Investment Basics",
    description: "Introduction to stocks, bonds, and diversification.",
    duration: "30 min",
    difficulty: "Intermediate",
    category: "Investing",
    icon: <TrendingUp className="h-10 w-10 text-success" />,
    url: "https://www.youtube.com/watch?v=p7HKvqRI_Bo",
  },
  {
    id: 5,
    title: "Credit Score Fundamentals",
    description: "How credit scores work and how to improve yours.",
    duration: "18 min",
    difficulty: "Beginner",
    category: "Credit",
    icon: <PiggyBank className="h-10 w-10 text-primary" />,
    url: "https://www.youtube.com/watch?v=8cCiqbSJ9fg",
  },
  {
    id: 6,
    title: "Retirement Planning",
    description: "Start planning for your financial future today.",
    duration: "35 min",
    difficulty: "Advanced",
    category: "Planning",
    icon: <LineChart className="h-10 w-10 text-destructive" />,
    url: "https://www.youtube.com/watch?v=6x3xFG1S6vE",
  },
];

const Education = () => {
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem("completedLessons") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("completedLessons", JSON.stringify(completedLessons));
  }, [completedLessons]);

  const handleLessonClick = (lessonId: number, url: string) => {
    if (!completedLessons.includes(String(lessonId))) {
      const updated = [...completedLessons, String(lessonId)];
      setCompletedLessons(updated);
    }
    window.open(url, "_blank");
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-success/10 text-success";
      case "Intermediate":
        return "bg-warning/10 text-warning";
      case "Advanced":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const progress = (completedLessons.length / lessons.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Education <span className="text-gradient">Hub</span>
          </h1>
          <p className="text-muted-foreground">Learn financial literacy through interactive lessons</p>
        </div>

        {/* Featured Lesson */}
        <Card
          onClick={() => handleLessonClick(0, "https://www.youtube.com/watch?v=wVQ1lZjdYuo")}
          className="p-8 mb-8 glass-effect border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 cursor-pointer hover:shadow-lg transition-all"
        >
          <div className="flex items-center mb-3">
            <Star className="h-5 w-5 text-warning fill-warning mr-2" />
            <span className="text-sm font-semibold text-primary">Featured Lesson</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-foreground mb-2">The 50/30/20 Budget Rule</h2>
              <p className="text-muted-foreground mb-3">
                Master the simple budgeting method used by financial experts worldwide.
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  22 min
                </span>
                <Badge className={getDifficultyColor("Beginner")}>Beginner</Badge>
              </div>
            </div>
            <BarChart3 className="h-14 w-14 text-primary" />
          </div>
        </Card>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <Card
              key={lesson.id}
              onClick={() => handleLessonClick(lesson.id, lesson.url)}
              className={`p-6 card-gradient hover:shadow-lg transition-all duration-300 cursor-pointer group ${
                completedLessons.includes(String(lesson.id)) ? "opacity-70 border-success/50" : ""
              }`}
            >
              <div className="mb-4 group-hover:scale-105 transition-transform">{lesson.icon}</div>
              <Badge className="mb-3 bg-primary/10 text-primary">{lesson.category}</Badge>
              <h3 className="text-lg font-semibold text-foreground mb-2">{lesson.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{lesson.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {lesson.duration}
                </span>
                <Badge className={getDifficultyColor(lesson.difficulty)}>
                  {lesson.difficulty}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Learning Progress */}
        <Card className="p-6 mt-10 glass-effect border-primary/20">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
              <BookOpen className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">Your Learning Journey</h3>
              <p className="text-muted-foreground mb-3">
                Complete lessons to unlock more content and track your progress.
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-primary">
                  {completedLessons.length}/{lessons.length}
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Fun Facts */}
        <Card className="p-6 mt-8 glass-effect border-accent/30">
          <h3 className="text-lg font-semibold text-foreground mb-2">💡 Did You Know?</h3>
          <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
            <li>People who track expenses save 25% more on average.</li>
            <li>Understanding compound interest is the #1 financial skill among top investors.</li>
            <li>Setting short-term goals increases long-term savings success by 40%.</li>
          </ul>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Education;
