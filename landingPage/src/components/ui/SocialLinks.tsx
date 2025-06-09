import { Github, Linkedin, FileText } from "lucide-react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jonas-soares-824a8a361/",
    Icon: Linkedin,
    hoverBg: "before:bg-[#0A66C2]",
    tooltipBg: "bg-[#0A66C2]",
  },
  {
    label: "GitHub",
    href: "https://github.com/Jonas-eng-21",
    Icon: Github,
    hoverBg: "before:bg-[#181717]",
    tooltipBg: "bg-[#181717]",
  },
  {
    label: "Currículo",
    href: "https://www.canva.com/design/DAGpO-LKCUk/uE1cfEO6mSSV23reayA0mw/edit?utm_content=DAGpO-LKCUk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    Icon: FileText,
    hoverBg: "before:bg-[#28C888]",
    tooltipBg: "bg-[#28C888]",
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-6">
      {socialLinks.map((link) => (
        <div key={link.label} className="group relative">
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={`
              relative z-10 inline-block h-14 w-14
              cursor-pointer rounded-full border-2 border-white/20 bg-white
              text-center text-[#263238] transition-colors duration-300
              shadow-md
              /* Efeito de preenchimento */
              before:absolute before:bottom-0 before:left-0 before:h-0 before:w-full
              before:rounded-full before:transition-[height] before:duration-300 before:ease-in-out
              before:content-['']
              ${link.hoverBg}
              /* Efeito de hover no ícone */
              hover:text-white hover:shadow-lg hover:before:h-full
            `}
          >
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <link.Icon size={28} />
            </span>
          </a>

          <p
            className={`
              absolute -top-12 left-1/2 -translate-x-1/2 scale-0
              rounded-md px-2 py-1 text-sm font-semibold text-white
              transition-transform duration-300 ease-in-out
              group-hover:scale-100
              ${link.tooltipBg}
            `}
          >
            {link.label}
          </p>
        </div>
      ))}
    </div>
  );
}
