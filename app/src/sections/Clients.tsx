import { useEffect, useRef, useState } from 'react';
import { Building2, HardHat, Settings, Factory, Wind, Zap } from 'lucide-react';

const clientTypes = [
  {
    icon: Building2,
    title: 'Operators & Asset Owners',
    items: [
      'Asset maintenance and optimisation',
      'Shutdowns and turnaround execution',
      'Performance improvement initiatives',
    ],
    color: 'bg-amber-500/10',
    iconColor: 'text-amber-500',
  },
  {
    icon: HardHat,
    title: 'EPC Contractors',
    items: [
      'Construction and commissioning support',
      'Project execution and coordination',
      'Interface management',
    ],
    color: 'bg-blue-500/10',
    iconColor: 'text-blue-500',
  },
  {
    icon: Settings,
    title: 'OEMs',
    items: [
      'Equipment installation and commissioning',
      'Field service and maintenance',
      'Outage and major component support',
    ],
    color: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    icon: Factory,
    title: 'Industrial & Processing Facilities',
    items: [
      'Refinery and petrochemical shutdowns',
      'Mechanical and rotating equipment works',
      'Restart and commissioning support',
    ],
    color: 'bg-orange-500/10',
    iconColor: 'text-orange-500',
  },
  {
    icon: Wind,
    title: 'Renewable Energy Developers',
    items: [
      'Wind installation and commissioning',
      'MCE and service campaigns',
      'O&M support',
    ],
    color: 'bg-emerald-500/10',
    iconColor: 'text-emerald-500',
  },
  {
    icon: Zap,
    title: 'Power Generation Companies',
    items: [
      'Outage execution',
      'Turbine and generator maintenance',
      'Performance optimisation',
    ],
    color: 'bg-indigo-500/10',
    iconColor: 'text-indigo-500',
  },
];

export default function Clients() {
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
      id="clients"
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
              Our Clients & Industries
            </span>
          </div>
          <h2
            className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Supporting Stakeholders Across{' '}
            <span className="text-primary">the Energy Sector</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            We support a broad range of stakeholders across the energy sector, 
            delivering tailored execution services that meet the demands of each environment.
          </p>
        </div>

        {/* Client Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientTypes.map((client, index) => (
            <div
              key={client.title}
              className={`bg-white rounded-xl p-6 shadow-sm border border-border transition-all duration-700 hover:shadow-lg hover:border-primary/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className={`w-12 h-12 ${client.color} rounded-xl flex items-center justify-center mb-4`}>
                <client.icon className={`w-6 h-6 ${client.iconColor}`} />
              </div>
              <h3 className="font-semibold text-foreground mb-3">{client.title}</h3>
              <ul className="space-y-2">
                {client.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${client.iconColor.replace('text-', 'bg-')}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
