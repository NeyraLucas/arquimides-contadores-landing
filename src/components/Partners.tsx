import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Building2, Briefcase, Landmark, HardHat, Hammer, Ruler, Truck, Wrench } from 'lucide-react';

const partners = [
    { name: "Constructora Alpha", icon: Building2 },
    { name: "Inmobiliaria Beta", icon: Landmark },
    { name: "Grupo Gamma", icon: HardHat },
    { name: "Desarrollos Delta", icon: Briefcase },
    { name: "Ingeniería Epsilon", icon: Ruler },
    { name: "Obras Zeta", icon: Hammer },
    { name: "Logística Eta", icon: Truck },
    { name: "Servicios Theta", icon: Wrench },
];

function Partners() {
    return (
        // <section className="py-12 bg-gray-900 border-y border-gray-800">
        <section className="py-12 bg-gray-900">
            <div className="container mx-auto px-6">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[var(--contrast-color)] mb-12">
                    Empresas que confían en nosotros
                </h3>

                {/* Gradient masks for fade effect */}
                <div className="relative p-4">
                    <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>

                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={2}
                        loop={true}
                        speed={3000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                        }}
                        className="partners-swiper"
                    >
                        {partners.map((partner, index) => (
                            <SwiperSlide key={index} className="!flex items-center justify-center py-4">
                                <div className="flex flex-col items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 group cursor-default">
                                    <div className="p-4 rounded-full bg-gray-800/50 group-hover:bg-gray-800 transition-colors mb-3">
                                        <partner.icon size={40} className="text-[var(--secondary-color)]" />
                                    </div>
                                    <span className="font-medium text-gray-300 text-sm">{partner.name}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Partners;
