import { Shield, Heart, TrendingUp, Baby, PiggyBank, Umbrella, Car, BarChart2 } from "lucide-react";

const products = [
  { icon: Shield, label: "Term", subLabel: "Insurance" },
  { icon: Heart, label: "Whole Life", subLabel: "Plans" },
  { icon: TrendingUp, label: "ULIP", subLabel: "Plans" },
  { icon: Baby, label: "Child", subLabel: "Plans" },
  { icon: PiggyBank, label: "Savings", subLabel: "Plans" },
  { icon: Umbrella, label: "Endowment", subLabel: "Plans" },
  { icon: Car, label: "Motor", subLabel: "Insurance" },
  { icon: BarChart2, label: "Compare", subLabel: "Plans" },
];

const ProductBar = () => {
  return (
    <div className="relative z-20 max-w-5xl mx-auto px-4 -mt-12 sm:-mt-20 mb-12">
      <div className="rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 px-4 py-3 md:px-5 md:py-3 animate-fade-in-up" style={{ animationDelay: "0.5s", backgroundColor: "#F6F9FC" }}>
        <div className="flex justify-between items-start overflow-x-auto pb-2 sm:pb-0 hide-scrollbar gap-5 md:gap-3">
          {products.map((product, idx) => (
            <div key={idx} className="flex flex-col items-center justify-start text-center min-w-[60px] cursor-pointer group flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center mb-1.5 group-hover:bg-primary/5 group-hover:scale-110 transition-all duration-300 border border-slate-100">
                <product.icon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700 group-hover:text-primary transition-colors" strokeWidth={1.5} />
              </div>
              <span className="text-[13px] font-bold text-slate-900 leading-tight mb-0.5 whitespace-nowrap">{product.label}</span>
              <span className="text-[11px] text-slate-500 whitespace-nowrap">{product.subLabel}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductBar;
