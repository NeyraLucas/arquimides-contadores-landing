import Accountant from "../assets/accountant.png";
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
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
          <h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl xl:text-7xl">
            Contabilidad Estrategica para el crecimiento de tu empresa
            constructora.
          </h1>
          <a
            href="#contact"
            className="mt-10 inline-flex h-12 items-center justify-center rounded-md px-6 bg-[var(--secondary-color)] text-base font-bold hover:bg-opacity-90"
          >
            Obtenga una consulta
          </a>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src={Accountant}
            alt="Accountant"
            className="w-full max-w-[320px] h-auto rounded-full object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
