import { useEffect, useRef, useState } from 'react';
import { Target, Shield, Globe, Wrench } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Take Ownership',
    description: 'We take full accountability for every scope we commit to.',
  },
  {
    icon: Shield,
    title: 'Execute Safely',
    description: 'Safety is embedded in every aspect of our operations.',
  },
  {
    icon: Wrench,
    title: 'Deliver Reliably',
    description: 'Consistent, quality delivery that meets schedule and standards.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Supporting projects across oil & gas, wind, and industrial energy.',
  },
];

export default function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Who We Are
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-6">
              Global Provider of Energy Technical Services
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              EIREC Energy & Technical Services is a global provider of{' '}
              <strong>technical execution, field services, and project delivery solutions</strong> across 
              the energy sector.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              We support operators, OEMs, EPCs and ISPs in delivering and maintaining{' '}
              <strong>critical energy infrastructure</strong>, ensuring assets operate safely, 
              efficiently, and reliably across their lifecycle.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              From complex installations to high-pressure shutdowns to drilling in HPHT environments, 
              our teams operate in <strong>demanding environments where precision, coordination, 
              and execution discipline are essential</strong>.
            </p>

            {/* Mission Statement */}
            <div className="bg-slate-900 rounded-xl p-6 mb-8">
              <p className="text-white text-lg font-semibold text-center">
                Built around one principle: Execution in critical environments.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`bg-slate-50 rounded-xl p-6 transition-all duration-700 hover:shadow-lg ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
