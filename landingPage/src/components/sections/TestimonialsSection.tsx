import { Quote } from "lucide-react"; 

import avatarFemale from "../../assets/images/womanShotter.jpg";
import avatarMale from "../../assets/images/manShotter.jpg";

const testimonials = [
  {
    quote:
      "Plataforma incrível! Consegui uma consulta com um cardiologista no mesmo dia, sem sair de casa. Recomendo demais!",
    author: "Mariana S.",
    location: "São Paulo/SP",
    avatar: avatarFemale,
  },
  {
    quote:
      "O sistema é muito fácil de usar e o médico foi super atencioso. A receita digital funcionou perfeitamente na farmácia.",
    author: "João P.",
    location: "Recife/PE",
    avatar: avatarMale,
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-neutral-silver py-20 px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-secondary">
            O que nossos pacientes dizem
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col"
            >
              <div className="flex-grow">
                <Quote className="text-primary-tint-3" size={40} />
                <p className="text-p2-regular text-neutral-grey italic mt-4">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center mt-6 pt-6 border-t border-neutral-silver">
                <img
                  src={testimonial.avatar}
                  alt={`Foto de ${testimonial.author}`}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="text-p2-medium text-secondary">
                    {testimonial.author}
                  </p>
                  <p className="text-p4-regular text-neutral-l-grey">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
