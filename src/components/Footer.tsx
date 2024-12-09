"use client";

import { Github, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const NexusJrFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-cover bg-center text-white">
      {/* Background Image */}
      <Image
        src="/footer/map.svg"
        alt="Fundo tecnológico"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0 opacity-50"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="container mx-auto px-6 py-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sobre */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white mb-2 border-b border-blue-500 pb-1">
              Nexus Jr
            </h3>
            <p className="text-gray-200 text-sm leading-tight">
              Transformando ideias em soluções tecnológicas inovadoras.
              Impulsionando o sucesso de startups através de desenvolvimento de
              software.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-white mb-2 border-b border-blue-500 pb-1">
              Links Rápidos
            </h4>
            <ul className="space-y-1">
              {[
                { label: "Início", href: "/" },
                { label: "Serviços", href: "/servicos" },
                { label: "Projetos", href: "/projects" },
                { label: "Contato", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-200 text-sm hover:text-blue-300 transition-all duration-300 transform hover:translate-x-1"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-white mb-2 border-b border-indigo-500 pb-1">
              Contato
            </h4>
            <ul className="space-y-2">
              {[
                {
                  icon: Mail,
                  text: "contato@nexusjr.com.mz",
                  href: "mailto:nexus.jrtech@gmail.com",
                },
                {
                  icon: Phone,
                  text: "(258) 83 339 0642",
                  href: "tel:+258833390642",
                },
                {
                  icon: MapPin,
                  text: "Tete - Moçambique",
                  href: "#",
                },
              ].map((item) => (
                <li key={item.text} className="flex items-center space-x-2">
                  <item.icon size={18} className="text-blue-500" />
                  <Link
                    href={item.href}
                    className="text-gray-200 text-sm hover:text-blue-300 transition-colors duration-300"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-white mb-2 border-b border-indigo-500 pb-1">
              Redes Sociais
            </h4>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/nexusjr" },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/company/nexusjr",
                },
                { icon: Instagram, href: "https://instagram.com/nexusjr" },
              ].map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indigo-300 transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon size={22} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="mt-6 pt-4 border-t border-gray-700 text-center">
          <p className="text-xs text-gray-300 tracking-wider">
            © {currentYear} Nexus Jr. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default NexusJrFooter;
