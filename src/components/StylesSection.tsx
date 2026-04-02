import { motion } from "framer-motion";
import styleClassic from "@/assets/style-classic.jpg";
import styleVolume from "@/assets/style-volume.jpg";
import styleRussian from "@/assets/style-russian.jpg";

const WHATSAPP_BASE = "https://wa.me/5500000000000?text=";

const styles = [
  {
    title: "Fio a Fio",
    description: "Efeito natural e delicado",
    image: styleClassic,
    msg: "Olá! Tenho interesse no estilo Fio a Fio.",
  },
  {
    title: "Volume Brasileiro",
    description: "Equilíbrio perfeito entre natural e marcante",
    image: styleVolume,
    msg: "Olá! Tenho interesse no Volume Brasileiro.",
  },
  {
    title: "Volume Russo",
    description: "Máximo volume e impacto no olhar",
    image: styleRussian,
    msg: "Olá! Tenho interesse no Volume Russo.",
  },
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

        <div className="grid md:grid-cols-3 gap-8">
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
