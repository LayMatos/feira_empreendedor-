import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import logo_summit from "../assets/Logo_Summit.png";

const Footer = () => {
  return (
    <footer className="text-white py-10 px-4" style={{ backgroundColor: "#000" }}>
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-between items-center gap-6">
        
        {/* Direitos */}
        <div className="text-sm">
          Todos os direitos reservados ao <strong>Sebrae Ceará.</strong>
        </div>

        {/* Logos */}
        <div className="flex items-center gap-3">
          <span className="font-semibold">Realização:</span>
          <img
            src={logo_summit}
            alt="Siará Tech Summit"
            className="h-10"
          />
          <img
            src="/logo-feira.png"
            alt="Feira do Empreendedor Sebrae"
            className="h-10"
          />
        </div>

        {/* Redes sociais */}
        <div className="flex items-center gap-3">
          <span className="font-semibold text-sm">Redes Sociais:</span>
          <div className="flex gap-2">
            <a href="#" className="bg-white text-black rounded p-1 hover:scale-110 transition">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="bg-white text-black rounded p-1 hover:scale-110 transition">
              <FaLinkedinIn size={16} />
            </a>
            <a href="#" className="bg-white text-black rounded p-1 hover:scale-110 transition">
              <FaFacebookF size={16} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
