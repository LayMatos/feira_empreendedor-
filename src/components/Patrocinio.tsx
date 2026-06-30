import { motion } from "framer-motion";
import imagem from "../assets/patrocinio.png";
import OndaAnimada from "./OndaAnimada";

const SponsorshipSection = () => {
  return (
    <section
      id="patrocinadores"
      className="relative bg-white font-nexa overflow-x-hidden -mt-px"
    >
      {/* Detalhe decorativo */}
      <div className="pointer-events-none absolute top-0 right-0 w-72 h-72 bg-[#EF3970]/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-40 left-0 w-56 h-56 bg-[#FF8F5A]/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-8 sm:pt-10 pb-4 md:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Imagem — contida, sem cortar no footer */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px]">
              <div className="absolute inset-x-6 bottom-4 h-32 bg-gradient-to-t from-[#FF8F5A]/20 to-transparent rounded-full blur-xl" />
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFF5F0] to-white p-3 sm:p-4 shadow-xl border border-[#FF8F5A]/20">
                <img
                  src={imagem}
                  alt="Empreendedor — patrocine o evento"
                  className="w-full h-auto max-h-[360px] sm:max-h-[400px] lg:max-h-[440px] object-contain object-bottom mx-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="order-1 lg:order-2 pb-6 lg:pb-12"
          >
            <span className="inline-block mb-4 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#EF3970] bg-[#EF3970]/10 rounded-full">
              Patrocínio
            </span>

            <h2 className="text-[#EF3970] text-2xl sm:text-3xl lg:text-[32px] font-bold leading-tight mb-5">
              Associe sua marca ao maior evento de inovação, tecnologia e
              empreendedorismo do Nordeste.
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
              O{" "}
              <span className="text-[#3256FB] font-semibold">
                Siará Tech Summit + Feira do Empreendedor
              </span>{" "}
              reúne empresários, startups, investidores, instituições e
              lideranças públicas e privadas em um ambiente voltado para
              conexões estratégicas, compartilhamento de conhecimento e geração
              de negócios.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
              Patrocinar este evento é uma oportunidade de fortalecer sua
              presença no mercado, ampliar parcerias e contribuir para o
              desenvolvimento do ecossistema de inovação e empreendedorismo.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <p className="text-gray-800 text-sm sm:text-base leading-snug">
                <span className="text-[#EF3970] font-semibold">
                  Inscreva-se agora
                </span>{" "}
                e faça parte dessa transformação!
              </p>

              <a
                href="#saiba-mais"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white text-sm font-semibold rounded-2xl border-[3px] border-[#FFD9A0] bg-[#FF5034] hover:bg-[#EF3970] hover:border-[#F7C3D3] transition-colors duration-300 shadow-md hover:shadow-lg shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 26 26"
                  fill="none"
                  className="flex-shrink-0"
                  aria-hidden
                >
                  <path
                    d="M12.8684 4.08447C17.6236 4.08447 21.468 7.92885 21.468 12.6841C21.468 17.4393 17.6236 21.2837 12.8684 21.2837C8.11318 21.2837 4.2688 17.4393 4.2688 12.6841C4.2688 7.92885 8.11318 4.08447 12.8684 4.08447ZM12.8684 5.28369C8.77364 5.28369 5.46802 8.58931 5.46802 12.6841C5.46802 16.7789 8.77364 20.0845 12.8684 20.0845C16.9632 20.0845 20.2688 16.7789 20.2688 12.6841C20.2688 8.58931 16.9632 5.28369 12.8684 5.28369Z"
                    fill="#FFFEFA"
                  />
                  <path
                    d="M17.7889 12.7632L12.868 9.5249L8.78894 13.605L12.7977 7.91357L17.7889 12.7632Z"
                    fill="#FFFEFA"
                  />
                  <path d="M13.468 8.58447V17.2837H12.2688V8.58447H13.468Z" fill="#FFFEFA" />
                </svg>
                Saiba mais
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Onda — transição suave para o footer preto */}
      <OndaAnimada tipo="inferior" fill="#000000" corAcima="#FFFFFF" />
    </section>
  );
};

export default SponsorshipSection;
