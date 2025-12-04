import { MapPin } from 'lucide-react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";

import ContactUs from './ContactUs';

function Footer() {
  return (
    <footer id="contacto" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-12 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact us  */}
          <div className='px-4'>
            <ContactUs />
          </div>
          {/* Address and Map Section */}
          <div className="flex flex-col space-y-4 px-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Nuestra Ubicación</h3>
            <p className="text-slate-600 dark:text-slate-400">Visítanos para una asesoría personalizada. Estamos ubicados en la siguiente dirección:</p>
            <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.1548180161835!2d-98.96824805954405!3d19.362447981977326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e263aa59814d%3A0xe9fe2a52e93e5633!2sC.%2029%2C%20Valle%20de%20los%20Reyes%2C%2056430%20Los%20Reyes%20Acaquilpan%2C%20M%C3%A9x.!5e0!3m2!1ses!2smx!4v1764277547146!5m2!1ses!2smx"
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
            <div className="flex items-center gap-2">
              <MapPin className="text-[var(--secondary-color)] w-5 h-5" />
              <div>
                <p className='font-bold text-gray-900 dark:text-white'>Dirección</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Calle 29 mnz 234 Lt 19, los reyes la paz  56430
                </p>
              </div>
            </div>
            <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3764.6394066907587!2d-98.98299712478794!3d19.34144748191851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDIwJzI5LjIiTiA5OMKwNTgnNDkuNSJX!5e0!3m2!1ses!2smx!4v1764871364861!5m2!1ses!2smx"
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
            {/* <div className="flex items-center gap-2">
              <MapPin className="text-[var(--secondary-color)] w-5 h-5" />
              <div>
                <p className='font-bold text-gray-900 dark:text-white'>Dirección</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Calle 29 mnz 234 Lt 19, los reyes la paz  56430
                </p>
              </div>
            </div> */}

          </div>

        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center md:items-center space-y-4 my-4">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Síguenos</h3>
          <div className="flex space-x-10 py-2">
            <a href="https://www.facebook.com/share/19XraXCjEv/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors transform hover:scale-110">
              <FaFacebookF className="w-6 h-6" />
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white hover:text-gray-400 transition-colors transform hover:scale-110">
              <BsTwitterX className="w-6 h-6" />
            </a> */}
            <a href="https://www.instagram.com/arquimedes.contadores" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors transform hover:scale-110">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="https://www.tiktok.com/@cesaraugustourbinaromero" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors transform hover:scale-110">
              <FaTiktok className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
          <p className="mb-4 text-gray-600 dark:text-gray-500">
            © {new Date().getFullYear()} Arquimides Contadores. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
