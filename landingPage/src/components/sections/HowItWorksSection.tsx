import { useState} from "react";
import { Info } from "lucide-react";
import { Search, CalendarDays, Video } from "lucide-react";

type Step = {
  step: number;
  Icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
};

const steps = [
  {
    step: 1,
    Icon: <Search size={48} />,
    title: "Busque",
    description:
      "Encontre o especialista ideal para suas necessidades através de nossa plataforma de busca inteligente. Filtre por especialidade, localização e avaliações de outros pacientes.",
    bgColor: "bg-primary-tint-5",
    iconColor: "text-primary-shade-4",
  },
  {
    step: 2,
    Icon: <CalendarDays size={48} />,
    title: "Agende",
    description:
      "Pague online com segurança e confirme o melhor horário em sua agenda. Nosso sistema é integrado para evitar conflitos de horário e garantir sua conveniência.",
    bgColor: "bg-blue-100",
    iconColor: "text-info",
  },
  {
    step: 3,
    Icon: <Video size={48} />,
    title: "Conecte-se",
    description:
      "No dia e hora marcados, acesse o link da consulta em seu email ou em nosso painel do paciente. Nossa sala de vídeo é segura, criptografada e fácil de usar em qualquer dispositivo.",
    bgColor: "bg-yellow-100",
    iconColor: "text-action-warning",
  },
];

interface StepModalProps {
  isOpen: boolean;
  onClose: () => void;
  step: Step | null;
}

function StepModal({ isOpen, onClose, step }: StepModalProps) {
  if (!isOpen || !step) return null;

  return (
    <div
      className="relative z-50"
      aria-labelledby="dialog-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div
                  className={`mx-auto flex size-12 shrink-0 items-center justify-center rounded-full ${step.bgColor} bg-opacity-20 sm:mx-0 sm:size-10`}
                >
                  <Info
                    className={`size-6 ${step.iconColor}`}
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className={`text-h4 ${step.iconColor}`} id="dialog-title">
                    Passo {step.step}: {step.title}
                  </h3>
                  <div className="mt-2">
                    <p className="text-p2-regular text-neutral-grey">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={onClose}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
      <section id="como-funciona" className="bg-white py-20 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-h2 text-secondary mb-24">Simples como 1, 2, 3</h2>

          <div className="group relative mx-auto grid h-[300px] w-[190px] place-items-center">
            {steps.map((step, index) => (
              <div
                key={step.step}
                onClick={() => handleCardClick(step)}
                className={`
                ${step.bgColor} ${step.iconColor} /* APLICA AS NOVAS CORES AQUI */
                absolute w-[190px] h-[254px] rounded-2xl shadow-xl cursor-pointer
                transition-all duration-500 ease-in-out
                origin-bottom-center
                ${animationClasses[index]}
                hover:!translate-y-[-50px] hover:!rotate-0 hover:scale-110
              `}
                style={{ zIndex: index }}
              >
                <div className="flex flex-col items-center justify-center h-full p-4">
                  <div className="mb-4">{step.Icon}</div>
                  <p className="text-p1-medium">Passo {step.step}</p>
                  <h3 className="text-h3 mt-1">{step.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <StepModal
          isOpen={isModalOpen}
          onClose={closeModal}
          step={selectedStep}
        />
      </section>
    </>
  );
}
