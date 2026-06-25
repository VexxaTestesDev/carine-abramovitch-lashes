import { motion } from "framer-motion";
import styleClassic from "@/assets/style-classic.jpg";
import styleVolume from "@/assets/style-volume.jpg";
import styleRussian from "@/assets/style-russian.jpg";

const WHATSAPP_BASE = "https://wa.me/5500000000000?text=";

const styles = [
  {
    title: "Volume Brasileiro",
    description: "Olhar mais denso, preto e marcante.",
    image: styleClassic,
    msg: "Olá! Tenho interesse no Volume Brasileiro."
  },
  {
    title: "Efeito Molhado",
    description: "Visual definido com efeito de máscara de cílios.",
    image: styleClassic,
    msg: "Olá! Tenho interesse no Efeito Molhado."
  },
  {
    title: "Brasileiro Marrom",
    description: "Visual natural, sofisticado e leve.",
    image: styleClassic,
    msg: "Olá! Tenho interesse no Brasileiro Marrom."
  },
  {
    title: "Fox Eyes",
    description: "Efeito delineado e olhar sensual.",
    image: styleClassic,
    msg: "Olá! Tenho interesse no Fox Eyes."
  },
  {
    title: "Efeito Sirena",
    description: "Olhar alongado e elegante.",
    image: styleVolume,
    msg: "Olá! Tenho interesse no Efeito Sirena."
  },
  {
    title: "Efeito Raposa",
    description: "Olhar felino e extremamente marcante.",
    image: styleVolume,
    msg: "Olá! Tenho interesse no Efeito Raposa."
  },
  {
    title: "Volume V8",
    description: "Volume intenso e glamouroso.",
    image: styleVolume,
    msg: "Olá! Tenho interesse no Volume V8."
  },
  {
    title: "Volume Egípcio",
    description: "Volume sofisticado com leveza.",
    image: styleVolume,
    msg: "Olá! Tenho interesse no Volume Egípcio."
  },
  {
    title: "Mega Volume",
    description: "Máximo impacto e densidade.",
    image: styleRussian,
    msg: "Olá! Tenho interesse no Mega Volume."
  },
  {
    title: "Clean Girl",
    description: "Naturalidade e elegância.",
    image: styleRussian,
    msg: "Olá! Tenho interesse no Efeito Clean Girl."
  },
  {
    title: "Efeito Hipnose",
    description: "Olhar dramático e poderoso.",
    image: styleRussian,
    msg: "Olá! Tenho interesse no Efeito Hipnose."
  },
  {
    title: "Mega Brasileiro",
    description: "Volume avançado com alta retenção.",
    image: styleRussian,
    msg: "Olá! Tenho interesse no Mega Brasileiro."
  }
];

const StylesSection = () => {
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
            Técnicas
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Escolha seu estilo
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {styles.map((style, i) => (
            <motion.div
              key={style.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6">
                <img
                  src={style.image}
                  alt={style.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">
                {style.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-4">
                {style.description}
              </p>
              <a
                href={`${WHATSAPP_BASE}${encodeURIComponent(style.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-body text-xs tracking-wider uppercase text-gold hover:text-foreground transition-colors"
              >
                Quero esse estilo →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StylesSection;
