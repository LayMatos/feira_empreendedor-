import logo from "../assets/logo_empreendedor.png";

const EventoSection = () => {
  return (
    <section className="bg-[#FF8F5A] py-12 px-6 md:px-20 text-white font-nexa">
      <p className="text-center font-extrabold text-[48px] md:text-xl mb-8 max-w-3xl mx-auto">
        Faça parte agora do maior evento de Tecnologia, negócios e empreendedorismo do Ceará!
      </p>

<div className="grid md:grid-cols-2 gap-6 mt-10">
  {/* Feira do Empreendedor */}
  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:scale-105 transition-transform duration-300 font-nexa">
    <div className="mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 80 81" fill="none">
        <rect x="0.5" y="1" width="79" height="79" rx="39.5" fill="#F7C3D3" />
        <rect x="0.5" y="1" width="79" height="79" rx="39.5" stroke="#EF3970" />
        <path d="M58.6384 37.9356V56.5556C58.6384 57.7343 58.1604 58.8648 57.3096 59.6983C56.4588 60.5317 55.3048 61 54.1016 61H26.8985C25.6956 60.9994 24.5422 60.5309 23.6919 59.6975C22.8416 58.864 22.3639 57.7339 22.3639 56.5556V37.9356M30.2966 33.7778L31.4308 21M30.2966 33.7778C30.2966 40.2267 40.5 40.2267 40.5 33.7778M30.2966 33.7778C30.2966 40.8356 18.6028 39.3778 20.2406 33.2267L22.6111 24.3222C22.8645 23.3712 23.4325 22.5292 24.2263 21.9281C25.0201 21.327 25.995 21.0006 26.9983 21H54.0017C55.0051 21.0006 55.9799 21.327 56.7737 21.9281C57.5675 22.5292 58.1355 23.3712 58.3889 24.3222L60.7594 33.2267C62.3972 39.38 50.7034 40.8356 50.7034 33.7778M40.5 33.7778V21M40.5 33.7778C40.5 40.2267 50.7034 40.2267 50.7034 33.7778M50.7034 33.7778L49.5692 21" stroke="#EF3970" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold mb-4 text-[28px] text-[#EF3970]">Feira do Empreendedor</h3>
     <p className="text-sm leading-relaxed mb-4 text-black text-[18px]">
            O palco dos pequenos negócios com identidade cearense Quer começar um negócio, crescer com o apoio do Sebrae e parceiros, ou descobrir novas oportunidades? A Feira do Empreendedor é o lugar. São três dias com oficinas, exposições, mentorias, rodadas de negócios e conexões que impulsionam trajetórias reais.
          </p>

          <p className="font-semibold text-sm mb-2 text-pink-600 text-[18px]">Temas em destaque:</p>
          <p className="text-xs mb-6 text-black mt-2">
            Empreendedorismo, Gestão, Sustentabilidade, Finanças & Transformação Digital
          </p>

          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full py-2 shadow-md transition-colors duration-300">
            Inscrever agora!
          </button>
  </div>

  {/* Siará Tech Summit */}
  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:scale-105 transition-transform duration-300">
    <div className="mb-4">
      <img src={logo} alt="Siará Tech Summit" width={40} height={41} />
    </div>
    <h3 className="text-xl font-semibold mb-4 text-[28px] text-[#3256FB]">Siará Tech Summit</h3>
   <p className="text-sm leading-relaxed mb-4 text-black text-[18px]">
            Inovação conectada com a realidade dos negócios. O Siará Tech Summit reúne startups, empresas e investidores em um ambiente de soluções práticas e tendências que transformam. São experiências imersivas, hackathons, pitches, rodadas de negócios e muito conteúdo sobre o agora e o futuro.
          </p>

          <p className="font-semibold text-sm mb-2 text-[#3256FB]">Temas em destaque:</p>
          <p className="text-xs mb-6 text-black mt-2">
            Tecnologia, Startups, IA, Ecossistemas, Negócios Inovadores
          </p>

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full py-2 shadow-md transition-colors duration-300">
            Inscrever agora!
          </button>
  </div>
</div>

    
    </section>
  );
};

export default EventoSection;
