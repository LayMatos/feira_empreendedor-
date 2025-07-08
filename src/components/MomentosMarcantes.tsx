import { useState, useEffect, useRef } from "react";

import momento1 from "../assets/momento1.png";
import momento2 from "../assets/momento2.png";
import momento3 from "../assets/momento3.png";
import momento4 from "../assets/momento4.png";

const imagens = [momento1, momento2, momento3, momento4];

export default function MomentosMarcantes() {
  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  function prevImage() {
    setIndice((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  }

  function nextImage() {
    setIndice((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
    if (pausado) return;

    timeoutRef.current = window.setTimeout(() => {
      nextImage();
    }, 3000);

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [indice, pausado]);

  return (
    <section className="bg-[#FF8F5A] py-12 px-4 text-center font-nexa ">
      <p className="text-white text-[48px] sm:text-4xl mb-2 font-extrabold">
        Momentos marcantes da última edição
      </p>
      <p className="text-black text-[24px] sm:text-2xl max-w-4xl mx-auto mb-8 mt-6 px-4 font-extrabold">
        Reviva a energia da Feira do Empreendedor e do Siará Tech Summit <br />
        com os registros de quem viveu essa experiência de perto.
      </p>

      {/* Carrossel com botões ao lado */}
      <div className="flex items-center justify-center gap-4 flex-wrap sm:flex-nowrap">
        {/* Botão Esquerdo */}
        <button
          onClick={prevImage}
          aria-label="Imagem anterior"
          className="bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-2"
        >
          ←
        </button>

        {/* Imagem principal com tamanho fixo */}
        <div
          className="overflow-hidden rounded-xl shadow-lg"
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
          style={{ width: 1150, height: 692, minWidth: 1150, minHeight: 692 }}
        >
          <img
            src={imagens[indice]}
            alt={`Momento ${indice + 1}`}
            style={{ width: 1150, height: 692, objectFit: "cover" }}
            className="rounded-xl"
          />
        </div>

        {/* Botão Direito */}
        <button
          onClick={nextImage}
          aria-label="Próxima imagem"
          className="bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-2"
        >
          →
        </button>
      </div>

      {/* Miniaturas */}
      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        {imagens.map((img, i) => (
          <div
            key={i}
            className={`rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
              i === indice ? "border-white" : "border-transparent"
            }`}
            onClick={() => setIndice(i)}
            style={{ width: 81, height: 60 }}
          >
            <img
              src={img}
              alt={`Miniatura ${i + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      <p className="mt-10 text-black text-3xl sm:text-4xl font-light">
        Mude o jogo da sua empresa!
      </p>
      <button className="mt-4 bg-white text-[#FF5034] font-bold rounded-full px-6 py-2 hover:bg-orange-50 hover:text-[#FF5034] focus:text-[#FF5034] active:text-[#FF5034] transition">
  QUERO PARTICIPAR!
</button>

    </section>
  );
}
