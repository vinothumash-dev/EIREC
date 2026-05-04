import { useEffect, useRef, useState } from 'react';
import { Droplets, Wind, Zap, Wrench, Check } from 'lucide-react';

const capabilities = [
  {
    id: 'oilfield',
    icon: Droplets,
    title: 'Oil-Field Services',
    subtitle: 'Upstream Operations & Production Systems',
    description: 'We provide specialised technical services supporting drilling, intervention, and production operations across upstream oil & gas environments.',
    scope: [
      'Managed Pressure Drilling (MPD)',
      'Drilling & Completion Support',
      'Production Systems & Optimisation',
      'Coiled Tubing & Well Intervention',
      'Hydraulic Workover Operations',
      'Well Testing & Flowback',
      'Drilling Services',
    ],
    focus: [
      'Execution in remote and high-risk environments',
      'Alignment with operator and OEM standards',
      'Reliable performance under complex field conditions',
    ],
    images: [
      `${import.meta.env.BASE_URL}images/capability-1.png`,
      `${import.meta.env.BASE_URL}images/capability-2.png`,
      `${import.meta.env.BASE_URL}images/capability-3.png`,
    ],
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'wind',
    icon: Wind,
    title: 'Wind Energy Services',
    subtitle: 'Onshore & Offshore Wind Projects',
    description: 'Technical support and execution services across wind energy projects, working alongside OEMs, EPC contractors, and developers to deliver reliable project outcomes across the full asset lifecycle.',
    scope: [
      'Support for Turbine Installation & Mechanical Completion',
      'Commissioning & Energisation Support (including grid integration)',
      'Major Component Exchange (MCE) Support — blades, gearboxes, generators, transformers',
      'Operations & Maintenance Support (scheduled and corrective)',
      'Service Campaigns and Upgrade Support',
      'Pre-assembly, logistics coordination, and site execution support',
      'Provision of experienced resources for method statements, work procedures, and technical documentation',
    ],
    inspection: [
      'Pre-installation & Pre-commissioning Inspections',
      'Internal Component Inspections (gearbox, generator)',
      'Blade Inspection Support (visual and drone-assisted)',
      'Mechanical & Electrical Inspection Support',
      'Condition Monitoring & Performance Assessment Support',
      'Pre- and Post-MCE Inspection Support',
      'SIT/FAT Support',
    ],
    focus: [
      'Supporting installation, commissioning, and maintenance within defined project scopes',
      'Coordinating across multi-contractor and multi-OEM environments',
      'Ensuring adherence to safety, quality, and project timelines',
      'Supporting project teams with technical documentation and method statements',
    ],
    images: [
      `${import.meta.env.BASE_URL}images/capability-4.png`,
      `${import.meta.env.BASE_URL}images/capability-5.png`,
      `${import.meta.env.BASE_URL}images/capability-6.png`,
    ],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'power',
    icon: Zap,
    title: 'Energy Infrastructure & Power Systems',
    subtitle: 'Turbomachinery & Power Generation',
    description: 'Technical support and execution services across turbomachinery and power systems, working alongside OEMs, EPC contractors, and specialist service providers to deliver reliable project outcomes.',
    scope: [
      'Gas & Steam Turbine Inspections, Overhauls & Repairs',
      'Generator Maintenance, Testing & Refurbishment Support',
      'Pump Inspection, Maintenance & Overhaul Support (Centrifugal, API, Booster & Process Pumps)',
      'Outage Support (GT/ST/GEN) in collaboration with OEMs and contractors',
      'Vibration Monitoring & Diagnostic Support',
      'Valve Repair & PSV Testing Coordination (In-Situ)',
      'Hot Gas Path & Combustion Hardware Support',
      'Provision of experienced resources for method statements, work procedures, and technical documentation',
    ],
    inspection: [
      'Borescope / Endoscopic Inspections (turbines, compressors, pumps)',
      'Visual & Dimensional Inspections',
      'Non-Destructive Testing — UT, MPI, DPT, Radiographic Testing (RT)',
      'Vibration Analysis & Condition Monitoring',
      'Thermography & Performance Monitoring',
      'Pre-Outage, In-Process, and Post-Maintenance Inspections',
    ],
    focus: [
      'Supporting outage and maintenance activities within defined project scopes',
      'Coordinating with multiple stakeholders across complex project environments',
      'Ensuring adherence to safety, quality, and operational standards',
      'Enabling efficient execution through integrated technical support',
    ],
    images: [
      `${import.meta.env.BASE_URL}images/capability-7.png`,
      `${import.meta.env.BASE_URL}images/capability-8.png`,
      `${import.meta.env.BASE_URL}images/capability-9.jpg`,
    ],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'tar',
    icon: Wrench,
    title: 'Shutdowns & Turnarounds (TAR)',
    subtitle: 'Critical Maintenance Execution',
    description: 'Shutdowns and turnarounds are among the most critical phases in industrial operations. EIREC provides structured execution support to ensure safe, efficient, and on-schedule delivery.',
    scope: [
      'Pre-shutdown planning and coordination',
      'Mechanical and rotating equipment overhaul',
      'Piping, valves, and static equipment works',
      'Inspection, repair, and reinstatement',
      'Commissioning and restart support',
    ],
    coverage: [
      'Refinery Units (CDU/VDU, hydroprocessing, etc.)',
      'Petrochemical Plants',
      'Gas Processing Facilities',
      'Power Generation Assets',
    ],
    focus: [
      'Delivery within tight shutdown timelines',
      'Multi-contractor coordination',
      'Strict HSE and permit-to-work compliance',
      'Minimising downtime and ensuring safe restart',
    ],
    images: [
      `${import.meta.env.BASE_URL}images/capability-10.png`,
      `${import.meta.env.BASE_URL}images/capability-11.png`,
      `${import.meta.env.BASE_URL}images/capability-12.png`,
    ],
    color: 'from-red-500 to-rose-600',
  },
];

