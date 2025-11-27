import { CheckCircle } from 'lucide-react';

function About() {
  return (
    <section id="nosotros" className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/2">
        <img
          src="https://images.pexels.com/photos/6566822/pexels-photo-6566822.jpeg"
          alt="Equipo de contadores trabajando"
          className="w-full h-auto rounded-2xl shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--secondary-color)] mb-6">
          Sobre nosotros
        </h2>

        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-4 leading-tight">
          Contabilidad Especializada para Constructoras, Impulsada por Tecnología e Inteligencia Artificial.
        </h3>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
          Arquímedes Contadores es el despacho líder, especializado exclusivamente en empresas constructoras y del sector inmobiliario.
        </p>

        <p className="text-lg font-medium text-slate-700 dark:text-slate-200 mb-3">
          Nuestro Compromiso y Enfoque Único:
        </p>

        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
          Hemos redefinido la asesoría contable y fiscal para la industria de la construcción, integrando tecnología de vanguardia e Inteligencia Artificial. Esto nos permite ir más allá de los servicios tradicionales y ofrecer:
        </p>

        <ul className="space-y-4 mb-6">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-[var(--secondary-color)] flex-shrink-0 mt-1" />
            <span className="text-slate-600 dark:text-slate-300">
              <strong className="text-slate-800 dark:text-white">Informes Financieros Precisos y en Tiempo Real:</strong> Olvídate de la información desactualizada. Obtén datos claros para una toma de decisiones ágil.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-[var(--secondary-color)] flex-shrink-0 mt-1" />
            <span className="text-slate-600 dark:text-slate-300">
              <strong className="text-slate-800 dark:text-white">Cumplimiento Fiscal 100% Seguro:</strong> Garantizamos el cumplimiento ante SAT, IMSS e Infonavit.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-[var(--secondary-color)] flex-shrink-0 mt-1" />
            <span className="text-slate-600 dark:text-slate-300">
              <strong className="text-slate-800 dark:text-white">Gestión de Plataformas Críticas:</strong> Ofrecemos apoyo experto en registros clave como REPSE, ICSOE, SISUB y SIROC, asegurando que tu constructora opere sin riesgos.
            </span>
          </li>
        </ul>

        <p className="text-slate-600 dark:text-slate-300 font-medium italic border-l-4 border-[var(--secondary-color)] pl-4 py-2 bg-gray-50 dark:bg-gray-800/50 rounded-r-lg">
          Con Arquímedes, tu empresa no solo cumple con sus obligaciones, sino que obtiene una ventaja competitiva basada en la claridad financiera.
        </p>
      </div>
    </section>
  );
}

export default About;
