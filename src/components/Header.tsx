import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../assets/Logo_feira.png';
import logo1 from '../assets/Logo_Summit.png';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#EF3970] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        {/* Logos */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo Siará Tech" className="h-10" />
          <img src={logo1} alt="Logo Siará Tech" className="h-10" />
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-light">
          <a href="#palestrantes" className="hover:underline hover:text-white text-white">Palestrantes</a>
          <a href="#galeria" className="hover:underline hover:text-white  text-white">Galeria</a>
          <a href="#patrocinadores" className="hover:underline hover:text-white  text-white">Patrocinadores</a>
          <a
            href="#quero-participar"
            className="
            ml-6 
            bg-yellow-300 
            text-black 
            font-bold 
            px-5 
            py-2 
            rounded-full 
            shadow 
            hover:text-white 
            hover:bg-black 
            hover:underline 
            transition-transform"
          >
            QUERO PARTICIPAR!
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden bg-[#EF3970] border-none">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#EF3970] px-4 pb-4 space-y-3 text-center text-sm font-light">
          <a href="#palestrantes" className="block text-white">Palestrantes</a>
          <a href="#galeria" className="block text-white">Galeria</a>
          <a href="#patrocinadores" className="block text-white">Patrocinadores</a>
          <a
            href="#quero-participar"
            className="inline-block mt-2 px-5 py-2 bg-yellow-300 text-black font-bold rounded-full shadow"
          >
            QUERO PARTICIPAR!
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
