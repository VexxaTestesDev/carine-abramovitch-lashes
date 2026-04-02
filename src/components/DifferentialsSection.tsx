import { motion } from "framer-motion";
import { User, BookOpen, Shield, Gem, Palette, Home } from "lucide-react";

const diffs = [
  { icon: User, title: "Atendimento personalizado" },
  { icon: BookOpen, title: "Técnica atualizada" },
  { icon: Shield, title: "Aplicação segura e confortável" },
  { icon: Gem, title: "Materiais premium" },
  { icon: Palette, title: "Resultado sob medida" },
  { icon: Home, title: "Ambiente aconchegante" },
];

const DifferentialsSection = () => {
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
            Diferenciais
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Por que escolher a Carine?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {diffs.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-4 p-6 rounded-sm gold-border bg-card"
            >
              <d.icon className="w-5 h-5 text-gold flex-shrink-0" />
              <span className="font-body text-sm text-foreground">
                {d.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
