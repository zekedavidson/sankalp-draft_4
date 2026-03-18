import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductBar from "@/components/ProductBar";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ComparePlans from "@/components/ComparePlans";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductBar />
      <ProductsSection />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <ComparePlans />
      <Footer />
    </div>
  );
};

export default Index;