export default function Capabilities() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('oilfield');

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

  // Preload all capability images to avoid lag on tab switch
  useEffect(() => {
    if (!isVisible) return;
    capabilities.forEach((cap) => {
      cap.images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    });
  }, [isVisible]);
  const activeCapability = capabilities.find((c) => c.id === activeTab);

  return (
    <section id="capabilities" ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Our Capabilities
            </span>
          </div>
          <h2
            className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Specialized Across <span className="text-primary">Energy Sectors</span>
          </h2>
        </div>

        {/* Tab Navigation */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {capabilities.map((cap) => (
            <button
              key={cap.id}
              onClick={() => setActiveTab(cap.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
                activeTab === cap.id
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-foreground/70 hover:bg-slate-200'
              }`}
            >
              <cap.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{cap.title}</span>
            </button>
          ))}
        </div>

        {/* Active Capability Content */}
        {activeCapability && (
          <div className="animate-fade-in">
            {/* Images Grid - 3 Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {activeCapability.images.map((img, index) => (
                <div key={index} className="relative rounded-xl overflow-hidden aspect-[16/10]">
                  <img
                    src={img}
                    alt={`${activeCapability.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${activeCapability.color} opacity-10`}
                  />
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Main Description */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  {activeCapability.title}
                </h3>
                <p
                  className={`text-lg bg-gradient-to-r ${activeCapability.color} bg-clip-text text-transparent font-semibold mb-4`}
                >
                  {activeCapability.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {activeCapability.description}
                </p>

                {/* Scope */}
                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeCapability.color}`} />
                    Scope Includes:
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {activeCapability.scope.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inspection Support (if exists) */}
                {activeCapability.inspection && (
                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeCapability.color}`} />
                      Inspection Support:
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {activeCapability.inspection.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Coverage (if exists) */}
                {activeCapability.coverage && (
                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeCapability.color}`} />
                      Coverage:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeCapability.coverage.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-100 rounded-full text-sm text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Delivery Focus */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-4">Delivery Focus</h4>
                <div className="space-y-4">
                  {activeCapability.focus.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className={`w-6 h-6 rounded-full bg-gradient-to-r ${activeCapability.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
