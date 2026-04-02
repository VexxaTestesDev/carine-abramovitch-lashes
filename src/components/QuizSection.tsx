import { motion } from "framer-motion";
import { Sparkles, Eye } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/5500000000000?text=";

const QuizSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Descubra
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
            Qual estilo de cílios combina com você?
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-12">
            Escolha o que mais te representa:
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href={`${WHATSAPP_BASE}${encodeURIComponent("Olá! Quero um estilo natural e delicado.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-sm gold-border bg-background hover:bg-gold/5 transition-all"
            >
              <Sparkles className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-display text-2xl text-foreground mb-2">Natural</h3>
              <p className="font-body text-xs text-muted-foreground">
                Delicado, leve e sofisticado
              </p>
            </a>

            <a
              href={`${WHATSAPP_BASE}${encodeURIComponent("Olá! Quero um estilo marcante e impactante.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-sm gold-border bg-background hover:bg-gold/5 transition-all"
            >
              <Eye className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-display text-2xl text-foreground mb-2">Marcante</h3>
              <p className="font-body text-xs text-muted-foreground">
                Volumoso, dramático e poderoso
              </p>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuizSection;
