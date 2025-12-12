import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-4">
              <span className="font-display text-2xl font-bold tracking-tight">
                UNDER<span className="text-primary">VOLTZ</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-md mb-6">
              Especialistas em otimização de TI e suporte corporativo. 
              Garantimos estabilidade máxima para sua infraestrutura.
            </p>
            <p className="text-sm text-muted-foreground">
              Estabilidade Máxima. Performance Inteligente.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Links Rápidos</h4>
            <ul className="space-y-3">
              {['Home', 'Serviços', 'Sobre', 'Contato'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+5511968483359"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +55 (11) 96848-3359
                </a>
              </li>
              <li>
                <a
                  href="mailto:henrique.fonseca2021@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  henrique.fonseca2021@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                São Paulo, SP - Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} UNDERVOLTZ. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
