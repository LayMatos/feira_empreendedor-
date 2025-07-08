const Metricas = () => {
  const metricas = [
    { valor: "+30k", texto: "Inscritos" },
    { valor: "+200", texto: "Palestras, oficinas e mentorias" },
    { valor: "+160", texto: "Expositores" },
    { valor: "+300", texto: "Startups participantes" },
  ];

  return (
    <section className="bg-[#FF8F5A] py-12 font-nexa">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-xl font-bold mb-10 text-[49px] leading-snug">
          <p className="font-black text-white">Em 2024, fizemos história.</p>
          <p className="font-black text-black">Em 2025, vamos além!</p>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metricas.map((item, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-white text-[30px]">{item.valor}</div>
              <div className="text-white text-[25px]">{item.texto}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metricas;
