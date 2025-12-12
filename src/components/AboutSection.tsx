import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    'Equipe técnica altamente qualificada',
    'Atendimento personalizado para cada cliente',
    'Soluções adaptadas ao seu orçamento',
    'Compromisso com resultados mensuráveis',
  ];

  return (
    <section id="sobre" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              Sobre Nós
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Parceiros na Evolução da Sua <span className="text-gradient">Infraestrutura de TI</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                <strong className="text-foreground">Undervoltz</strong> é a sua parceira em otimização de TI e suporte corporativo. 
                Somos especialistas em garantir a estabilidade máxima da sua infraestrutura, 
                permitindo que sua empresa opere com eficiência total e sem interrupções.
              </p>
              <p>
                Nossa missão é transformar desafios tecnológicos em vantagens competitivas, 
                oferecendo soluções personalizadas que reduzem custos e aumentam a produtividade 
                do seu ambiente de trabalho.
              </p>
            </div>

            {/* Highlights */}
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card p-8 md:p-12">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }}
              />
              
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                  <span className="font-display text-2xl font-bold text-primary">UV</span>
                </div>
                <blockquote className="text-xl md:text-2xl font-display font-medium mb-4 text-foreground">
                  "Performance inteligente começa com uma infraestrutura estável."
                </blockquote>
                <cite className="text-muted-foreground text-sm">— Filosofia UNDERVOLTZ</cite>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-primary rounded-xl p-4 shadow-lg shadow-primary/30 hidden md:block">
              <div className="text-2xl font-bold font-display text-primary-foreground">10+</div>
              <div className="text-xs text-primary-foreground/80">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
