import { useEffect, useRef, useState } from 'react';

const clientTypes = [
  {
    title: 'Operators & Asset Owners',
    items: [
      'Asset maintenance and optimisation',
      'Shutdowns and turnaround execution',
      'Performance improvement initiatives',
    ],
    dotColor: 'bg-amber-500',
  },
  {
    title: 'EPC Contractors',
    items: [
      'Construction and commissioning support',
      'Project execution and coordination',
      'Interface management',
    ],
    dotColor: 'bg-blue-500',
  },
  {
    title: 'OEMs',
    items: [
      'Equipment installation and commissioning',
      'Field service and maintenance',
      'Outage and major component support',
    ],
    dotColor: 'bg-primary',
  },
  {
    title: 'Industrial & Processing Facilities',
    items: [
      'Refinery and petrochemical shutdowns',
      'Mechanical and rotating equipment works',
      'Restart and commissioning support',
    ],
    dotColor: 'bg-orange-500',
  },
  {
    title: 'Renewable Energy Developers',
    items: [
      'Wind installation and commissioning',
      'MCE and service campaigns',
      'O&M support',
    ],
    dotColor: 'bg-emerald-500',
  },
  {
    title: 'Power Generation Companies',
    items: [
      'Outage execution',
      'Turbine and generator maintenance',
      'Performance optimisation',
    ],
    dotColor: 'bg-indigo-500',
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
      className="py-12 lg:py-20 bg-slate-50"
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
            Supporting Stakeholders Across the Energy Sector
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
              className={`bg-blue-50 rounded-xl p-6 shadow-sm border border-border transition-all duration-700 hover:shadow-lg hover:border-primary/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <h3 className="font-semibold text-foreground mb-3">{client.title}</h3>
              <ul className="space-y-2">
                {client.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${client.dotColor}`} />
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
