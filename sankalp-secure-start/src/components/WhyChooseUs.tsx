import { Zap, Scale, Eye, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast & Assisted Buying",
    description: "Get insured in minutes with our streamlined digital journey and expert assistance.",
  },
  {
    icon: Scale,
    title: "Unbiased Comparison",
    description: "Compare products fairly without misleading rankings or biased recommendations.",
  },
  {
    icon: Eye,
    title: "Transparent Commissions",
    description: "Full disclosure of commissions as per IRDAI norms. No hidden charges, ever.",
  },
  {
    icon: Headphones,
    title: "24/7 Claims Assistance",
    description: "Round-the-clock support to help you through every step of the claims process.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            Why Sankalp
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We put your interests first with transparent, compliant, and customer-centric insurance solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-6 card-elevated group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
