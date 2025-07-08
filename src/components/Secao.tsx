import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
      className="relative bg-[#EF3970] overflow-hidden"
      style={{ minHeight: "600px" }}
    >
      {/* Onda superior */}
      <div className="w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1919 121"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M-0.372581 67.8176L45.4791 68.1776C91.3308 68.3576 183.034 69.0776 274.311 77.1776C365.801 85.2776 456.651 100.758 548.141 89.0576C639.418 77.3576 731.121 38.4776 822.398 39.5576C913.888 40.8176 1004.74 82.2176 1096.23 93.5576C1187.51 105.078 1279.21 86.3576 1370.49 80.4176C1461.98 74.4776 1552.83 80.9576 1644.32 89.7776C1735.59 98.4176 1827.3 109.218 1873.15 114.618L1919 120.018V0.0175781H1873.15C1827.3 0.0175781 1735.59 0.0175781 1644.32 0.0175781C1552.83 0.0175781 1461.98 0.0175781 1370.49 0.0175781C1279.21 0.0175781 1187.51 0.0175781 1096.23 0.0175781C1004.74 0.0175781 913.888 0.0175781 822.398 0.0175781C731.121 0.0175781 639.418 0.0175781 548.141 0.0175781C456.651 0.0175781 365.801 0.0175781 274.311 0.0175781C183.034 0.0175781 91.3308 0.0175781 45.4791 0.0175781H-0.372581V67.8176Z"
            fill="#FF8F5A"
          />
        </svg>
      </div>

      {/* Retângulos ovais animados */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: animarRetangulos ? 80 : -40 }}
        transition={{ duration: 1 }}
        className="absolute -top-24 -left-24 w-40 h-80 sm:w-60 sm:h-[400px] bg-yellow-300 rounded-full opacity-40 blur-3xl"
        style={{ zIndex: 0 }}
      />
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: animarRetangulos ? -80 : 40 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -bottom-28 -right-28 w-52 h-36 sm:w-80 sm:h-60 bg-yellow-400 rounded-full opacity-30 blur-3xl"
        style={{ zIndex: 0 }}
      />

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center text-white bg-[#EF3970]">
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
          className="cursor-pointer rounded-[48px] border border-white p-2 relative overflow-hidden w-full max-w-full max-h-[400px]"
          onClick={() => setModalAberto(true)}
        >
          <img
            src="https://img.youtube.com/vi/HgDtZpOwMPA/maxresdefault.jpg"
            alt="Thumbnail do vídeo"
            className="rounded-[40px] w-full h-full object-cover"
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
      <div className="w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1919 121"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M1919 52.2176L1873.15 51.8576C1827.3 51.6776 1735.59 50.9576 1644.32 42.8576C1552.83 34.7576 1461.98 19.2776 1370.49 30.9776C1279.21 42.6776 1187.51 81.5576 1096.23 80.4776C1004.74 79.2176 913.888 37.8176 822.398 26.4776C731.121 14.9576 639.418 33.6776 548.141 39.6176C456.651 45.5576 365.801 39.0776 274.311 30.2576C183.034 21.6176 91.3308 10.8176 45.4791 5.4176L-0.372581 0.0175781V120.018H45.4791C91.3308 120.018 183.034 120.018 274.311 120.018C365.801 120.018 456.651 120.018 548.141 120.018C639.418 120.018 731.121 120.018 822.398 120.018C913.888 120.018 1004.74 120.018 1096.23 120.018C1187.51 120.018 1279.21 120.018 1370.49 120.018C1461.98 120.018 1552.83 120.018 1644.32 120.018C1735.59 120.018 1827.3 120.018 1873.15 120.018H1919V52.2176Z"
            fill="#FF8F5A"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroCurvado;
