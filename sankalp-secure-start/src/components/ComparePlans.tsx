import { Button } from "@/components/ui/button";
import { Shield, CheckCircle } from "lucide-react";

const plans = [
  {
    insurer: "LIC of India",
    type: "Term Life",
    premium: "₹8,400/yr",
    cover: "₹1 Crore",
    features: ["30-year term", "Tax benefits u/s 80C", "Death benefit"],
  },
  {
    insurer: "HDFC Life",
    type: "Term Life",
    premium: "₹7,200/yr",
    cover: "₹1 Crore",
    features: ["Online discount", "Critical illness rider", "Flexible payout"],
  },
  {
    insurer: "ICICI Prudential",
    type: "Term Life",
    premium: "₹7,800/yr",
    cover: "₹1 Crore",
    features: ["Accidental death benefit", "Premium waiver", "Joint life option"],
  },
];

const ComparePlans = () => {
  return (
    <section id="compare" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            Compare
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Compare Plans Side by Side
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Transparent comparison from leading insurers. No biased rankings — you decide what's best.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.insurer} className="bg-card rounded-2xl p-6 card-elevated">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">{plan.insurer}</h3>
                  <span className="text-xs text-muted-foreground">{plan.type}</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Premium</span>
                  <span className="text-sm font-semibold text-foreground">{plan.premium}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Cover</span>
                  <span className="text-sm font-semibold text-foreground">{plan.cover}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button variant="hero" size="default" className="w-full">
                Get Policy
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparePlans;
