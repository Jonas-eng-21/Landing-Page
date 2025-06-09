import { Video, CalendarDays, ClipboardPenLine } from "lucide-react";

const features = [
  {
    icon: <Video size={48} className="text-primary" />,
    title: "Videoconsultas em HD",
    description:
      "Converse com seu médico com a máxima clareza e segurança, como se estivesse no consultório.",
  },
  {
    icon: <CalendarDays size={48} className="text-primary" />,
    title: "Agendamento Fácil",
    description:
      "Escolha o profissional e o melhor horário em nossa plataforma intuitiva, sem filas ou burocracia.",
  },
  {
    icon: <ClipboardPenLine size={48} className="text-primary" />,
    title: "Prescrições Digitais",
    description:
      "Receba suas receitas médicas, atestados e pedidos de exame diretamente no seu celular com validade nacional.",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-secondary">
            Cuidado Completo e Digital, Pensado para Você
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-silver p-8 rounded-lg text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-h4 text-secondary mb-3">{feature.title}</h3>
              <p className="text-p2-regular text-neutral-grey">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
