import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import illustration1 from "../../assets/images/doctorOline.png";
import illustration2 from "../../assets/images/health.png";
import illustration3 from "../../assets/images/online.png";

const slidesData = [
  {
    id: 1,
    headline1: "Consultas online com",
    headline2: "Clínicos Gerais",
    subheadline:
      "Acesse médicos de família e clínicos gerais para um primeiro diagnóstico ou para acompanhamentos de rotina, tudo no conforto da sua casa.",
    image: illustration1,
  },
  {
    id: 2,
    headline1: "Especialistas renomados",
    headline2: "na sua tela",
    subheadline:
      "Tenha acesso a cardiologistas, dermatologistas, psicólogos e muito mais. Uma segunda opinião de especialistas nunca foi tão fácil.",
    image: illustration2,
  },
  {
    id: 3,
    headline1: "Sua saúde mental",
    headline2: "em primeiro lugar",
    subheadline:
      "Converse com psicólogos e terapeutas em um ambiente seguro e confidencial, adaptado à sua rotina e às suas necessidades.",
    image: illustration3,
  },
];

export function HeroSection() {
  return (
    <section className="bg-[#F5F7FA] py-12" id="inicio">
      <div className="container mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col items-center gap-8 py-12 px-8 lg:flex-row">
                <div className="w-full text-center lg:w-1/2 lg:text-left">
                  {/* Título com valores arbitrários para tamanho, peso e espaçamento */}
                  <h1 className="text-[64px] font-semibold leading-[76px] text-[#263238]">
                    {slide.headline1} <br />
                    {/* Cor primária aplicada diretamente */}
                    <span className="text-[#28C888]">{slide.headline2}</span>
                  </h1>

                  {/* Subtítulo com valores arbitrários */}
                  <p className="text-[18px] font-normal leading-[28px] text-[#717171] my-8 max-w-xl mx-auto lg:mx-0">
                    {slide.subheadline}
                  </p>

                  {/* Botão com cores e fontes diretas */}
                  <button className="bg-[#28C888] text-white text-[16px] font-medium leading-[24px] py-3 px-8 rounded-md hover:bg-[#388E3B] transition-colors duration-300">
                    Agendar Agora
                  </button>
                </div>

                <div className="w-full lg:w-1/2">
                  <img
                    src={slide.image}
                    alt={slide.headline1}
                    className="w-full h-auto max-w-lg mx-auto"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
