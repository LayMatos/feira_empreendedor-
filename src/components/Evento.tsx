import type { ReactNode } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo_empreendedor.png";

const temasFeira = [
  "Empreendedorismo",
  "Gestão",
  "Sustentabilidade",
  "Finanças",
  "Transformação Digital",
];

const temasSummit = [
  "Tecnologia",
  "Startups",
  "IA",
  "Ecossistemas",
  "Negócios Inovadores",
];

interface EventoCardProps {
  index: number;
  accent: "feira" | "summit";
  title: string;
  description: string;
  temas: string[];
  icon: ReactNode;
  buttonClass: string;
}

const EventoCard = ({
  index,
  accent,
  title,
  description,
  temas,
  icon,
  buttonClass,
}: EventoCardProps) => {
  const isFeira = accent === "feira";
  const titleColor = isFeira ? "text-[#EF3970]" : "text-[#3256FB]";
  const tagBg = isFeira ? "bg-[#F7C3D3]/60 text-[#EF3970]" : "bg-blue-100 text-[#3256FB]";
  const barColor = isFeira ? "bg-[#EF3970]" : "bg-[#3256FB]";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 sm:p-8 flex flex-col h-full border border-white/80 overflow-hidden relative"
    >
      <div className={`absolute top-0 inset-x-0 h-1.5 ${barColor}`} />

      <div className="mb-5">{icon}</div>

      <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${titleColor}`}>{title}</h3>

      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5 flex-grow">
        {description}
      </p>

      <p className={`text-sm font-semibold mb-3 ${titleColor}`}>Temas em destaque:</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {temas.map((tema) => (
          <span
            key={tema}
            className={`text-xs sm:text-sm font-medium px-3 py-1 rounded-full ${tagBg}`}
          >
            {tema}
          </span>
        ))}
      </div>

      <button
        className={`w-full mt-auto py-3 rounded-full font-bold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${buttonClass}`}
      >
        Inscrever agora!
      </button>
    </motion.article>
  );
};

const EventoSection = () => {
  return (
    <section className="relative bg-[#FF8F5A] pt-12 sm:pt-16 pb-0 px-4 sm:px-6 md:px-12 lg:px-20 text-white font-nexa overflow-x-hidden -mt-px">
      <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 bg-[#EF3970]/15 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="inline-block mb-3 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90 bg-white/15 rounded-full">
            Inscrições abertas
          </span>
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight max-w-4xl mx-auto text-white">
            Faça parte agora do maior evento de Tecnologia, negócios e empreendedorismo
            do Ceará!
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pb-12 sm:pb-16">
          <EventoCard
            index={0}
            accent="feira"
            title="Feira do Empreendedor"
            description="O palco dos pequenos negócios com identidade cearense. Quer começar um negócio, crescer com o apoio do Sebrae e parceiros, ou descobrir novas oportunidades? São três dias com oficinas, exposições, mentorias, rodadas de negócios e conexões que impulsionam trajetórias reais."
            temas={temasFeira}
            buttonClass="bg-[#EF3970] hover:bg-[#d42f63]"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 80 81" fill="none" aria-hidden>
                <rect x="0.5" y="1" width="79" height="79" rx="39.5" fill="#F7C3D3" />
                <rect x="0.5" y="1" width="79" height="79" rx="39.5" stroke="#EF3970" />
                <path
                  d="M58.6384 37.9356V56.5556C58.6384 57.7343 58.1604 58.8648 57.3096 59.6983C56.4588 60.5317 55.3048 61 54.1016 61H26.8985C25.6956 60.9994 24.5422 60.5309 23.6919 59.6975C22.8416 58.864 22.3639 57.7339 22.3639 56.5556V37.9356M30.2966 33.7778L31.4308 21M30.2966 33.7778C30.2966 40.2267 40.5 40.2267 40.5 33.7778M30.2966 33.7778C30.2966 40.8356 18.6028 39.3778 20.2406 33.2267L22.6111 24.3222C22.8645 23.3712 23.4325 22.5292 24.2263 21.9281C25.0201 21.327 25.995 21.0006 26.9983 21H54.0017C55.0051 21.0006 55.9799 21.327 56.7737 21.9281C57.5675 22.5292 58.1355 23.3712 58.3889 24.3222L60.7594 33.2267C62.3972 39.38 50.7034 40.8356 50.7034 33.7778M40.5 33.7778V21M40.5 33.7778C40.5 40.2267 50.7034 40.2267 50.7034 33.7778M50.7034 33.7778L49.5692 21"
                  stroke="#EF3970"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />

          <EventoCard
            index={1}
            accent="summit"
            title="Siará Tech Summit"
            description="Inovação conectada com a realidade dos negócios. Reúne startups, empresas e investidores em um ambiente de soluções práticas e tendências que transformam. Experiências imersivas, hackathons, pitches, rodadas de negócios e conteúdo sobre o agora e o futuro."
            temas={temasSummit}
            buttonClass="bg-[#3256FB] hover:bg-[#2845d4]"
            icon={
              <img src={logo} alt="" width={48} height={48} className="rounded-full" />
            }
          />
        </div>
      </div>
    </section>
  );
};

export default EventoSection;
