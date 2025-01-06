import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-pearl">
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;