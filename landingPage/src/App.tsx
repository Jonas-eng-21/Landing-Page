import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/header";
import { CTASection } from "./components/sections/CTASection";
import { FeaturesSection } from "./components/sections/FeaturesSection";
import { HeroSection } from "./components/sections/HeroSection";
import { HowItWorksSection } from "./components/sections/HowItWorksSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";

function App() {
  return (
    <>
      <div className="bg-neutral-silver min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
