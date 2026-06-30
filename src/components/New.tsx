import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import OndaAnimada from "./OndaAnimada";
import image from "../assets/image.png";

const NewsBlock = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "#quero-participar";
  };

  return (
    <section
      id="novidades"
      className="relative w-full overflow-x-hidden font-nexa bg-[#EF3970] -mt-px"
    >
      <div className="relative px-4 sm:px-6 pt-6 sm:pt-10 pb-14 sm:pb-20 md:pb-24">
        <div className="pointer-events-none absolute top-10 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-20 right-0 w-72 h-72 bg-[#FF8F5A]/15 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl sm:rounded-[40px] overflow-hidden shadow-2xl"
          >
            {/* Imagem de fundo */}
            <img
              src={image}
              alt="Palco do evento FE + STS"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C5B]/90 via-[#1A3C5B]/50 to-transparent" />

            {/* Conteúdo */}
            <div className="relative z-10 flex flex-col items-center text-center px-5 sm:px-10 md:px-14 py-12 sm:py-16 md:py-20">
              <span className="inline-block mb-4 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white/90 bg-white/15 rounded-full backdrop-blur-sm">
                Newsletter
              </span>

              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-tight max-w-2xl">
                Acompanhe as novidades do evento
              </h2>

              <p className="mt-4 sm:mt-5 text-white/90 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                Fique por dentro das últimas notícias, bastidores, confirmações e
                conteúdos especiais sobre tudo que está por vir na FE + STS 2025.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 sm:mt-10 w-full max-w-lg flex flex-col sm:flex-row gap-3"
              >
                <div className="relative flex-1">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor e-mail"
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-full bg-white text-[#EF3970] text-sm sm:text-base font-bold hover:bg-[#FF8F5A] hover:text-white transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
                >
                  <span>Quero receber novidades</span>
                  <ArrowRight size={18} />
                </button>
              </form>

              <p className="mt-4 text-white/60 text-xs sm:text-sm">
                Sem spam. Apenas conteúdos relevantes sobre o evento.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <OndaAnimada tipo="inferior" fill="#FFFFFF" corAcima="#EF3970" />
    </section>
  );
};

export default NewsBlock;
