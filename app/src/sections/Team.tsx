import { useEffect, useRef, useState } from 'react';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sandeep Narasimha',
    title: 'Founder & Director',
    bio: 'Sandeep Narasimha is the Founder and Director of EIREC, with over 15 years of experience across staffing, consulting, and energy project support. He has worked extensively across Asia, the Middle East, Africa, and select South American markets, supporting complex and fast-paced project environments. His background combines commercial leadership with hands-on involvement in project execution, working closely with operators, OEMs, and EPC contractors. He leads the business with a practical, execution-driven approach aligned to real project requirements.',
    initials: 'SN',
    color: 'from-primary to-blue-700',
  },
  {
    name: 'Sham Lakshmanan',
    title: 'Operations Director',
    bio: 'Sham Lakshmanan is the Operations Director at EIREC, responsible for overseeing project execution and operational delivery across multiple energy sectors. He manages field operations, ensuring alignment with client requirements, project timelines, and execution standards. Sham plays a key role in coordinating technical teams, managing site activities, and supporting delivery across commissioning, maintenance, and shutdown scopes. His focus is on driving operational efficiency, maintaining execution discipline, and ensuring consistent performance across projects.',
    initials: 'SL',
    color: 'from-amber-500 to-orange-600',
  },
];

export default function Team() {
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
      id="team"
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
              Meet the Team
            </span>
          </div>
          <h2
            className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Leadership Focused on{' '}
            <span className="text-primary">Execution</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`bg-slate-50 rounded-2xl p-8 transition-all duration-700 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Avatar */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-6`}>
                <span className="text-white text-xl font-bold">{member.initials}</span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm font-semibold text-primary mb-4">{member.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
