import pex from "../assets/pexels.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const services = [
  {
    title: "SIROC",
    desc: "Desde la apertura de obra hasta su cierre ante el IMSS, nos encargamos de todo el proceso en el sistema SIROC. Sabemos que una omisión puede significar multas, suspensiones o bloqueos en licitaciones. Por eso, realizamos el alta inicial, seguimiento, reportes mensuales, modificaciones y cierres conforme a las obligaciones vigentes. También te asesoramos sobre anticipos, fianzas, subcontratistas y cumplimiento laboral. Nuestro equipo domina cada detalle técnico y normativo para que tú solo te concentres en ejecutar y entregar proyectos con tranquilidad.",
  },
  {
    title: "REPSE",
    desc: "El cumplimiento con el REPSE no es opcional. Si tu empresa subcontrata servicios especializados, es obligatorio registrarte y mantenerte actualizado en el padrón. En Arquimedes Contadores te ayudamos a obtener el registro, renovarlo en tiempo y cumplir con cada requisito legal. Supervisamos que tu documentación esté en regla, reportamos actividades, integramos expedientes y te preparamos para cualquier auditoría. Este servicio te protege de multas, te da certeza jurídica y te abre las puertas a trabajar con grandes empresas que exigen cumplimiento total.",
  },
  {
    title: "Maquilado de Nóminas",
    desc: "La nómina es uno de los procesos más sensibles de cualquier empresa. Nosotros la manejamos de forma externa, confidencial y 100% profesional. Calculamos sueldos, deducciones, cuotas obrero-patronales, finiquitos, vacaciones, aguinaldos y cualquier obligación laboral. Adaptamos el proceso a las condiciones específicas de tus obras y dispersamos los pagos puntualmente. Además, te entregamos reportes detallados por centro de costos o por proyecto, con respaldo fiscal y legal en cada paso. Así, te olvidas del estrés administrativo y te aseguras de cumplir con todas las disposiciones laborales.",
  },
  {
    title: "Timbrado de Nóminas",
    desc: "Cumple con el SAT sin margen de error. Nuestro servicio de timbrado de nómina garantiza que cada recibo digital cumpla con los requisitos fiscales, laborales y técnicos. Utilizamos plataformas automatizadas que timbran en tiempo real, validan la información con precisión y archivan los CFDI de forma segura. Esto te protege de observaciones, multas o rechazos por parte de autoridades. También ofrecemos seguimiento y correcciones en caso de incidencias, para que todo esté en regla mes con mes.",
  },
  {
    title: "Revisión IMSS",
    desc: "Muchos errores en pagos al IMSS se detectan tarde, cuando ya hay recargos, multas o auditorías. En Arquimedes Contadores hacemos una revisión exhaustiva de tu situación ante el IMSS: cuotas, movimientos afiliatorios, incidencias, riesgos de trabajo y más. Detectamos anomalías, diferencias o cálculos incorrectos antes de que representen un problema legal o financiero. Te entregamos un diagnóstico claro y te ayudamos a corregir todo con anticipación, protegiendo tu empresa de inspecciones sorpresivas o bloqueos.",
  },
  {
    title: "Contabilidad por Centro de Costos",
    desc: "La contabilidad por centro de costos te permite saber exactamente cuánto gana y cuánto pierde cada una de tus obras. En Arquimedes Contadores diseñamos un sistema contable estructurado por proyecto, con reportes claros que desglosan materiales, mano de obra, gastos generales y márgenes reales. Esta visibilidad te permite optimizar recursos, tomar mejores decisiones financieras y detectar fugas de dinero antes de que afecten tu rentabilidad. Usamos herramientas inteligentes que agilizan los procesos, garantizan precisión en la información y generan informes listos para presentar a socios, bancos o inversionistas.",
  },
  {
    title: "Revision de SAT",
    desc: "Nos adelantamos a cualquier auditoría del SAT. Revisamos cada declaración, pago provisional, deducción, factura emitida o recibida, conciliación bancaria y CFDI, asegurando que todo esté alineado con tus obligaciones fiscales. Combinamos tecnología y análisis experto para detectar errores, omisiones o riesgos. Luego, te entregamos un reporte con observaciones puntuales y un plan de acción para corregir o reforzar tu estrategia fiscal. Esto te brinda certeza, control y confianza ante cualquier revisión de Hacienda.",
  },
  {
    title: "Revisión de la Secretaria del Trabajo",
    desc: "Inspecciones laborales pueden surgir sin previo aviso. Nosotros auditamos internamente tu cumplimiento con la Secretaría del Trabajo: contratos, prestaciones, condiciones laborales, seguridad e higiene, registros patronales, entre otros. Detectamos áreas vulnerables y te ayudamos a corregirlas con rapidez. También preparamos la documentación que toda empresa debe tener a la mano ante una inspección. Con este servicio proteges tu empresa, fortaleces tu reputación y evitas sanciones costosas.",
  },
  {
    title: "Estados Financieros",
    desc: "Tus cifras deben hablar con claridad. Elaboramos estados financieros sólidos, confiables y adaptados a tu realidad constructora: balance general, estado de resultados, flujo de efectivo y análisis comparativos por obra o periodo. Traducimos los datos en información útil para tomar decisiones, presentar ante bancos, inversionistas o socios, o simplemente para que tú tengas el control de tu empresa. Todos nuestros informes están elaborados bajo normas contables vigentes, listos para auditorías, declaraciones o revisiones estratégicas.",
  },
  {
    title: "Auditorias Internas",
    desc: "Detecta riesgos antes de que se conviertan en problemas. Nuestras auditorías internas evalúan a fondo tus procesos contables, fiscales, laborales y administrativos. Revisamos controles, detectamos fraudes o malas prácticas, analizamos desviaciones financieras y proponemos soluciones prácticas. Utilizamos herramientas de inteligencia artificial para acelerar el análisis, pero con interpretación humana que entiende el contexto real de tu empresa. Este servicio fortalece tu operación y te prepara para enfrentar cualquier auditoría externa con confianza.",
  },
];

function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900 px-6">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[var(--secondary-color)] mb-12">
        Nuestros servicios
      </h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        grabCursor={true}
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
            <div className="bg-[#00182E] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col">
              <img
                className="w-full h-48 object-cover"
                src={pex}
                alt={`Imagen del servicio de ${s.title}`}
              />
              <div className="p-6 text-white flex flex-col items-center text-center flex-1">
                <div className="font-bold text-xl mb-2">{s.title}</div>
                <p className="text-gray-200 text-sm mb-4 line-clamp-3">
                  {s.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-auto px-6 py-2 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <span>Saber más</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M502.6 278.6l-128 128c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h370.7L329.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3z" />
                  </svg>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Services;
