import { Code, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DevelopmentSection = () => {
  return (
    <section id="suporte" className="section-padding bg-background">
      <div className="container-custom">
        <div className="relative bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl border border-border overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'linear-gradient(45deg, hsl(var(--primary)) 25%, transparent 25%), linear-gradient(-45deg, hsl(var(--primary)) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, hsl(var(--primary)) 75%), linear-gradient(-45deg, transparent 75%, hsl(var(--primary)) 75%)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
              }}
            />
          </div>

          <div className="relative px-6 py-12 md:px-12 md:py-16 lg:py-20">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-primary/20 flex items-center justify-center glow-effect">
                  <Code className="w-12 h-12 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                  Desenvolvimento
                </span>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  OTIMIZAÇÃO VIA <span className="text-gradient">CÓDIGO</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mb-6">
                  Desenvolvimento de soluções de software customizadas, sites e automações 
                  (Java) para complementar a performance do seu ambiente de trabalho. 
                  Transformamos necessidades em aplicações eficientes.
                </p>
                <Button variant="hero" className="group">
                  SAIBA MAIS
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentSection;
