import { motion } from "framer-motion";
import heroImage from "@/assets/hero-eyes.jpg";
import { Calendar, Clock } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Gostaria de agendar um horário.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cílios perfeitos com alongamento profissional"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-0">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-6"
          >
            Carine Abramovitch · Lash Designer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl font-light text-primary-foreground leading-tight mb-6"
          >
            Seu olhar mais marcante, elegante e inesquecível{" "}
            <span className="text-gold">✨</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-lg text-primary-foreground/80 font-light mb-10 max-w-lg"
          >
            Alongamento de cílios com acabamento impecável para valorizar sua
            beleza natural.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-gold-foreground font-body text-sm tracking-wider uppercase rounded-sm hover:brightness-110 transition-all shimmer"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href="#resultados"
              className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-body text-sm tracking-wider uppercase rounded-sm hover:bg-primary-foreground/10 transition-all"
            >
              Ver resultados
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            <div className="flex items-center gap-2 text-primary-foreground/60">
              <Calendar className="w-4 h-4 text-gold" />
              <span className="font-body text-xs tracking-wider uppercase">
                Atendimento com hora marcada
              </span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/60">
              <Clock className="w-4 h-4 text-gold" />
              <span className="font-body text-xs tracking-wider uppercase">
                Vagas limitadas por semana
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
