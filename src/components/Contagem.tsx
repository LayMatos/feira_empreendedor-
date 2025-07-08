import React, { useState, useEffect } from "react";

type TimeLeftKeys = "dias" | "horas" | "min" | "seg";

interface TimeLeft {
  dias: string;
  horas: string;
  min: string;
  seg: string;
}

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {
      dias: "00",
      horas: "00",
      min: "00",
      seg: "00",
    };

    if (difference > 0) {
      timeLeft = {
        dias: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        horas: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        min: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seg: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const labels: TimeLeftKeys[] = ["dias", "horas", "min", "seg"];

  return (
    <div className="mt-6 flex justify-center space-x-4 text-center">
      {labels.map((label) => (
        <div
          key={label}
          className="bg-white bg-opacity-90 rounded-xl shadow-md px-4 py-2"
        >
          <span className="block text-2xl font-bold text-[#3256FB]">
            {timeLeft[label]}
          </span>
          <span className="text-xs text-gray-700">{label}</span>
        </div>
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-screen h-screen overflow-hidden flex justify-center items-center font-nexa text-white"
      style={{ backgroundColor: "#FF8F5A" }}
    >
      {/* Vídeo de fundo */}
      <div className="relative z-0 w-[80vw] h-[45vw] max-w-[1000px] max-h-[562px] rounded-lg overflow-hidden shadow-lg mt-10">
        <iframe
          className="w-full h-full pointer-events-none"
          src="https://www.youtube.com/embed/49zm_M6nF9w?autoplay=1&mute=1&loop=1&playlist=49zm_M6nF9w&controls=0&modestbranding=1&showinfo=0&rel=0"
          title="Vídeo de fundo"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Sobreposição com gradiente preto para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/30"></div>
      </div>

      {/* Conteúdo central */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center max-w-6xl mx-auto">
        <h2 className="text-sm font-bold uppercase text-white tracking-wide text-[24px]">
          FEIRA DO EMPREENDEDOR + SIARÁ TECH SUMMIT 2025
        </h2>

        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl text-[48px]">
          O MAIOR MOVIMENTO DE <br />
          EMPREENDEDORISMO E
          <br />
          INOVAÇÃO DO CEARÁ
        </h1>

        <p className="mt-4 text-lg text-white text-[28px]">
          De{" "}
          <span className="font-bold text-[#75F4C3]">8 a 10 de outubro</span> no
          Centro de Eventos do Ceará
        </p>

        {/* Contagem regressiva */}
        <Countdown targetDate="2025-10-08T00:00:00" />

        {/* Botão */}
        <a
          href="#quero-participar"
          className="mt-6 inline-block bg-[#3256FB] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#EF3970] hover:text-white transition-transform shadow"
        >
          QUERO PARTICIPAR!
        </a>
      </div>
    </section>
  );
};

export default Hero;
