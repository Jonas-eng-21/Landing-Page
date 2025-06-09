export function CTASection() {
  return (
    <section className="bg-primary">
      <div className="container mx-auto py-20 px-8 text-center">
        <h2 className="text-h2 text-white max-w-3xl mx-auto">
          Pronto para revolucionar o cuidado com a sua saúde?
        </h2>

        <button
          className="
            mt-8 bg-white text-primary font-semibold 
            text-p1-medium py-3 px-10 rounded-lg 
            shadow-lg hover:bg-opacity-90 transform hover:-translate-y-1
            transition-all duration-300
          "
        >
          Agende sua Primeira Consulta Hoje
        </button>
      </div>
    </section>
  );
}
