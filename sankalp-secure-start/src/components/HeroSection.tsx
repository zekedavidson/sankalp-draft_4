import { Button } from "@/components/ui/button";
import { Users, Star, ShieldCheck } from "lucide-react";
import heroFamily from "@/assets/hero-family.jpg";

const trustItems = [
  { icon: Users, label: "50,000+ Families" },
  { icon: Star, label: "4.8★ Rating" },
  { icon: ShieldCheck, label: "Secure & IRDAI Compliant" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-14">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroFamily}
          alt="Happy family protected by insurance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/65 to-card/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <ShieldCheck className="w-4 h-4" />
            Licensed Insurance Broker
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Your Shield for a{" "}
            <span className="text-gradient-primary">Secure Tomorrow</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Quick, transparent, and hassle-free insurance from a licensed insurance broker. Compare plans from top insurers and get the best coverage.
          </p>

          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg">
              Get a Free Quote
            </Button>
            <Button variant="heroOutline" size="lg">
              Compare Plans
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-muted-foreground">
                <item.icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
