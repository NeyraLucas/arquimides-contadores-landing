import { useEffect } from "react";
import pex from "../assets/pexels.jpg";
import repse from "../assets/imgs/Repse.png"
import siroc from "../assets/imgs/Siroc.png"
import maquilado from "../assets/imgs/Maquilado-de-nomina.png"
import timbrado from "../assets/imgs/timbrado-de-nomina.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Modal from "react-modal";
import React from "react";
Modal.setAppElement("#root");
const services = [
  {
    title: "SIROC",
    desc: "Desde la apertura de obra hasta su cierre ante el IMSS, nos encargamos de todo el proceso en el sistema SIROC. Sabemos que una omisión puede significar multas, suspensiones o bloqueos en licitaciones. Por eso, realizamos el alta inicial, seguimiento, reportes mensuales, modificaciones y cierres conforme a las obligaciones vigentes. También te asesoramos sobre anticipos, fianzas, subcontratistas y cumplimiento laboral. Nuestro equipo domina cada detalle técnico y normativo para que tú solo te concentres en ejecutar y entregar proyectos con tranquilidad.",
    img: siroc
  },
  {
    title: "REPSE",
    desc: "El cumplimiento con el REPSE no es opcional. Si tu empresa subcontrata servicios especializados, es obligatorio registrarte y mantenerte actualizado en el padrón. En Arquimedes Contadores te ayudamos a obtener el registro, renovarlo en tiempo y cumplir con cada requisito legal. Supervisamos que tu documentación esté en regla, reportamos actividades, integramos expedientes y te preparamos para cualquier auditoría. Este servicio te protege de multas, te da certeza jurídica y te abre las puertas a trabajar con grandes empresas que exigen cumplimiento total.",
    img: repse
  },
  {
    title: "Maquilado de Nóminas",
    desc: "La nómina es uno de los procesos más sensibles de cualquier empresa. Nosotros la manejamos de forma externa, confidencial y 100% profesional. Calculamos sueldos, deducciones, cuotas obrero-patronales, finiquitos, vacaciones, aguinaldos y cualquier obligación laboral. Adaptamos el proceso a las condiciones específicas de tus obras y dispersamos los pagos puntualmente. Además, te entregamos reportes detallados por centro de costos o por proyecto, con respaldo fiscal y legal en cada paso. Así, te olvidas del estrés administrativo y te aseguras de cumplir con todas las disposiciones laborales.",
    img: maquilado
  },
  {
    title: "Timbrado de Nóminas",
    desc: "Cumple con el SAT sin margen de error. Nuestro servicio de timbrado de nómina garantiza que cada recibo digital cumpla con los requisitos fiscales, laborales y técnicos. Utilizamos plataformas automatizadas que timbran en tiempo real, validan la información con precisión y archivan los CFDI de forma segura. Esto te protege de observaciones, multas o rechazos por parte de autoridades. También ofrecemos seguimiento y correcciones en caso de incidencias, para que todo esté en regla mes con mes.",
    img: timbrado
  },
  {
    title: "Revisión IMSS",
    desc: "Muchos errores en pagos al IMSS se detectan tarde, cuando ya hay recargos, multas o auditorías. En Arquimedes Contadores hacemos una revisión exhaustiva de tu situación ante el IMSS: cuotas, movimientos afiliatorios, incidencias, riesgos de trabajo y más. Detectamos anomalías, diferencias o cálculos incorrectos antes de que representen un problema legal o financiero. Te entregamos un diagnóstico claro y te ayudamos a corregir todo con anticipación, protegiendo tu empresa de inspecciones sorpresivas o bloqueos.",
    img: pex
  },
  {
    title: "Contabilidad por Centro de Costos",
    desc: "La contabilidad por centro de costos te permite saber exactamente cuánto gana y cuánto pierde cada una de tus obras. En Arquimedes Contadores diseñamos un sistema contable estructurado por proyecto, con reportes claros que desglosan materiales, mano de obra, gastos generales y márgenes reales. Esta visibilidad te permite optimizar recursos, tomar mejores decisiones financieras y detectar fugas de dinero antes de que afecten tu rentabilidad. Usamos herramientas inteligentes que agilizan los procesos, garantizan precisión en la información y generan informes listos para presentar a socios, bancos o inversionistas.",
    img: pex
  },
  {
    title: "Revision de SAT",
    desc: "Nos adelantamos a cualquier auditoría del SAT. Revisamos cada declaración, pago provisional, deducción, factura emitida o recibida, conciliación bancaria y CFDI, asegurando que todo esté alineado con tus obligaciones fiscales. Combinamos tecnología y análisis experto para detectar errores, omisiones o riesgos. Luego, te entregamos un reporte con observaciones puntuales y un plan de acción para corregir o reforzar tu estrategia fiscal. Esto te brinda certeza, control y confianza ante cualquier revisión de Hacienda.",
    img: pex
  },
  {
    title: "Revisión de la Secretaria del Trabajo",
    desc: "Inspecciones laborales pueden surgir sin previo aviso. Nosotros auditamos internamente tu cumplimiento con la Secretaría del Trabajo: contratos, prestaciones, condiciones laborales, seguridad e higiene, registros patronales, entre otros. Detectamos áreas vulnerables y te ayudamos a corregirlas con rapidez. También preparamos la documentación que toda empresa debe tener a la mano ante una inspección. Con este servicio proteges tu empresa, fortaleces tu reputación y evitas sanciones costosas.",
    img: pex
  },
  {
    title: "Estados Financieros",
    desc: "Tus cifras deben hablar con claridad. Elaboramos estados financieros sólidos, confiables y adaptados a tu realidad constructora: balance general, estado de resultados, flujo de efectivo y análisis comparativos por obra o periodo. Traducimos los datos en información útil para tomar decisiones, presentar ante bancos, inversionistas o socios, o simplemente para que tú tengas el control de tu empresa. Todos nuestros informes están elaborados bajo normas contables vigentes, listos para auditorías, declaraciones o revisiones estratégicas.",
    img: pex
  },
  {
    title: "Auditorias Internas",
    desc: "Detecta riesgos antes de que se conviertan en problemas. Nuestras auditorías internas evalúan a fondo tus procesos contables, fiscales, laborales y administrativos. Revisamos controles, detectamos fraudes o malas prácticas, analizamos desviaciones financieras y proponemos soluciones prácticas. Utilizamos herramientas de inteligencia artificial para acelerar el análisis, pero con interpretación humana que entiende el contexto real de tu empresa. Este servicio fortalece tu operación y te prepara para enfrentar cualquier auditoría externa con confianza.",
    img: pex
  },
];

