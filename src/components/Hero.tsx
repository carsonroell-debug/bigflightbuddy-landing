import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>
      
      <div className="container relative z-10 px-4 py-24 mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border">
            <Plane className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">AI-Powered Travel Assistant</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
          AI Travel Buddy for
          <br />
          <span className="text-primary">
            Smart Solo Travelers
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Use our AI-powered packing list generator and curated tips to save money, travel light, and explore the world. Your solo adventure starts here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-base px-8 py-6 h-auto font-semibold">
            Get Your Free Packing List
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 py-6 h-auto bg-card/50 backdrop-blur-sm font-medium">
            Explore Travel Tips
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>Trusted by Solo Travelers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>Smart Packing Tips</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>Travel Light</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
