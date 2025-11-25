import { MapPin, Facebook, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Address and Map Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold text-[var(--secondary-color)] flex items-center gap-2">
              <MapPin className="w-5 h-5" /> Ubicación
            </h3>
            <p className="text-gray-300">
              Av. Paseo de la Reforma 505, <br />
              Cuauhtémoc, 06500 Ciudad de México, CDMX
            </p>
            <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15056.977072818492!2d-98.97974744999998!3d19.358573149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e2bfd3d35b85%3A0x20026595df5dbb0d!2sCentro%20Tepozan!5e0!3m2!1ses!2smx!4v1764031003846!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Ubicación"
              >
              </iframe>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl font-bold text-[var(--secondary-color)]">Síguenos</h3>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/share/19XraXCjEv/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors transform hover:scale-110">
                <Facebook className="w-8 h-8" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors transform hover:scale-110 text-white">
                {/* X Icon (Custom SVG) */}
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/arquimedes.contadores" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors transform hover:scale-110">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="https://www.tiktok.com/@cesaraugustourbinaromero" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors transform hover:scale-110">
                {/* TikTok Icon (Custom SVG) */}
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="mb-4 text-gray-500">
            © {new Date().getFullYear()} Arquimides Contadores. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
