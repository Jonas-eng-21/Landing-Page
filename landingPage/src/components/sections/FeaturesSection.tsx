import { Video, CalendarDays, ClipboardPenLine } from "lucide-react";

const features = [
  {
    Icon: Video,
    title: "Videoconsultas em HD",
    description:
      "Converse com seu médico com a máxima clareza e segurança, como se estivesse no consultório.",
  },
  {
    Icon: CalendarDays,
    title: "Agendamento Fácil",
    description:
      "Escolha o profissional e o melhor horário em nossa plataforma intuitiva, sem filas ou burocracia.",
  },
  {
    Icon: ClipboardPenLine,
    title: "Prescrições Digitais",
    description:
      "Receba suas receitas médicas, atestados e pedidos de exame diretamente no seu celular com validade nacional.",
  },
];

export function FeaturesSection() {
  return (
    <section id="servicos" className="bg-[#F5F7FA] py-20 px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-[36px] font-semibold leading-[44px] text-[#263238]">
            Cuidado Completo e Digital, Pensado para Você
          </h2>
          <p className="text-[16px] font-normal leading-[24px] text-[#717171] mt-4">
            Nossa plataforma foi desenhada para oferecer uma experiência de
            saúde completa, segura e intuitiva.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg text-center flex flex-col items-center shadow-lg"
            >

              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 bg-[#E8F5E9]">

                <feature.Icon size={32} className="text-[#28C888]" />
              </div>


              <h3 className="text-[20px] font-semibold leading-[28px] text-[#263238] mb-3">
                {feature.title}
              </h3>

              <p className="text-[14px] font-normal leading-[20px] text-[#717171]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
