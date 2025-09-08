const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, BuildRight Inc.",
    text: "Construct transformed the way we manage finances in our projects. Their expertise is unmatched.",
  },
  {
    name: "Michael Lee",
    role: "Project Manager, Skyline Builders",
    text: "Thanks to Construct, we achieved better profitability and compliance across all our operations.",
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[var(--secondary-color)] mb-12">
        Testimonials
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="p-6 border border-gray-700 rounded-lg shadow bg-gray-800"
          >
            <p className="text-gray-300 mb-4">“{t.text}”</p>
            <div className="font-bold">{t.name}</div>
            <div className="text-sm text-gray-400">{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
