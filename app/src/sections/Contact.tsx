import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Sandeep Narasimha — Founder & Director',
    value: 'sandeep@eirec-ets.com',
    href: 'mailto:sandeep@eirec-ets.com',
  },
  {
    icon: Mail,
    title: 'Sham Lakshmanan — Operations Director',
    value: 'sham@eirec-ets.com',
    href: 'mailto:sham@eirec-ets.com',
  }
];

const offices = [
  {
    region: 'India',
    location: 'EIREC ETS',
    address: '20/60, 1st Seaward, Tiruvanmiyur, Mylapore, Chennai, Triplicane, Tamil Nadu 600041',
    description: 'Global Headquarters',
  },
];

export default function Contact() {
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
    <section id="contact" ref={sectionRef} className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partner CTA Header */}
        <div
          className={`bg-slate-900 rounded-2xl p-8 lg:p-12 mb-16 relative overflow-hidden transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Get in Touch with EIREC</h2>
            <p className="text-white/70 text-lg">
              For project discussions, field service opportunities, or partnership enquiries, 
              please reach out to the relevant contact below.
            </p>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Offices */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Our Offices</h3>
              <div className="space-y-6">
                {offices.map((office) => (
                  <div key={office.region} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{office.region}</p>
                      <p className="text-sm text-muted-foreground">{office.location}</p>
                      <p className="text-sm text-muted-foreground mt-1">{office.address}</p>
                      <p className="text-xs text-muted-foreground mt-1">{office.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
