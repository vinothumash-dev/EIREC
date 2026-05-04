import { useEffect, useRef, useState } from 'react';
import { Target, Layers, Link2, Flame, Globe, Cpu } from 'lucide-react';

const whyEirecPillars = [
  {
    icon: Target,
    title: 'Execution-Focused',
    description: 'We take ownership of scope and deliver through hands-on technical execution, not advisory alone.',
  },
  {
    icon: Layers,
    title: 'Multi-Sector Capability',
    description: 'Oil & gas, wind, power, and industrial processing — enabling support across the full energy value chain.',
  },
  {
    icon: Link2,
    title: 'OEM & EPC Alignment',
    description: 'Structured to integrate into complex project environments with minimal onboarding.',
  },
  {
    icon: Flame,
    title: 'High-Pressure Delivery',
    description: 'Specialised in commissioning, outages, and shutdowns where time and precision are critical.',
  },
  {
    icon: Globe,
    title: 'Global Deployment',
    description: 'Ability to mobilise teams across regions — Asia, Middle East, Africa, and South America — including remote and offshore locations.',
  },
  {
    icon: Cpu,
    title: 'Future-Ready',
    description: 'Integration of drones, robotics, and digital tools to support next-generation asset management.',
  },
];

export default function Approach() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      id="why-eirec"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">
              Why EIREC
            </span>
          </div>
          <h2
            className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Built for{' '}
            <span className="text-amber-400">Critical Environments</span>
          </h2>
          <p
            className={`text-lg text-white/70 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            EIREC is built around one principle: execution in critical environments. 
            Here is what sets us apart.
          </p>
        </div>

        {/* Why EIREC Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyEirecPillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-700 hover:bg-white/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                <pillar.icon className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">{pillar.title}</h3>
              <p className="text-sm text-white/60">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
