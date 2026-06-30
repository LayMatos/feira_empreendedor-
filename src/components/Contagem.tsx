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
    <div className="mt-6 flex justify-center gap-2 sm:gap-4 text-center flex-wrap px-2">
      {labels.map((label) => (
        <div
          key={label}
          className="bg-white bg-opacity-90 rounded-xl shadow-md px-3 py-2 sm:px-4 min-w-[64px] sm:min-w-[72px]"
        >
          <span className="block text-xl sm:text-2xl font-bold text-[#3256FB]">
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
      className="relative w-full h-screen overflow-hidden flex justify-center items-center font-nexa text-white"
      style={{ backgroundColor: "#FF8F5A" }}
    >
      {/* Vídeo de fundo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          className="pointer-events-none border-0"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "177.78vh",
            height: "56.25vw",
            minWidth: "100%",
            minHeight: "100%",
            transform: "translate(-50%, -50%)",
          }}
          src="https://www.youtube.com/embed/49zm_M6nF9w?autoplay=1&mute=1&loop=1&playlist=49zm_M6nF9w&controls=0&modestbranding=1&showinfo=0&rel=0"
          title="Vídeo de fundo"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Opacidade sobre o vídeo para as letras aparecerem */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(0,0,0,0.6))",
          }}
        />
      </div>

      {/* Conteúdo central */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6 text-center w-full max-w-6xl mx-auto">
        <h2 className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold uppercase text-white tracking-wide leading-snug max-w-xl">
          FEIRA DO EMPREENDEDOR + SIARÁ TECH SUMMIT 2025
        </h2>

        <h1 className="mt-3 sm:mt-4 font-extrabold text-white leading-[1.15] w-full max-w-4xl text-[clamp(1.35rem,5.2vw,3rem)] px-1">
          O MAIOR MOVIMENTO DE{" "}
          <span className="block sm:inline">EMPREENDEDORISMO E</span>{" "}
          <span className="block sm:inline">INOVAÇÃO DO CEARÁ</span>
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed max-w-lg">
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
