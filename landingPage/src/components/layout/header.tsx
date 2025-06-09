export function Header() {
  const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <header className="w-full bg-white py-4 px-8 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-h4 text-primary">
          Conecta Saúde
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-p3-regular text-neutral-d-grey hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            className="bg-primary text-white text-p3-medium py-2 px-5 rounded-lg hover:bg-primary-shade-2 transition-colors duration-300"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
