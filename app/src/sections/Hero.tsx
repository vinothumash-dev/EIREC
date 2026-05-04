import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };
    window.addEventListener('scroll', handleParallax, { passive: true });
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        ref={heroRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          backgroundImage: 'url(/images/hero-dark.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Energy & Technical Services
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            Delivering Critical{' '}
            <span className="text-amber-400">Energy Infrastructure</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
            Technical execution, field services, and project solutions across the global energy sector. 
            From installation and commissioning through to operations, maintenance, and turnarounds.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-white/90 font-semibold px-8"
              onClick={() => scrollToSection('#services')}
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-white bg-white/10 hover:bg-white/20 hover:text-white px-8"
              onClick={() => scrollToSection('#contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 pt-8 border-t border-white/20">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">Global</div>
              <div className="text-sm text-white/60 mt-1">Deployment</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">Full Lifecycle</div>
              <div className="text-sm text-white/60 mt-1">Support</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">Safety First</div>
              <div className="text-sm text-white/60 mt-1">Execution</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
