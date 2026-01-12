import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-health.jpg';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000 pb-2">
            Slut med tilbagevendende blærebetændelser
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 px-2">
            Kvinders guide til at undgå tilbagevendende blærebetændelser - viden, forebyggelse og
            balance i vaginalflora
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection('solution')}
              className="text-lg"
            >
              Se behandlingen
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('understanding')}
              className="text-lg"
            >
              Lær mere
            </Button>
          </div>

          <div className="pt-12 animate-in fade-in duration-1000 delay-500">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection('understanding')}
              className="rounded-full hover:bg-primary/10"
            >
              <ArrowDown className="h-6 w-6 animate-bounce text-primary" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
