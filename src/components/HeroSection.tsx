import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-datacenter.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Datacenter UNDERVOLT"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center md:text-left pt-20">
        <div className="max-w-4xl mx-auto md:mx-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm text-muted-foreground font-medium">Suporte Corporativo 24/7</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            ESTABILIDADE{' '}
            <span className="text-gradient glow-text">MÁXIMA.</span>
            <br />
            PERFORMANCE{' '}
            <span className="text-gradient glow-text">INTELIGENTE.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Otimização de TI e Suporte Corporativo 24/7. Garantimos a estabilidade 
            da sua infraestrutura para que você foque no que realmente importa.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" className="group">
              SOLICITAR SUPORTE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              CONHECER SERVIÇOS
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 md:gap-12 justify-center md:justify-start mt-16 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold font-display text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground mt-1">Uptime Garantido</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold font-display text-primary">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Suporte Disponível</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold font-display text-primary">+500</div>
              <div className="text-sm text-muted-foreground mt-1">Clientes Atendidos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
