import { useState } from "react";
import logoArquimides from '../assets/logo-arquimides-contadores.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[var(--primary-color)] border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo y Nombre */}
        <div className="flex items-center gap-3">
          <img src={logoArquimides} alt="" className="h-10 w-auto" />
        </div>

        {/* Menú de navegación para escritorio */}
        <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-8">
            {["Home", "About", "Services", "Testimonials"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-200 hover:text-[var(--secondary-color)] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="h-10 flex items-center justify-center rounded-md px-5  bg-[var(--secondary-color)] text-sm font-bold text-white hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </nav>

        {/* Botón de hamburguesa para móvil */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menú desplegable para móvil */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-md border-t border-gray-200 px-4 py-2`}
      >
        <div className="flex flex-col gap-4">
          {["Home", "About", "Services", "Testimonials"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-base font-medium text-gray-600 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic en un enlace
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="h-10 flex items-center justify-center rounded-md px-5 bg-blue-600 text-sm font-bold text-white hover:bg-blue-700 transition-colors mt-2"
            onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic en el botón
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
