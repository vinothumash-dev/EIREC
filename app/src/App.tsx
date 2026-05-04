import { Toaster } from '@/components/ui/sonner';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Services from '@/sections/Services';
import Capabilities from '@/sections/Capabilities';
import Approach from '@/sections/Approach';
import Clients from '@/sections/Clients';
import Team from '@/sections/Team';
import Contact from '@/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Capabilities />
        <Approach />
        <Clients />
        <Team />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
