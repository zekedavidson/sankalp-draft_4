import { GitCompare, SlidersHorizontal, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: GitCompare,
    step: "01",
    title: "Compare Plans",
    description: "Browse and compare Life or Motor insurance plans from top insurers.",
  },
  {
    icon: SlidersHorizontal,
    step: "02",
    title: "Customize Coverage",
    description: "Tailor your coverage, get instant quotes, and find the perfect fit.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Get Insured",
    description: "Secure payment and receive your policy document instantly via email.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            Simple Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Getting insured has never been easier. Three simple steps to peace of mind.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.step} className="flex items-center gap-6">
              <div className="bg-card rounded-2xl p-8 text-center card-elevated flex-1 min-w-[220px]">
                <div className="text-xs font-bold text-accent mb-3 tracking-widest">
                  STEP {step.step}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block w-6 h-6 text-primary/40 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
