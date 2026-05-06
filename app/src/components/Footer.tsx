import { Zap, Mail, Linkedin, ArrowUp } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Who We Are', href: '#about' },
  { name: 'What We Do', href: '#services' },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Why EIREC', href: '#why-eirec' },
  { name: 'Clients', href: '#clients' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

const capabilities = [
  'Oil-Field Services',
  'Wind Energy Services',
  'Energy Infrastructure & Power',
  'Shutdowns & TAR',
  'Field Service & Technical Execution',
  'Commissioning & Start-up',
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                EI<span className="text-primary">REC</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-2">
              <strong className="text-white">Energy & Technical Services</strong>
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Delivering technical execution, field services, and project solutions 
              across the global energy sector.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:info@ei-rec.com"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Capabilities</h3>
            <ul className="space-y-3">
              {capabilities.map((cap) => (
                <li key={cap}>
                  <span className="text-slate-400 text-sm">{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-500 mb-1">General Inquiries</p>
                <a
                  href="mailto:info@ei-rec.com"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  info@ei-rec.com
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Business Development</p>
                <a
                  href="mailto:bd@ei-rec.com"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  bd@ei-rec.com
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Offices</p>
                <p className="text-slate-300 text-sm">Singapore & Dubai, UAE</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center sm:text-left">
              Copyright &copy; {new Date().getFullYear()} EIREC Energy & Technical Services. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
            >
              Back to Top
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
