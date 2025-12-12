import { Server, Wrench, Activity } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Server,
      title: 'Estabilidade de Infraestrutura',
      description: 'Suporte completo para Hardware, Redes e Sistemas. Mantemos sua infraestrutura funcionando com máxima eficiência e segurança.',
      features: ['Diagnóstico Avançado', 'Configuração de Rede', 'Gestão de Servidores'],
    },
    {
      icon: Wrench,
      title: 'Manutenção de Longevidade',
      description: 'Redução de custos e aumento da vida útil dos equipamentos através de manutenção especializada e otimização contínua.',
      features: ['Manutenção Preventiva', 'Upgrade de Hardware', 'Limpeza Técnica'],
    },
    {
      icon: Activity,
      title: 'Monitoramento Proativo',
      description: 'Resposta rápida e suporte 24/7. Identificamos e resolvemos problemas antes que impactem seu negócio.',
      features: ['Alertas em Tempo Real', 'Resposta Imediata', 'Relatórios Detalhados'],
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Soluções Completas em <span className="text-gradient">TI Corporativa</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos serviços especializados para garantir a estabilidade e performance da sua infraestrutura de TI.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl border border-border p-8 card-hover"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
