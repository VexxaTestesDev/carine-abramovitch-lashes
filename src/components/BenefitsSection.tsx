import { motion } from "framer-motion";
import { Sun, Sparkles, Eye, Zap, Heart } from "lucide-react";

const benefits = [
  { icon: Sun, text: "Acorde pronta todos os dias" },
  { icon: Sparkles, text: "Dispense o uso de rímel" },
  { icon: Eye, text: "Tenha um olhar marcante sem esforço" },
  { icon: Zap, text: "Mais praticidade na sua rotina" },
  { icon: Heart, text: "Mais autoestima e confiança" },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Benefícios
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Por que alongar seus cílios?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center mb-4 gold-border">
                <b.icon className="w-5 h-5 text-gold" />
              </div>
              <p className="font-body text-sm text-foreground font-light">
                {b.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
