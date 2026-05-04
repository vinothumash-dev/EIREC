import { useEffect, useRef, useState } from 'react';
import { 
  ClipboardList, 
  HardHat, 
  Settings, 
  Timer, 
  TrendingUp, 
  Search,
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: ClipboardList,
    title: 'Project & Construction Management',
    description: 'End-to-end project delivery with full accountability for schedule, budget, and quality.',
  },
  {
    icon: HardHat,
    title: 'Field Service & Technical Execution',
    description: 'Hands-on technical teams delivering defined scopes with precision and expertise.',
  },
  {
    icon: Settings,
    title: 'Commissioning & Start-up',
    description: 'Systematic commissioning processes ensuring safe and efficient facility start-up.',
  },
  {
    icon: Timer,
    title: 'Shutdowns & Turnarounds (TAR)',
    description: 'Critical maintenance execution within tight shutdown windows.',
  },
  {
    icon: TrendingUp,
    title: 'Asset Management & Performance',
    description: 'Optimizing asset performance and extending operational life.',
  },
  {
    icon: Search,
    title: 'Inspection & Surveying',
    description: 'Advanced inspection solutions including drone-enabled surveying.',
  },
  {
    icon: GraduationCap,
    title: "Technical Advisory & Owner's Engineer",
    description: 'Expert guidance and independent engineering support for complex projects.',
  },
];

export default function Services() {
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
      id="services"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-slate-50"
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
              What We Do
            </span>
          </div>
          <h2
            className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            End-to-End{' '}
            <span className="text-primary">Technical Delivery</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            We provide comprehensive technical delivery across complex energy and industrial 
            projects, operating as a hands-on execution partner with full accountability for 
            safety, quality, and schedule.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white rounded-xl p-6 shadow-sm border border-border transition-all duration-700 hover:shadow-lg hover:border-primary/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button
            size="lg"
            onClick={() => {
              const element = document.querySelector('#capabilities');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Our Capabilities
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
