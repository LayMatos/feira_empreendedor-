import { motion } from "framer-motion";
import imageamanda from "../assets/images.png";
import OndaAnimada from "./OndaAnimada";

const speakers = [
  {
    nome: "Amanda Graciano",
    cargo: "Diretora Executiva (TITAN4)",
    imagem: imageamanda,
  },
  {
    nome: "Fernando Seabra",
    cargo: "Cargo (EMPRESA)",
    imagem: imageamanda,
  },
  {
    nome: "Morganna Tito",
    cargo: "Cargo (EMPRESA)",
    imagem: imageamanda,
  },
  {
    nome: "Diogo Cortiz",
    cargo: "Cargo (EMPRESA)",
    imagem: imageamanda,
  },
  {
    nome: "Cláudio Azevedo",
    cargo: "Cargo (EMPRESA)",
    imagem: imageamanda,
  },
  {
    nome: "Rodrigo Cartacho",
    cargo: "Cargo (EMPRESA)",
    imagem: imageamanda,
  },
];

interface SpeakerCardProps {
  nome: string;
  cargo: string;
  imagem: string;
  index: number;
}

const SpeakerCard = ({ nome, cargo, imagem, index }: SpeakerCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    whileHover={{ y: -6, transition: { duration: 0.25 } }}
    className="group relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden border-[3px] border-[#F7C3D3]/80 shadow-lg hover:shadow-2xl hover:border-white transition-all duration-300"
  >
    <img
      src={imagem}
      alt={nome}
      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#EF3970]/90 backdrop-blur-sm text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Palestrante
    </div>

    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-left">
      <h3 className="text-base sm:text-lg font-bold text-white leading-tight">{nome}</h3>
      <p className="mt-1 text-xs sm:text-sm text-white/85 leading-snug line-clamp-2">{cargo}</p>
    </div>
  </motion.article>
);

const Galeria = () => {
  return (
    <section id="palestrantes" className="relative bg-[#EF3970] overflow-x-hidden font-nexa -mt-px">
      <OndaAnimada tipo="entrada" fill="#EF3970" corAcima="#FF8F5A" />
      <div className="pointer-events-none absolute top-32 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-32 -right-16 w-72 h-72 bg-[#FF8F5A]/15 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-14 sm:pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <span className="inline-block mb-3 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white/90 bg-white/15 rounded-full">
            Palestrantes
          </span>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-tight">
            Palestrantes 2025
          </h2>
          <p className="mt-4 text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Confira os primeiros nomes confirmados! Empreendedores, especialistas e líderes
            de mercado que vão te mostrar, na prática, como inovar, crescer e transformar o
            seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={speaker.nome}
              nome={speaker.nome}
              cargo={speaker.cargo}
              imagem={speaker.imagem}
              index={index}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 sm:mt-12 text-white/70 text-sm sm:text-base"
        >
          Novos nomes serão confirmados em breve.
        </motion.p>
      </div>

      <OndaAnimada tipo="inferior" fill="#FF8F5A" corAcima="#EF3970" />
    </section>
  );
};

export default Galeria;
