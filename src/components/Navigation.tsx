import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-card/95 backdrop-blur-lg shadow-[var(--shadow-card)] py-3 md:py-4'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-[var(--transition-smooth)]"
          >
            godtisse.dk
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            aria-label={isMobileMenuOpen ? 'Luk menu' : 'Åbn menu'}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" onClick={() => scrollToSection('understanding')}>
              Årsag
            </Button>
            <Button variant="default" onClick={() => scrollToSection('solution')}>
              Behandling
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('circle')}>
              Den Onde Cirkel
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('prevention-routines')}>
              Gode Vaner
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('faq')}>
              FAQ
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('references')}>
              Referencer
            </Button>
          </div>
        </div>

        {/* Mobile navigation menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2 pb-4">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection('understanding')}
            >
              Årsag
            </Button>
            <Button
              variant="default"
              className="w-full justify-start"
              onClick={() => scrollToSection('solution')}
            >
              Behandling
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection('circle')}
            >
              Den Onde Cirkel
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection('prevention-routines')}
            >
              Gode Vaner
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection('faq')}
            >
              FAQ
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection('references')}
            >
              Referencer
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
