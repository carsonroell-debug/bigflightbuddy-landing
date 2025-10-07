import { Bot, Bell, TrendingDown, Globe, Calendar, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "AI Packing Assistant",
    description: "Generate personalized packing lists tailored to your destination, trip length, and travel style.",
  },
  {
    icon: TrendingDown,
    title: "Curated Flight Deals",
    description: "Access exclusive flight deals curated specifically for solo travelers who want to save big.",
  },
  {
    icon: Calendar,
    title: "Travel Planning Tools",
    description: "Stay organized with our premium Notion Travel Planner—complete with budget tracker and daily planner.",
  },
  {
    icon: Globe,
    title: "Solo Travel Tips",
    description: "Get expert advice and field-tested tips to help you travel confidently and independently.",
  },
  {
    icon: Bell,
    title: "Travel Light Philosophy",
    description: "Learn how to pack smarter, not harder, so you can move freely and save on baggage fees.",
  },
  {
    icon: Shield,
    title: "Trusted Resources",
    description: "All recommendations are tested and verified by experienced solo travelers like you.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need for Solo Adventures
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI travel buddy and curated resources help solo travelers explore the world confidently and affordably.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="p-6 hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] border-border bg-card"
              >
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
