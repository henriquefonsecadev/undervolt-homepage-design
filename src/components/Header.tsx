import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'SERVIÇOS', href: '#servicos' },
    { label: 'SUPORTE', href: '#suporte' },
    { label: 'SOBRE', href: '#sobre' },
    { label: 'CONTATO', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="relative">
            <span className="font-display text-xl md:text-2xl font-bold tracking-tight">
              UNDER<span className="text-primary">VOLTZ</span>
            </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+5511968483359" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              <span>(11) 96848-3359</span>
            </a>
            <Button variant="navCta" size="sm">
              SOLICITAR SUPORTE
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border py-4 animate-fade-in">
            <nav className="flex flex-col gap-2 px-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border/50"
                >
                  {item.label}
                </a>
              ))}
              <a href="tel:+5511968483359" className="flex items-center gap-2 py-3 text-sm text-primary">
                <Phone className="w-4 h-4" />
                <span>(11) 96848-3359</span>
              </a>
              <Button variant="hero" className="mt-2">
                SOLICITAR SUPORTE
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
