import imageamanda from "../assets/images.png";
;
const speakers = [
  {
    nome: 'Amanda Graciano',
    cargo: 'Diretora Executiva (TITAN4)',
    imagem: imageamanda,
  },
  {
    nome: 'Fernando Seabra',
    cargo: 'Cargo (EMPRESA)',
    imagem: imageamanda,
  },
  {
    nome: 'Morganna Tito',
    cargo: 'Cargo (EMPRESA)',
    imagem: imageamanda,
  },
  {
    nome: 'Diogo Cortiz',
    cargo: 'Cargo (EMPRESA)',
    imagem: imageamanda,
  },
  {
    nome: 'Cláudio Azevedo',
    cargo: 'Cargo (EMPRESA)',
    imagem: imageamanda,
  },
  {
    nome: 'Rodrigo Cartacho',
    cargo: 'Cargo (EMPRESA)',
    imagem: imageamanda,
  },
];

const Galeria = () => {
  return (
    <section className="relative bg-[#EF3970] overflow-hidden">
      {/* Onda superior */}
      <div className="w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1919 121"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M-0.372581 67.8176L45.4791 68.1776C91.3308 68.3576 183.034 69.0776 274.311 77.1776C365.801 85.2776 456.651 100.758 548.141 89.0576C639.418 77.3576 731.121 38.4776 822.398 39.5576C913.888 40.8176 1004.74 82.2176 1096.23 93.5576C1187.51 105.078 1279.21 86.3576 1370.49 80.4176C1461.98 74.4776 1552.83 80.9576 1644.32 89.7776C1735.59 98.4176 1827.3 109.218 1873.15 114.618L1919 120.018V0.0175781H1873.15C1827.3 0.0175781 1735.59 0.0175781 1644.32 0.0175781C1552.83 0.0175781 1461.98 0.0175781 1370.49 0.0175781C1279.21 0.0175781 1187.51 0.0175781 1096.23 0.0175781C1004.74 0.0175781 913.888 0.0175781 822.398 0.0175781C731.121 0.0175781 639.418 0.0175781 548.141 0.0175781C456.651 0.0175781 365.801 0.0175781 274.311 0.0175781C183.034 0.0175781 91.3308 0.0175781 45.4791 0.0175781H-0.372581V67.8176Z"
            fill="#FF8F5A"
          />
        </svg>
      </div>

      {/* Conteúdo principal */}
      <div className="max-w-7xl mx-auto py-20 px-4 text-center relative z-10 font-nexa text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[48px] font-extrabold">Palestrantes 2025</h2>
        <p className="text-base md:text-lg mb-12 max-w-3xl mx-auto text-[24px] font-extrabold mb-10">
          Confira os primeiros nomes confirmados! Empreendedores, especialistas e líderes de mercado que vão te mostrar, na prática, como inovar, crescer e transformar o seu negócio.
        </p>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-[#F6307E]">
  {speakers.map((speaker, index) => (
    <div
      key={index}
      className="relative w-96 h-52 mx-auto overflow-hidden shadow-lg"
      style={{
        borderRadius: '152px',
        border: '8px solid var(--Vinho-2, #F7C3D3)'
      }}
    >
      <img
        src={speaker.imagem}
        alt={speaker.nome}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 via-black/50 to-transparent text-white px-4 py-2 rounded-b-[152px]">
        <h3 className="text-base font-semibold leading-tight">{speaker.nome}</h3>
        <p className="text-sm text-white/80 leading-snug">{speaker.cargo}</p>
      </div>
    </div>
  ))}
</div>







      </div>

      {/* Onda inferior */}
      <div className="w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1919 121"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M1919 52.2176L1873.15 51.8576C1827.3 51.6776 1735.59 50.9576 1644.32 42.8576C1552.83 34.7576 1461.98 19.2776 1370.49 30.9776C1279.21 42.6776 1187.51 81.5576 1096.23 80.4776C1004.74 79.2176 913.888 37.8176 822.398 26.4776C731.122 14.9576 639.418 33.6776 548.141 39.6176C456.651 45.5576 365.801 39.0776 274.311 30.2576C183.034 21.6176 91.3308 10.8176 45.4791 5.41758L-0.372559 0.0175781V120.018H45.4791C91.3308 120.018 183.034 120.018 274.311 120.018C365.801 120.018 456.651 120.018 548.141 120.018C639.418 120.018 731.122 120.018 822.398 120.018C913.888 120.018 1004.74 120.018 1096.23 120.018C1187.51 120.018 1279.21 120.018 1370.49 120.018C1461.98 120.018 1552.83 120.018 1644.32 120.018C1735.59 120.018 1827.3 120.018 1873.15 120.018H1919V52.2176Z"
            fill="#FF8F5A"
          />
        </svg>
      </div>
    </section>
  );
};

export default Galeria;

