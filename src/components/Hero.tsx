function Hero() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCEbOCb7m-mPqudkXtZQok8dS-Ox9TpXuIXwwqvalWebAib09S6rXJr9j0TvRJ9axrsKbby1JslsfgYA8XMbFK9mM5WxQqqNbMRQR7G_I9lXobg2zjusogX3pwpGZXRShLtG1_3Xlygvd6dpchr0usqr2rw0NF8i3_u34FNWEhrsRST74ZDa8SST5pcLDXKUEIu1V2GTjHvmZaBqzfM3uq8IXcYtzg0VaHys9u_AYQ-_Qf9_9sY3KiGB2N0bzjPAlvT4VMSSRynZXxm)",
        }}
      ></div>
      <div className="absolute inset-0 bg-[var(--primary-color)] opacity-80"></div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Expert Accounting for Construction Success
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Navigate complex financial landscapes with ConstructWise. We provide
            specialized accounting services tailored for construction projects,
            ensuring accuracy, compliance, and profitability.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex h-12 items-center justify-center rounded-md px-6 bg-[var(--secondary-color)] text-base font-bold hover:bg-opacity-90"
          >
            Get a Free Consultation
          </a>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWXrsTH0EhhX0myjRcp1UDmiU3-GXWxw0S5kEq_dUmLJK6v_tq9l7exujaADTOgVWsPxDYoBvVYRNGdP-6V7IEjwNa2vChYfrRGYYz5Kx5tJFNj6SYpv2oC4Wmn2w8WgLhfRIxtWRpalXBCbslx64NFwGHQ2lofAnplvLG4xGYvYZWtzoT-CtKXLwOuErQC0xTNpTCyUw0exCi-Rp8dKCYAswMiKR7JoHbjiUhFZJN_tFqsCx1sa_LymXidzL22wEK085OjK9xn0oP"
            alt="Accountant"
            className="h-80 w-80 rounded-full object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
