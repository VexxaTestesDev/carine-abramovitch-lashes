import { motion } from "framer-motion";
import carineProfile from "@/assets/carine-profile.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden">
              <img
                src={carineProfile}
                alt="Carine Abramovitch - Lash Designer"
                loading="lazy"
                width={800}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/30 rounded-sm" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Sobre
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8 leading-tight">
              Mais do que cílios, uma experiência de autoestima
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              Meu objetivo é realçar sua beleza natural com técnicas modernas e um
              atendimento totalmente personalizado. Cada detalhe é pensado para
              entregar um resultado elegante, confortável e que combine
              perfeitamente com você.
            </p>
            <p className="font-display text-2xl italic text-foreground/80">
              — Carine Abramovitch
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
