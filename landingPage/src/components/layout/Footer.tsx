import { Send } from "lucide-react";
import logoImg from "../../assets/images/logo.png";
import { SocialLinks } from "../ui/SocialLinks";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: "Sobre nós", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contato", href: "#contato" },
    { label: "Depoimentos", href: "#depoimentos" },
  ];

  const supportLinks = [
    { label: "Central de Ajuda", href: "#" },
    { label: "Termos de Serviço", href: "#" },
    { label: "Legal", href: "#" },
    { label: "Política de Privacidade", href: "#" },
  ];

  return (
    <footer id="contato" className="bg-[#263238] text-[#F5F7FA]">
      <div className="container mx-auto py-12 px-8">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-2 md:text-left lg:grid-cols-4">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <a href="#" aria-label="Página inicial">
              <img
                src={logoImg}
                alt="Logo Conecta Saúde"
                className="h-10 w-auto"
              />
            </a>
            <p className="text-[14px] font-normal text-[#F5F7FA]">
              Copyright &copy; {currentYear} Conecta Saúde. <br />
              Todos os direitos reservados.
            </p>
            <div className="pt-2">
              <SocialLinks />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-[20px] text-white mb-6">
              Empresa
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[16px] font-normal hover:text-[#28C888] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[20px] text-white mb-6">
              Suporte
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[16px] font-normal hover:text-[#28C888] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[20px] text-white mb-6">
              Fique por dentro
            </h4>
            <div className="relative">
              <input
                type="email"
                placeholder="Seu endereço de email"
                className="bg-white/10 w-full rounded-md py-3 px-4 pr-12 text-white placeholder:text-[#B9B9BE] focus:outline-none focus:ring-2 focus:ring-[#28C888]"
              />
              <button
                type="submit"
                aria-label="Inscrever-se"
                className="absolute top-0 right-0 h-full px-4 text-[#F5F7FA] hover:text-[#28C888] transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
