import { motion } from "framer-motion";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import styleClassic from "@/assets/style-classic.jpg";
import styleVolume from "@/assets/style-volume.jpg";

const images = [
  { src: beforeAfter1, label: "Antes & Depois" },
  { src: styleVolume, label: "Volume Brasileiro" },
  { src: gallery1, label: "Close Perfeito" },
  { src: beforeAfter2, label: "Antes & Depois" },
  { src: gallery2, label: "Fio a Fio" },
  { src: styleClassic, label: "Natural" },
];

const ResultsGallery = () => {
  return (
    <section id="resultados" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Portfólio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Resultados que transformam o olhar
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-sm"
            >
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 flex items-end">
                <span className="font-body text-xs tracking-wider uppercase text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsGallery;
