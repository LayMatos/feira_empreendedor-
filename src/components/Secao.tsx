import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import OndaAnimada from "./OndaAnimada";

const HeroCurvado = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const sectionRef = useRef(null);
  const [animarRetangulos, setAnimarRetangulos] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimarRetangulos(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#EF3970] overflow-hidden -mt-px"
    >
      {/* Brilhos decorativos — contidos na seção */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: animarRetangulos ? 40 : -20 }}
          transition={{ duration: 1 }}
          className="absolute top-32 left-0 w-40 h-80 sm:w-60 sm:h-96 bg-[#F6307E] rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: animarRetangulos ? -40 : 20 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-0 right-0 w-52 h-36 sm:w-72 sm:h-52 bg-[#F6307E] rounded-full opacity-25 blur-3xl"
        />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-24 grid md:grid-cols-2 gap-8 sm:gap-12 items-center text-white">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug font-nexa">
            Por um Ceará mais <br />
            empreendedor, inovador <br />
            e competitivo
          </h2>
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl font-light font-nexa">
            Mais do que um evento, a FEIRA DO EMPREENDEDOR + SIARÁ TECH SUMMIT é o
            encontro que conecta ideias, pessoas e soluções que transformam o
            presente e constroem o futuro.
          </p>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-light font-nexa">
            Seja você empreendedor, empresário, investidor, desenvolvedor ou
            visionário, aqui é o seu lugar.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-300 hover:bg-yellow-600 hover:text-white text-black font-bold rounded-full shadow-md transition duration-300">
            ASSISTIR
          </button>
        </motion.div>

        {/* Vídeo com thumbnail */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="cursor-pointer rounded-[32px] sm:rounded-[48px] border border-white p-2 relative overflow-hidden w-full max-w-full aspect-video"
          onClick={() => setModalAberto(true)}
        >
          <img
            src="https://img.youtube.com/vi/HgDtZpOwMPA/maxresdefault.jpg"
            alt="Thumbnail do vídeo"
            className="rounded-[28px] sm:rounded-[40px] w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-[#EF3970] bg-opacity-80 rounded-full p-4 hover:bg-opacity-100 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-play"
              viewBox="0 0 24 24"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Modal do vídeo */}
      {modalAberto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setModalAberto(false)}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/HgDtZpOwMPA?autoplay=1&rel=0"
              title="Vídeo YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl"
            />
            <button
              onClick={() => setModalAberto(false)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full p-2"
              aria-label="Fechar vídeo"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Onda inferior */}
      <OndaAnimada tipo="inferior" fill="#FF8F5A" corAcima="#EF3970" />
    </section>
  );
};

export default HeroCurvado;
