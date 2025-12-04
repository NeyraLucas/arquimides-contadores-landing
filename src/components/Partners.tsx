import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import aspelCoi from "../assets/imgs/partners/aspel-coi.png";
import aspelNoi from "../assets/imgs/partners/aspel-noi.png";
import ezaudita from "../assets/imgs/partners/ezaudita.png";
import sigoAstepl from "../assets/imgs/partners/sigo-astepl.png";
import aspelBanco from "../assets/imgs/partners/aspel-banco.png";
import aspelCaja from "../assets/imgs/partners/aspel-caja.png";
import aspelProd from "../assets/imgs/partners/aspel-prod.png";
import chatgpt from "../assets/imgs/partners/chatgpt-logo.png";

const partners = [
    { name: "Aspel COI", img: aspelCoi },
    { name: "Aspel NOI", img: aspelNoi },
    { name: "ezaudita", img: ezaudita },
    { name: "Siigo Aspel", img: sigoAstepl },
    // Duplicamos para efecto infinito visual si son pocos
    { name: "Aspel COI", img: aspelCoi },
    { name: "Aspel NOI", img: aspelNoi },
    { name: "ezaudita", img: ezaudita },
    { name: "Siigo Aspel", img: sigoAstepl },
    { name: "Aspel Banco", img: aspelBanco },
    { name: "Aspel Caja", img: aspelCaja },
    { name: "Aspel Prod", img: aspelProd },
    { name: "ChatGPT", img: chatgpt },
];

function Partners() {
    return (
        <section id='partners' className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[var(--secondary-color)] mb-12">
                    Empresas que confían en nosotros
                </h3>

                {/* Gradient masks for fade effect */}
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent pointer-events-none transition-colors duration-300"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent pointer-events-none transition-colors duration-300"></div>

                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={40}
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
                        className="partners-swiper py-4"
                    >
                        {partners.map((partner, index) => (
                            <SwiperSlide key={`${partner.name}-${index}`} className="!flex items-center justify-center">
                                <div className="h-20 w-40 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer">
                                    <img
                                        src={partner.img}
                                        alt={partner.name}
                                        className="max-h-full max-w-full object-contain"
                                    />
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
