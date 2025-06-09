import { Search, CalendarDays, Video } from "lucide-react";

const cardData = [
  {
    Icon: Search,
    title: "Busque seu Especialista",
    description: "Navegue e encontre.",
    bgColor: "bg-[#28C888]", 
  },
  {
    Icon: CalendarDays,
    title: "Agende a Consulta",
    description: "Escolha o melhor horário.",
    bgColor: "bg-[#2194F3]", 
  },
  {
    Icon: Video,
    title: "Inicie a Videoconferência",
    description: "Conecte-se de onde estiver.",
    bgColor: "bg-[#263238]",
  },
];

export function InteractiveCards() {
  return (
    <div className="group flex flex-col gap-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`
            ${card.bgColor} 
            h-[100px] w-full max-w-sm rounded-lg text-white
            flex flex-col items-center justify-center
            cursor-pointer shadow-lg
            transition-all duration-300 ease-in-out
            hover:scale-110 hover:shadow-2xl hover:!blur-none
            group-hover:not-hover:scale-95 group-hover:not-hover:blur-sm
          `}
        >
          <div className="flex items-center gap-3">
            <card.Icon size={24} />
            <div>
              <p className="font-semibold text-base">{card.title}</p>
              <p className="font-normal text-sm opacity-80">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
