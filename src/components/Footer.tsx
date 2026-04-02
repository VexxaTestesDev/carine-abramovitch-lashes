import { Instagram, MapPin, Clock } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá!";

const Footer = () => {
  return (
    <footer className="py-16 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl text-primary-foreground mb-4">
              Carine Abramovitch
            </h3>
            <p className="font-body text-xs text-primary-foreground/50 leading-relaxed">
              Lash Designer especializada em transformar olhares com técnicas
              premium e atendimento exclusivo.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">
              Atendimento
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-primary-foreground/60">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="font-body text-xs">Localização a confirmar</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/60">
                <Clock className="w-4 h-4 text-gold" />
                <span className="font-body text-xs">Seg a Sáb · Horário marcado</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">
              Redes sociais
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold transition-colors"
              >
                <Instagram className="w-4 h-4 text-primary-foreground/60" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Carine Abramovitch · Lash Designer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
