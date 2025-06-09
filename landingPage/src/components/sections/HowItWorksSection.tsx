import { useState } from "react";
import { Search, CalendarDays, Video } from "lucide-react";
import { StepModal } from "../ui/StepModal";

type Step = {
  step: number;
  Icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
};

const steps: Step[] = [
  {
    step: 1,
    Icon: <Search size={48} />,
    title: "Busque",
    description:
      "Encontre o especialista ideal para suas necessidades através de nossa plataforma de busca inteligente. Filtre por especialidade, localização e avaliações de outros pacientes.",
    bgColor: "bg-[#E8F5E9]",
    iconColor: "text-[#1B5E1F]",
  },
  {
    step: 2,
    Icon: <CalendarDays size={48} />,
    title: "Agende",
    description:
      "Pague online com segurança e confirme o melhor horário em sua agenda. Nosso sistema é integrado para evitar conflitos de horário e garantir sua conveniência.",
    bgColor: "bg-blue-100",
    iconColor: "text-[#2194F3]",
  },
  {
    step: 3,
    Icon: <Video size={48} />,
    title: "Conecte-se",
    description:
      "No dia e hora marcados, acesse o link da consulta em seu email ou em nosso painel do paciente. Nossa sala de vídeo é segura, criptografada e fácil de usar em qualquer dispositivo.",
    bgColor: "bg-yellow-100",
    iconColor: "text-[#FBC02D]",
  },
];

export function HowItWorksSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState<Step | null>(null);

  const handleCardClick = (step: Step) => {
    setSelectedStep(step);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const animationClasses = [
    "group-hover:-translate-x-32 group-hover:-rotate-[30deg]",
    "group-hover:translate-x-0 group-hover:-rotate-[10deg]",
    "group-hover:translate-x-32 group-hover:rotate-[10deg]",
  ];

  return (
    <>
      <section id="como-funciona" className="bg-[#F5F7FA] py-20 px-8">
        <div className="container mx-auto grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h2 className="text-[36px] font-semibold leading-[44px] text-[#263238]">
              Simples, Rápido e <br className="hidden lg:block" />
              <span className="text-[#28C888]">ao seu Alcance</span>
            </h2>
            <p className="text-[16px] font-normal leading-[24px] text-[#717171] mt-4 mb-8 max-w-md mx-auto lg:mx-0">
              Nossa plataforma foi projetada para eliminar a burocracia e
              conectar você a cuidados de saúde de qualidade com apenas alguns
              cliques. Siga os passos e veja como é fácil.
            </p>
          </div>

          <div className="group relative mx-auto grid h-[300px] w-[250px] place-items-center">
            {steps.map((step, index) => (
              <div
                key={step.step}
                onClick={() => handleCardClick(step)}
                className={`
                  ${step.bgColor} ${step.iconColor}
                  absolute w-[190px] h-[254px] rounded-2xl shadow-xl cursor-pointer
                  transition-transform duration-500 ease-in-out origin-bottom-center
                  ${animationClasses[index]}
                  hover:!translate-y-[-50px] hover:!rotate-0 hover:scale-110
                `}
                style={{ zIndex: index }}
              >
                <div className="flex flex-col items-center justify-center h-full p-4">
                  <div className="mb-4">{step.Icon}</div>
                  <p className="font-medium text-[18px]">Passo {step.step}</p>
                  <h3 className="font-semibold text-[28px] mt-1">
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StepModal
        isOpen={isModalOpen}
        onClose={closeModal}
        step={selectedStep}
      />
    </>
  );
}
