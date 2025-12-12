import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            PRONTO PARA ELEVAR A <span className="text-gradient">EFICIÊNCIA</span> DO SEU NEGÓCIO?
          </h2>
          <p className="text-muted-foreground text-lg">
            Entre em contato conosco e descubra como podemos transformar sua infraestrutura de TI.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl border border-border p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nome" className="text-sm font-medium text-foreground">
                    Nome
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    required
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="telefone" className="text-sm font-medium text-foreground">
                  Telefone
                </label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(11) 99999-9999"
                  className="bg-muted border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="mensagem" className="text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar sua empresa?"
                  rows={5}
                  required
                  className="bg-muted border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>ENVIANDO...</>
                ) : (
                  <>
                    ENVIAR MENSAGEM
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Quick Contact */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Ou entre em contato diretamente:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+5511968483359"
                className="inline-flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
                +55 (11) 96848-3359
              </a>
              <a
                href="mailto:henrique.fonseca2021@gmail.com"
                className="inline-flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
                henrique.fonseca2021@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
