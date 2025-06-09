import heroImage from '../../assets/images/doctorOline.png';
export function HeroSection() {
  return (
    <section className="container mx-auto py-20 px-8">
      <div className="flex flex-col items-center lg:flex-row">

        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h1 className="text-h1 text-secondary">
            Sua Saúde a um Clique de Distância.
          </h1>
          <p className="text-p1-regular text-neutral-grey my-8 max-w-xl mx-auto lg:mx-0">
            Consultas online com especialistas no conforto da sua casa. Rápido, seguro e humano.
          </p>
          <button className="bg-primary text-white text-p2-medium py-3 px-8 rounded-lg hover:bg-primary-shade-2 transition-colors duration-300">
            Buscar Especialistas
          </button>
          <p className="text-p4-regular text-neutral-l-grey mt-4">
            +20 especialidades disponíveis 24/7
          </p>
        </div>
        <div className="w-full mt-12 lg:w-1/2 lg:mt-0">
          <img 
            src={heroImage} 
            alt="Médica realizando uma consulta por videochamada" 
            className="w-full h-auto rounded-lg"
          />
        </div>
        
      </div>
    </section>
  );
}