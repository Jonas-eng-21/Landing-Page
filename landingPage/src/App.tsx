import { Header } from "./components/layout/header";
import { FeaturesSection } from "./components/sections/FeaturesSection";
import { HeroSection } from "./components/sections/HeroSection";
import { HowItWorksSection } from "./components/sections/HowItWorksSection";


function App() {

  return (
    <>
      <div className="bg-neutral-silver min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
        </main>
       
      </div>
    </>
  );
}

export default App;
