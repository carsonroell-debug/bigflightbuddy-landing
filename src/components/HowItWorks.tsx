import { Search, Sparkles, Plane } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Tell Us About Your Trip",
    description: "Enter your destination, travel dates, and trip type. Our AI analyzes your needs as a solo traveler.",
  },
  {
    icon: Sparkles,
    title: "Get Your Personalized List",
    description: "Instantly receive a smart packing list tailored to your destination, weather, and activities—no overthinking required.",
  },
  {
    icon: Plane,
    title: "Travel Light & Confident",
    description: "Pack efficiently with our curated tips, explore flight deals, and embark on your solo adventure stress-free.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Planning your solo adventure is simple. Just three easy steps to get started.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative flex flex-col md:flex-row gap-6 mb-12 last:mb-0">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-20 w-0.5 h-full bg-primary/30" />
                )}
                
                <div className="flex-shrink-0">
                  <div className="relative w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-[var(--shadow-soft)]">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold shadow-md">
                      {index + 1}
                    </div>
                  </div>
                </div>

                <div className="flex-1 bg-card rounded-lg p-6 border border-border shadow-[var(--shadow-soft)]">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
