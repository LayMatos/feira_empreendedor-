import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import OndaAnimada from "./OndaAnimada";

import momento1 from "../assets/momento1.png";
import momento2 from "../assets/momento2.png";
import momento3 from "../assets/momento3.png";
import momento4 from "../assets/momento4.png";

const imagens = [
  { src: momento1, legenda: "Abertura do evento" },
  { src: momento2, legenda: "Palco principal" },
  { src: momento3, legenda: "Expositores e público" },
  { src: momento4, legenda: "Networking e conexões" },
];

export default function MomentosMarcantes() {
  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [progresso, setProgresso] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const progressRef = useRef<number | null>(null);

  const total = imagens.length;
  const duracao = 5000;

  const prevImage = () => {
    setProgresso(0);
    setIndice((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextImage = () => {
    setProgresso(0);
    setIndice((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const irPara = (i: number) => {
    setProgresso(0);
    setIndice(i);
  };

  useEffect(() => {
    if (pausado) return;

    const inicio = Date.now();
    progressRef.current = window.setInterval(() => {
      const elapsed = Date.now() - inicio;
      setProgresso(Math.min((elapsed / duracao) * 100, 100));
    }, 50);

    timeoutRef.current = window.setTimeout(nextImage, duracao);

    return () => {
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
      if (progressRef.current !== null) clearInterval(progressRef.current);
    };
  }, [indice, pausado]);

  return (
    <section id="galeria" className="font-nexa overflow-x-hidden bg-[#FF8F5A] -mt-px">
      {/* Cabeçalho */}
      <div className="bg-[#FF8F5A] px-4 sm:px-6 pt-12 sm:pt-14 pb-8 text-center relative">
        <div className="pointer-events-none absolute top-0 right-0 w-56 h-56 bg-[#EF3970]/10 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-3 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white/80 bg-white/15 rounded-full">
            Galeria
          </span>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-extrabold leading-tight">
            Momentos marcantes da última edição
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mt-4 sm:mt-5 font-medium leading-relaxed">
            Reviva a energia da Feira do Empreendedor e do Siará Tech Summit com os
            registros de quem viveu essa experiência de perto.
          </p>
        </motion.div>
      </div>

      {/* Carrossel */}
      <div className="bg-[#FF8F5A] px-4 sm:px-6 py-10 sm:py-14 relative">
        <div className="pointer-events-none absolute top-0 left-0 w-48 h-48 bg-[#EF3970]/10 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto">
          {/* Imagem principal */}
          <div
            className="relative"
            onMouseEnter={() => setPausado(true)}
            onMouseLeave={() => setPausado(false)}
          >
            <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl aspect-[16/10] sm:aspect-[1150/692] bg-gray-900">
              <AnimatePresence initial={false}>
                <motion.img
                  key={indice}
                  src={imagens[indice].src}
                  alt={imagens[indice].legenda}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Gradiente inferior para legibilidade */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

              {/* Legenda */}
              <p className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 text-white text-sm sm:text-base font-semibold drop-shadow-md">
                {imagens[indice].legenda}
              </p>

              {/* Contador */}
              <span className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 bg-black/40 backdrop-blur-sm text-white text-xs sm:text-sm px-3 py-1 rounded-full">
                {indice + 1} / {total}
              </span>
            </div>

            {/* Barra de progresso do autoplay */}
            <div className="mt-3 h-1.5 bg-white/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#EF3970] rounded-full"
                style={{ width: `${progresso}%` }}
                transition={{ duration: 0.05 }}
              />
            </div>

            {/* Controles: anterior · pausar · próxima */}
            <div className="mt-4 flex items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={prevImage}
                aria-label="Anterior"
                className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-full bg-white text-[#EF3970] shadow-md border-2 border-white hover:bg-[#EF3970] hover:text-white hover:border-[#EF3970] active:scale-95 transition-all"
              >
                <ChevronLeft size={24} strokeWidth={2.5} aria-hidden />
              </button>

              <button
                onClick={() => setPausado((p) => !p)}
                aria-label={pausado ? "Retomar slideshow" : "Pausar slideshow"}
                className="flex items-center justify-center gap-2 min-w-[120px] px-5 py-2.5 rounded-full bg-white text-[#FF8F5A] text-sm font-bold shadow-md border-2 border-white hover:bg-[#EF3970] hover:text-white hover:border-[#EF3970] active:scale-95 transition-all"
              >
                {pausado ? (
                  <Play size={18} strokeWidth={2.5} aria-hidden />
                ) : (
                  <Pause size={18} strokeWidth={2.5} aria-hidden />
                )}
                {pausado ? "Retomar" : "Pausar"}
              </button>

              <button
                onClick={nextImage}
                aria-label="Próxima"
                className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-full bg-white text-[#EF3970] shadow-md border-2 border-white hover:bg-[#EF3970] hover:text-white hover:border-[#EF3970] active:scale-95 transition-all"
              >
                <ChevronRight size={24} strokeWidth={2.5} aria-hidden />
              </button>
            </div>
          </div>

          {/* Miniaturas */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-6 sm:mt-8">
            {imagens.map((item, i) => (
              <button
                key={i}
                onClick={() => irPara(i)}
                aria-label={`Ver ${item.legenda}`}
                aria-current={i === indice ? "true" : undefined}
                className={`relative rounded-xl overflow-hidden aspect-[4/3] transition-all duration-300 ${
                  i === indice
                    ? "ring-2 ring-[#EF3970] ring-offset-1 sm:ring-offset-2 ring-offset-[#FF8F5A] scale-[1.02] sm:scale-[1.03] shadow-lg"
                    : "opacity-60 hover:opacity-100 hover:scale-[1.02]"
                }`}
              >
                <img src={item.src} alt="" className="w-full h-full object-cover" />
                {i === indice && (
                  <div className="absolute inset-0 border-2 border-[#EF3970] rounded-xl pointer-events-none" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CTA — faixa laranja */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#FF8F5A] px-4 sm:px-6 pt-10 sm:pt-12 pb-8 sm:pb-10 text-center relative"
      >
        <div className="pointer-events-none absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute top-0 right-0 w-56 h-56 bg-[#EF3970]/10 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto">
          <p className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug">
            Mude o jogo da sua empresa!
          </p>
          <p className="text-white/90 text-sm sm:text-base mt-2 mb-6 sm:mb-8">
            Garanta sua vaga na próxima edição
          </p>
          <a
            href="#quero-participar"
            className="inline-block w-full sm:w-auto max-w-sm sm:max-w-none bg-white text-[#FF8F5A] text-sm sm:text-base font-bold rounded-full px-6 sm:px-10 py-3 sm:py-3.5 hover:bg-[#EF3970] hover:text-white transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            QUERO PARTICIPAR!
          </a>
        </div>
      </motion.div>

      <OndaAnimada tipo="inferior" fill="#EF3970" corAcima="#FF8F5A" />
    </section>
  );
}
