import avatarFemale from "../../assets/images/womanShotter.jpg";
import avatarMale from "../../assets/images/manShotter.jpg";

const testimonials = [
  {
    quote:
      "Plataforma incrível! Consegui uma consulta com um cardiologista no mesmo dia, sem sair de casa. Recomendo demais!",
    author: "Mariana S.",
    location: "São Paulo/SP",
    avatar: avatarFemale,
    bgColor: "bg-[#28C888]",
  },
  {
    quote:
      "O sistema é muito fácil de usar e o médico foi super atencioso. A receita digital funcionou perfeitamente na farmácia.",
    author: "João P.",
    location: "Recife/PE",
    avatar: avatarMale,
    bgColor: "bg-[#2194F3]",
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-[#F5F7FA] py-20 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h2 className="text-[36px] font-semibold leading-[44px] text-[#263238]">
              O que nossos pacientes <br className="hidden lg:block" />
              <span className="text-[#28C888]">têm a dizer</span>
            </h2>
            <p className="text-[16px] font-normal leading-[24px] text-[#717171] mt-4 max-w-md mx-auto lg:mx-0">
              A confiança e a satisfação de quem usa nossa plataforma é o nosso
              maior indicador de sucesso. Veja algumas experiências reais.
            </p>
          </div>

          <div className="group flex flex-col items-center gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`
                  ${testimonial.bgColor} text-white
                  p-6 rounded-lg shadow-lg w-full max-w-md
                  cursor-pointer transition-all duration-300 ease-in-out
                  hover:scale-105 hover:shadow-2xl hover:!blur-none
                  group-hover:not-hover:scale-95 group-hover:not-hover:blur-sm
                `}
              >
                <div className="flex flex-col h-full">
                  <p className="flex-grow font-normal text-base italic opacity-90">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center mt-4 pt-4 border-t border-white/20">
                    <img
                      src={testimonial.avatar}
                      alt={`Foto de ${testimonial.author}`}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white/50"
                    />
                    <div>
                      <p className="font-semibold text-base">
                        {testimonial.author}
                      </p>
                      <p className="font-normal text-sm opacity-80">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
