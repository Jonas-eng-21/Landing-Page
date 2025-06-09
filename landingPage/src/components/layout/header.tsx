export function Header() {
  const navLinks = ["Início", "Serviços", "Como Funciona", "Contato"];

  return (
    <header className="w-full bg-white py-4 px-8 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        
        <div className="text-h4 text-primary">
          Conecta Saúde
        </div>

        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-p3-regular text-neutral-d-grey hover:text-primary transition-colors duration-300">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button className="hidden md:block bg-primary text-white text-p3-medium py-2 px-5 rounded-lg hover:bg-primary-shade-2 transition-colors duration-300">
          Agendar Consulta
        </button>

      </div>
    </header>
  );
}