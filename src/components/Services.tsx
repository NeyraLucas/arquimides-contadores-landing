const services = [
  {
    title: "Contabilidad por Centro de Costos",
    desc: "La contabilidad por centro de costos te permite saber exactamente cuánto gana y cuánto pierde cada una de tus obras. En Arquimedes Contadores diseñamos un sistema contable estructurado por proyecto, con reportes claros que desglosan materiales, mano de obra, gastos generales y márgenes reales. Esta visibilidad te permite optimizar recursos, tomar mejores decisiones financieras y detectar fugas de dinero antes de que afecten tu rentabilidad. Usamos herramientas inteligentes que agilizan los procesos, garantizan precisión en la información y generan informes listos para presentar a socios, bancos o inversionistas.",
    icon: "analytics",
  },
  {
    title: "Tax Compliance",
    desc: "Ensure your business meets all legal and financial obligations with our expert guidance.",
    icon: "verified",
  },
  {
    title: "Profitability Analysis",
    desc: "In-depth analysis to maximize profits and minimize risks in your construction ventures.",
    icon: "trending_up",
  },
]

function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900 px-6">
      <h2 className="text-3xl font-bold text-center text-[var(--secondary-color)] mb-12">
        Nuestros servicios
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((s) => (
          <div
            key={s.title}
            className="p-6 border border-gray-700 rounded-lg shadow hover:shadow-lg transition"
          >
            <span className="material-symbols-outlined text-4xl text-[var(--secondary-color)] mb-4">
              {s.icon}
            </span>
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-gray-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
