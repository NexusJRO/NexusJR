import React from "react";
import Link from "next/link";
import { Code, Database, CloudLightning, Palette } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Desenvolvimento de Software",
      description:
        "Soluções de software personalizadas e de ponta a ponta, adaptadas às necessidades únicas do seu negócio.",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Database,
      title: "Análise de Dados",
      description:
        "Transforme dados brutos em inteligência acionável com análises avançadas e relatórios abrangentes.",
      color: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: CloudLightning,
      title: "Arquitetura em Nuvem",
      description:
        "Estratégias de transformação em nuvem, otimização de infraestrutura e soluções escaláveis para empresas modernas.",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Palette,
      title: "Design UI/UX",
      description:
        "Criação de experiências digitais intuitivas, bonitas e centradas no usuário que encantam e impulsionam o engajamento.",
      color: "bg-pink-50",
      iconColor: "text-pink-600",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Nossos{" "}
            <span className="text-blue-500 animate-text-shimmer">Serviços</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-2xl transition-all duration-300 
              hover:scale-105 
              bg-white 
              shadow-md hover:shadow-xl 
              border border-gray-100"
            >
              <div
                className={`mb-6 w-16 h-16 rounded-full ${service.color} 
                flex items-center justify-center transition-transform duration-300 
                group-hover:-translate-y-2`}
              >
                <service.icon className={`w-8 h-8 ${service.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/servicos"
            className="inline-flex items-center px-8 py-3 
            bg-blue-600 text-white font-semibold rounded-full 
            hover:bg-blue-700 transition-colors duration-300 
            shadow-md hover:shadow-lg"
          >
            Ver Todos os Serviços
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
