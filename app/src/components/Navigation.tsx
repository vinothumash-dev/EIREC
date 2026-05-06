import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Who We Are', href: '#about' },
  { name: 'What We Do', href: '#services' },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Why EIREC', href: '#why-eirec' },
  { name: 'Clients', href: '#clients' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-2 group"
          >
            <span className={`text-xl font-bold tracking-tight transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              EI<span className="text-primary">REC</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                  isActive
                    ? isScrolled
                      ? 'text-primary bg-primary/10'
                      : 'text-white bg-white/20'
                    : isScrolled
                    ? 'text-foreground/70 hover:text-foreground hover:bg-muted'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              className={isScrolled ? '' : 'bg-white text-primary hover:bg-white/90'}
              onClick={() => scrollToSection('#contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-foreground hover:bg-muted'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                isActive
                  ? 'text-primary bg-primary/10'
                  : 'text-foreground/80 hover:text-foreground hover:bg-muted'
              }`}
            >
              {link.name}
            </a>
              );
            })}
          <div className="pt-4 border-t">
            <Button
              className="w-full"
              onClick={() => scrollToSection('#contact')}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
