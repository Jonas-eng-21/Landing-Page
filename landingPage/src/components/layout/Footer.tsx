import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-secondary text-neutral-l-grey">
      <div className="container mx-auto py-16 px-8">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-2 md:text-left lg:grid-cols-4">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-h4 text-white">Conecta Saúde</h3>
            <p className="text-p3-regular mt-4 max-w-xs">
              Sua saúde a um clique de distância. Cuidado médico acessível e de
              qualidade.
            </p>
          </div>

          <div>
            <h4 className="text-p1-medium text-white mb-4">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-p1-medium text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start">
                <Mail size={18} className="mr-2 text-primary" />
                <span>contato@conectasaude.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Phone size={18} className="mr-2 text-primary" />
                <span>+55 (11) 99999-9999</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-p1-medium text-white mb-4">Redes Sociais</h4>
            <div className="flex justify-center space-x-4 md:justify-start">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-primary transition-colors"
              >
                <Instagram />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-primary transition-colors"
              >
                <Facebook />
              </a>
              <a
                href="#"
                aria-label="Linkedin"
                className="hover:text-primary transition-colors"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-d-grey text-center">
          <p className="text-p4-regular text-neutral-grey">
            &copy; {currentYear} Conecta Saúde. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
