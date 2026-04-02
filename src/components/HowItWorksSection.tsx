import { motion } from "framer-motion";

const steps = [
  { num: "01", text: "Clique no botão" },
  { num: "02", text: "Fale no WhatsApp" },
  { num: "03", text: "Escolha seu estilo" },
  { num: "04", text: "Agende seu horário" },
];

const HowItWorksSection = () => {
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
            Simples
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Como funciona
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center"
            >
              <span className="font-display text-5xl text-gold/30 block mb-2">
                {s.num}
              </span>
              <p className="font-body text-sm text-foreground">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
