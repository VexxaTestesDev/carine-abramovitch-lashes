import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Gostaria de agendar um horário.";

const FinalCTASection = () => {
  return (
    <section className="relative py-32 bg-gradient-dark overflow-hidden">
      {/* Subtle gold accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-gold/40" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl font-light text-primary-foreground mb-6 leading-tight">
            Pronta para transformar seu olhar?
          </h2>
          <p className="font-body text-sm text-primary-foreground/60 mb-10 max-w-md mx-auto">
            Agende seu horário e descubra o poder de cílios perfeitos todos os
            dias.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-gold text-gold-foreground font-body text-sm tracking-wider uppercase rounded-sm hover:brightness-110 transition-all shimmer"
            >
              Agendar agora
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 border border-primary-foreground/20 text-primary-foreground font-body text-sm tracking-wider uppercase rounded-sm hover:bg-primary-foreground/10 transition-all"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/40">
            <span className="font-body text-xs tracking-wider">
              ⏰ Agenda quase completa
            </span>
            <span className="font-body text-xs tracking-wider">
              ✨ Vagas limitadas por semana
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
