import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Meu olhar ficou incrível, parece maquiagem pronta todos os dias.",
    name: "Mariana S.",
  },
  {
    text: "Atendimento impecável e resultado perfeito.",
    name: "Juliana R.",
  },
  {
    text: "Não vivo mais sem. A Carine é maravilhosa!",
    name: "Fernanda L.",
  },
];

const Stars = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Depoimentos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            O que dizem as clientes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-8 rounded-sm bg-background gold-border"
            >
              <Stars />
              <p className="font-display text-lg italic text-foreground mb-6 leading-relaxed">
                "{t.text}"
              </p>
              <p className="font-body text-xs tracking-wider uppercase text-muted-foreground">
                {t.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
