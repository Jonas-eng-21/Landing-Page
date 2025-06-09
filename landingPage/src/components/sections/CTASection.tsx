import { TransactionCard } from "../ui/TransactionCard";

export function CTASection() {
  return (
    <section className="bg-[#F5F7FA] py-20 px-8">
      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="max-w-2xl mb-12">
          <h2 className="text-[36px] font-semibold leading-[44px] text-[#263238]">
            Pronto para cuidar da sua <br />
            <span className="text-[#28C888]">saúde de verdade?</span>
          </h2>
          <p className="text-[16px] font-normal leading-[24px] text-[#717171] mt-4">
            Agendar sua primeira consulta é o primeiro passo para uma vida mais
            saudável. Nosso processo de agendamento e pagamento é simples,
            rápido e totalmente seguro.
          </p>
        </div>
        <div>
          <TransactionCard />
        </div>
      </div>
    </section>
  );
}
