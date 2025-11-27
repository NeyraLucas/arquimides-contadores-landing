function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
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
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Arquímedes Contadores es un despacho especializado en empresas
          constructoras. Brindamos servicios de contabilidad, asesoría fiscal y
          cumplimiento ante autoridades como SAT, IMSS e Infonavit, apoyo en
          registros y plataformas como REPSE, ICSOE, SISUB y SIROC. Nuestro
          enfoque se basa en la integración de tecnología e inteligencia
          artificial para ofrecer informes precisos y en tiempo real, ayudando a
          nuestros clientes a tomar decisiones claras y cumplir con sus
          obligaciones en tiempo y forma segura.
        </p>
      </div>
    </section>
  );
}

export default About;
