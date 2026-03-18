import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    review: "The comparison tool saved me ₹8,000 on my car insurance. Transparent and trustworthy service!",
  },
  {
    name: "Rajesh Kumar",
    rating: 5,
    review: "Got my life insurance policy in under 15 minutes. The team was incredibly helpful throughout.",
  },
  {
    name: "Anita Desai",
    rating: 4,
    review: "Love the unbiased approach. No pushy sales, just genuine advice and fair comparisons.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Trusted by thousands of families across India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl p-6 card-elevated">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < t.rating ? "text-accent fill-accent" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-4">
                "{t.review}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">{t.name[0]}</span>
                </div>
                <span className="text-sm font-medium text-foreground">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