function Services() {
  const [selectedService, setSelectedService] = React.useState<
    null | (typeof services)[0]
  >(null);

    useEffect(() => {
    if (selectedService) {
      // Bloquea el scroll del body
      document.body.style.overflow = "hidden";
    } else {
      // Restaura el scroll
      document.body.style.overflow = "auto";
    }

    // Limpieza al desmontar
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedService]);

  const openModal = (service: (typeof services)[0]) =>
    setSelectedService(service);
  const closeModal = () => setSelectedService(null);
  return (
    <section id="services" className="py-20 bg-gray-900 px-6">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[var(--secondary-color)] mb-12">
        Nuestros servicios
      </h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        pagination={{ clickable: true }}
        // autoplay={{ delay: 4000, disableOnInteraction: false }}
        grabCursor
        className="pb-12"
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {services.map((s) => (
          <SwiperSlide key={s.title}>
            <div className="bg-[#00182E] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col select-none">
              <img
                className="w-full h-48 object-cover"
                src={s.img}
                alt={`Imagen del servicio de ${s.title}`}
              />
              <div className="p-6 text-white flex flex-col items-center text-center flex-1">
                <div className="font-bold text-xl mb-2">{s.title}</div>
                <p className="text-gray-200 text-sm mb-4 line-clamp-3">
                  {s.desc}
                </p>
                <button
                  onClick={() => openModal(s)}
                  className="mt-auto px-6 py-2 rounded-full bg-[var(--secondary-color)] text-sm font-bold text-white hover:bg-white hover:text-[var(--secondary-color)] transition-color flex items-center space-x-2"
                >
                  <span>Saber más</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M502.6 278.6l-128 128c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h370.7L329.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3z" />
                  </svg>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Modal */}
      <Modal
        isOpen={!!selectedService}
        onRequestClose={closeModal}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden relative max-h-[90vh] flex flex-col"
        // overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-start z-50 p-4"
        overlayClassName="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      >
        {selectedService && (
          <div className="flex flex-col h-full overflow-y-auto flex-1">
            {/* Imagen con botón de cierre */}
            <div className="relative">
              <img
                src={selectedService.img}
                alt={`Imagen del servicio de ${selectedService.title}`}
                className="w-full h-56 object-cover rounded-tl-2xl rounded-tr-2xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-100 hover:text-gray-800 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Contenido */}
            <div className="p-8 text-center">
              <h1 className="text-gray-900 text-2xl font-bold leading-tight tracking-tight">
                {selectedService.title}
              </h1>
              <p className="text-gray-600 text-base font-normal leading-relaxed mt-4">
                {selectedService.desc}
              </p>

              {/* CTA */}
              <div className="p-4">
                <a
                  className="w-full flex items-center justify-center rounded-lg h-12 px-6 bg-[var(--secondary-color)] font-bold text-white hover:bg-white hover:text-[var(--secondary-color)] hover:border-2 transition-color"
                  href="https://wa.me/+525643883859"
                  target="_blank"
                >
                  Solicitar información
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

export default Services;
