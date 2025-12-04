import Accountant from "../assets/imgs/cesar.jpeg";
function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCEbOCb7m-mPqudkXtZQok8dS-Ox9TpXuIXwwqvalWebAib09S6rXJr9j0TvRJ9axrsKbby1JslsfgYA8XMbFK9mM5WxQqqNbMRQR7G_I9lXobg2zjusogX3pwpGZXRShLtG1_3Xlygvd6dpchr0usqr2rw0NF8i3_u34FNWEhrsRST74ZDa8SST5pcLDXKUEIu1V2GTjHvmZaBqzfM3uq8IXcYtzg0VaHys9u_AYQ-_Qf9_9sY3KiGB2N0bzjPAlvT4VMSSRynZXxm)",
        }}
      ></div>
      <div className="absolute inset-0 bg-[var(--primary-color)] opacity-80"></div>

      <div className="relative z-10 container mx-auto px-6 py-12 lg:px-8 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="text-white text-center lg:text-left">
          <h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl xl:text-7xl mb-6">
            Contabilidad Estratégica para el crecimiento de tu empresa
            constructora.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
            Especialistas en cumplimiento fiscal y financiero para el sector construcción.
            Gestión experta de SIROC, REPSE, IMSS y estrategias fiscales para optimizar tus recursos.
          </p>
          <a
            href="#contacto"
            className="inline-flex h-12 items-center justify-center rounded-md px-6 bg-[var(--secondary-color)] text-base font-bold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Obtenga una consulta
          </a>
        </div>
        <div className="flex flex-col items-center justify-center lg:items-end">
          <figure className="flex flex-col items-center">
            <img
              src={Accountant}
              alt="Cesar A. Urbina Romero - Contador Fiscalista Especializado en Constructoras"
              className="w-full max-w-[320px] h-auto rounded-full object-cover shadow-xl border-4 border-[var(--secondary-color)]"
            />
            <figcaption className="flex flex-col items-center justify-center text-center mt-4 bg-black/30 p-4 rounded-lg backdrop-blur-sm">
              <p className="font-bold text-lg text-white">Cesar A. Urbina Romero</p>
              <p className="text-[var(--secondary-color)] font-medium">Contador Fiscalista</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
