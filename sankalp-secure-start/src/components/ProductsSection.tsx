import { HeartPulse, Car, Bike } from "lucide-react";

const products = [
  {
    icon: HeartPulse,
    title: "Life Insurance",
    description: "Protect your family's future with comprehensive term & savings plans.",
    bgClass: "bg-primary/10",
    iconClass: "text-primary",
  },
  {
    icon: Car,
    title: "Private Car Insurance",
    description: "Complete protection for your car with hassle-free claims assistance.",
    bgClass: "bg-accent/15",
    iconClass: "text-accent-foreground",
  },
  {
    icon: Bike,
    title: "Two-Wheeler Insurance",
    description: "Affordable coverage for your bike with instant policy issuance.",
    bgClass: "bg-primary/10",
    iconClass: "text-primary",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            Phase 1 Products
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Insurance Made Simple
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose from our curated range of insurance products designed to protect what matters most.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-card rounded-2xl p-8 text-center card-elevated cursor-pointer group"
            >
              <div className={`w-16 h-16 rounded-2xl ${product.bgClass} flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <product.icon className={`w-8 h-8 ${product.iconClass}`} fill="currentColor" strokeWidth={1} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {product.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
