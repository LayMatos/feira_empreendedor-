import React from "react";
import image from "../assets/image.png";

const NewsBlock: React.FC = () => {
  return (
    <section
      className="relative w-screen h-screen overflow-hidden flex justify-center items-center font-nexa"
      style={{ backgroundColor: "#FF8F5A" }}
    >
      {/* Bloco com imagem de fundo e gradientes aplicados */}
      <div
        className="relative z-0 w-[80vw] h-[45vw] max-w-[1000px] max-h-[562px] mt-10 shadow-lg"
        style={{
          borderRadius: "50px",
          background: `
            linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%),
            linear-gradient(180deg, rgba(26, 60, 91, 0.00) 0%, rgba(26, 60, 91, 0.40) 23.12%, rgba(26, 60, 91, 0.68) 51.83%, #1A3C5B 100%),
            url(${image}) lightgray 0px -373.821px / 100% 208.88% no-repeat
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Conteúdo sobreposto */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center max-w-6xl mx-auto">
        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl text-[48px]">
          Acompanhe as novidades do evento
        </h1>

        <p className="mt-4 text-lg text-white text-[28px]">
          Fique por dentro das últimas notícias, bastidores, confirmações e <br />
          conteúdos especiais sobre tudo que está por vir na FE + STS 2025
        </p>

      <a
  href="#quero-participar"
  className="mt-6 flex items-center justify-center gap-2 w-[70vw] max-w-[700px] h-[52px] p-2 border border-white text-white rounded-full font-semibold bg-transparent hover:bg-white/10 transition-colors shadow"
>
  <span>Quero receber novidades</span>
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M13 21.3066C8.3 21.3066 4.5 17.5066 4.5 12.8066C4.5 8.10664 8.3 4.30664 13 4.30664C17.7 4.30664 21.5 8.10664 21.5 12.8066C21.5 17.5066 17.7 21.3066 13 21.3066ZM13 5.30664C8.85 5.30664 5.5 8.65664 5.5 12.8066C5.5 16.9566 8.85 20.3066 13 20.3066C17.15 20.3066 20.5 16.9566 20.5 12.8066C20.5 8.65664 17.15 5.30664 13 5.30664Z" fill="white"/>
    <path d="M17.15 13.6564L13 9.50644L8.85002 13.6564L8.15002 12.9564L13 8.10645L17.85 12.9564L17.15 13.6564Z" fill="white"/>
    <path d="M12.5 8.80664H13.5V17.3066H12.5V8.80664Z" fill="white"/>
  </svg>
</a>




      </div>
    </section>
  );
};

export default NewsBlock;
