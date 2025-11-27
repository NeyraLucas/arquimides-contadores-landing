const testimonials = [
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Merkalum',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Anim sit consequat culpa commodo eu do nisi commodo ut aute aliqua. Laborum esse duis tempor consectetur officia mollit fugiat. Exercitation qui elit minim minim quis fugiat ex.',
    author: {
      name: 'Industrias gráficas',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque.',
    author: {
      name: 'Loma capital',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Excepteur consectetur deserunt id incididunt veniam mollit officia sint qui aute duis sit cillum. Reprehenderit fugiat amet aliqua in commodo minim sunt laborum.',
    author: {
      name: 'Wtc',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Distinctio facere aliquam est qui atque sint molestias ad. Fuga consequuntur asperiores voluptatum ipsum.',
    author: {
      name: 'Fine floors',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[var(--secondary-color)] mb-12">
        Lo Que Dicen Nuestros Clientes
      </h2>
      <h3 className="text-lg text-center text-gray-200 mb-12">Descubre cómo hemos ayudado a empresas como la tuya a alcanzar sus metas</h3>
      <div className="grid gap-10 sm:grid-cols-2 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => {
          const isLastAndOdd = index === testimonials.length - 1 && testimonials.length % 2 !== 0
          return (
            <div
              key={testimonial.author.name}
              className={`pt-8 sm:inline-block sm:px-4 ${isLastAndOdd ? 'sm:col-span-2 sm:w-[calc(50%-1.25rem)] sm:justify-self-center' : 'sm:w-full'
                }`}
            >
              <figure className="rounded-2xl bg-white/2.5 p-8 text-sm/6">
                <blockquote className="text-gray-100">
                  <p>{`“${testimonial.body}”`}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img alt="" src={testimonial.author.imageUrl} className="size-10 rounded-full bg-gray-800" />
                  <div>
                    <div className="font-semibold text-white">{testimonial.author.name}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Testimonials
