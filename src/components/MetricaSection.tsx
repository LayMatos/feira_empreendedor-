import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import OndaAnimada from "./OndaAnimada";

const metricas = [
  { numero: 30, sufixo: "k", texto: "Inscritos" },
  { numero: 200, sufixo: "", texto: "Palestras, oficinas e mentorias" },
  { numero: 160, sufixo: "", texto: "Expositores" },
  { numero: 300, sufixo: "", texto: "Startups participantes" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, active]);

  return value;
}

interface MetricaItemProps {
  numero: number;
  sufixo: string;
  texto: string;
  index: number;
  active: boolean;
}

const MetricaItem = ({ numero, sufixo, texto, index, active }: MetricaItemProps) => {
  const counted = useCountUp(numero, 2200, active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-6 sm:px-5 sm:py-8 shadow-lg hover:bg-white/25 hover:shadow-xl transition-colors duration-300"
    >
      <div className="absolute inset-x-4 top-0 h-1 rounded-full bg-[#75F4C3] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <motion.p
        className="text-3xl sm:text-4xl font-black text-white tabular-nums"
        key={counted}
        initial={{ opacity: 0.6, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.15 }}
      >
        +{counted}
        {sufixo}
      </motion.p>

      <p className="mt-2 text-sm sm:text-base md:text-lg text-white/90 font-medium leading-snug">
        {texto}
      </p>
    </motion.div>
  );
};

const Metricas = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [animar, setAnimar] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimar(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#FF8F5A] font-nexa overflow-x-hidden">
      {/* Decoração de fundo */}
      <div className="pointer-events-none absolute top-1/3 -right-20 h-64 w-64 rounded-full bg-[#EF3970]/20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-6 sm:pt-16 sm:pb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 sm:mb-12"
        >
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white/80 mb-3">
            Nossos números
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[49px] font-black text-white leading-tight">
            Em 2024, fizemos história.
          </h2>
          <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl lg:text-[49px] font-black leading-tight">
            <span className="text-[#75F4C3]">Em 2025,</span>{" "}
            <span className="text-white">vamos além!</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {metricas.map((item, index) => (
            <MetricaItem
              key={index}
              numero={item.numero}
              sufixo={item.sufixo}
              texto={item.texto}
              index={index}
              active={animar}
            />
          ))}
        </div>
      </div>

      <OndaAnimada tipo="inferior" fill="#EF3970" corAcima="#FF8F5A" />
    </section>
  );
};

export default Metricas;
