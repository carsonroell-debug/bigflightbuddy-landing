import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready for Your Next Solo Adventure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of solo travelers who use our AI travel buddy to plan trips like pros. Get your free packing list and start exploring.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-base px-8 py-6 h-auto group font-semibold">
              Get Free Packing List
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6 h-auto font-medium">
              <a id="airalo-link" href="https://airalo.pxf.io/YOUR_AIRALO_AFFILIATE_ID" target="_blank" rel="nofollow noopener">Get an eSIM (Airalo)</a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            100% Free • Instant Access • Curated for Solo Travelers
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
