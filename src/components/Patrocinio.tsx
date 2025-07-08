import React from "react";
import imagem from "../assets/patrocinio.png";

const SponsorshipSection: React.FC = () => {
  return (
    <section className="bg-white px-6 md:px-12 font-nexa relative overflow-visible font-nexa">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Imagem */}
        <div className="flex justify-center">
          <img
            src={imagem}
            alt="Patrocínio"
            className="
              w-[350px] md:w-[450px] lg:w-[550px]
              relative
              bottom-[-60px] md:bottom-[-80px]
            "
          />
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-[#EF3970] text-xl md:text-2xl font-bold leading-tight mb-4 text-[32px]">
            Associe sua marca ao maior evento de
            <br />
            inovação, tecnologia e empreendedorismo do Nordeste.
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed">
            O <span className="text-[#3256FB] font-semibold">
              Siará Tech Summit + Feira do Empreendedor
            </span>{" "}
            reúne empresários, startups, investidores, instituições e
            lideranças públicas e privadas em um ambiente voltado para
            conexões estratégicas, compartilhamento de conhecimento e
            geração de negócios.
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed">
            Patrocinar este evento é uma oportunidade de fortalecer sua
            presença no mercado, ampliar parcerias e contribuir para o
            desenvolvimento do ecossistema de inovação e empreendedorismo.
          </p>

          <div className="text-gray-800 leading-relaxed flex items-center gap-4 flex-wrap md:flex-nowrap">
  <span>
    <span className="text-[#EF3970] font-semibold">Inscreva-se agora</span> e faça parte dessa transformação!
  </span>

<a
  href="#saiba-mais"
  className="inline-flex items-center gap-2 px-6 py-2 text-white text-sm font-semibold"
  style={{
    borderRadius: "18px 10px",
    border: "3px solid #FFD9A0",
    background: "#FF5034",
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 26 26"
    fill="none"
    className="flex-shrink-0"
  >
    <path
      d="M12.8684 4.08447C17.6236 4.08447 21.468 7.92885 21.468 12.6841C21.468 17.4393 17.6236 21.2837 12.8684 21.2837C8.11318 21.2837 4.2688 17.4393 4.2688 12.6841C4.2688 7.92885 8.11318 4.08447 12.8684 4.08447ZM12.8684 5.28369C8.77364 5.28369 5.46802 8.58931 5.46802 12.6841C5.46802 16.7789 8.77364 20.0845 12.8684 20.0845C16.9632 20.0845 20.2688 16.7789 20.2688 12.6841C20.2688 8.58931 16.9632 5.28369 12.8684 5.28369Z"
      fill="#FFFEFA"
      stroke="#FFFEFA"
      strokeWidth="0.2"
    />
    <path
      d="M17.7889 12.7632L17.8602 12.8335L17.0184 13.6753L12.868 9.5249L8.78894 13.605L8.71863 13.6753L8.64734 13.605L7.94812 12.9048L7.87683 12.8335L7.94812 12.7632L12.7977 7.91357L12.868 7.84229L17.7889 12.7632Z"
      fill="#FFFEFA"
      stroke="#FFFEFA"
      strokeWidth="0.2"
    />
    <path
      d="M13.468 8.58447V17.2837H12.2688V8.58447H13.468Z"
      fill="#FFFEFA"
      stroke="#FFFEFA"
      strokeWidth="0.2"
    />
  </svg>
  Saiba mais
</a>


</div>

        </div>
      </div>
    </section>
  );
};

export default SponsorshipSection;
