import logoImg from "../../assets/images/logo.png";

export function Header() {
  const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <header className="w-full bg-[#F5F7FA] py-5 px-8 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" aria-label="Página inicial da Conecta Saúde">
          <img src={logoImg} alt="Logo Conecta Saúde" className="h-12 w-auto" />
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  // A COR DO TEXTO FOI ALTERADA AQUI
                  className="text-p3-regular text-[#66BB69] hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          {/* A COR DO TEXTO DE LOGIN TAMBÉM FOI ALTERADA */}
          <a href="#" className="text-p3-medium text-[#66BB69] hover:underline">
            Login
          </a>
          <a
            href="#contato"
            className="bg-primary text-p3-medium  text-[#103E13] py-2 px-5 rounded-md hover:bg-primary-shade-2 transition-colors duration-300"
          >
            Contato
          </a>
        </div>
      </div>
    </header>
  );
}
