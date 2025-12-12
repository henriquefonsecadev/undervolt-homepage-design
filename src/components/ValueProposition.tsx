import { Shield, Zap, Clock } from 'lucide-react';

const ValueProposition = () => {
  const values = [
    {
      icon: Shield,
      title: 'MANUTENÇÃO PREVENTIVA E CORRETIVA',
      description: 'Antecipamos problemas antes que afetem sua operação',
    },
    {
      icon: Zap,
      title: 'OTIMIZAÇÃO INTELIGENTE',
      description: 'Hardware e rede sempre no máximo desempenho',
    },
    {
      icon: Clock,
      title: 'GARANTIA DE UPTIME',
      description: 'Funcionamento contínuo com monitoramento 24/7',
    },
  ];

  return (
    <section className="relative py-8 bg-primary/10 border-y border-primary/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 md:p-6 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold tracking-wide mb-1">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
