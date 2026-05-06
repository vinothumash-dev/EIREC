import { useEffect, useRef, useState } from 'react';
import { Droplets, Wind, Settings, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const expertiseAreas = [
  {
    icon: Droplets,
    title: 'Oil & Gas',
    description: 'Comprehensive recruitment for upstream exploration and production, downstream refining and distribution, and chemical sector operations including petrochemical product production and supply.',
    image: `${import.meta.env.BASE_URL}images/oil-gas.jpg`,
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Wind,
    title: 'Renewable Energy',
    description: 'Specialized talent acquisition for onshore and offshore wind energy projects, supporting the global transition to sustainable energy sources.',
    image: `${import.meta.env.BASE_URL}images/renewable-energy.jpg`,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Settings,
    title: 'Turbomachinery & Grid',
    description: 'Technical advisory and field services for Combined Cycle Power Plants, Water Treatment & Desalination Plants, and grid infrastructure projects.',
    image: `${import.meta.env.BASE_URL}images/turbomachinery.jpg`,
    color: 'from-blue-500 to-indigo-600',
  },
];

export default function Expertise() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Our Expertise
            </span>
          </div>
          <h2
            className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Energy Sector Specializations
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            We provide comprehensive recruitment services across the energy sector. 
            We are dedicated to addressing energy challenges and playing a pivotal role 
            in the global energy transition.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.title}
              className={`group relative rounded-2xl overflow-hidden shadow-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Background Image */}
              <div className="relative h-[400px] lg:h-[450px]">
                <img
                  src={area.image}
                  alt={area.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${area.color} opacity-80 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <area.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{area.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">{area.description}</p>
                  
                  {/* Expandable Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      activeCard === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Looking for Specialized Talent?
              </h3>
              <p className="text-white/70 max-w-2xl mx-auto mb-6">
                Our industry experts understand the unique requirements of energy sector roles. 
                Let us help you find the perfect match for your project needs.
              </p>
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-white/90"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Discuss Your Requirements
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
