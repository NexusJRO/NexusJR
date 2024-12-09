"use client";

import React, { useState, useEffect } from "react";
import {
  Code,
  Database,
  CloudLightning,
  Palette,
  Smartphone,
  Globe,
  BarChart2,
  Shield,
} from "lucide-react";

import ContactModal from "@/components/ContactModal";

export default function FullServicesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const services = [
    {
      icon: Code,
      title: "Desenvolvimento de Software",
      description:
        "Soluções de software personalizadas e de ponta a ponta, adaptadas às necessidades únicas do seu negócio. Utilizamos metodologias ágeis e tecnologias de ponta para criar sistemas robustos e escaláveis.",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
      details: [
        "Desenvolvimento de aplicações web e mobile",
        "Sistemas empresariais personalizados",
        "Arquitetura de software moderna",
        "Integração de sistemas legados",
      ],
    },
    {
      icon: Database,
      title: "Análise de Dados",
      description:
        "Transforme dados brutos em inteligência acionável com análises avançadas e relatórios abrangentes. Ajudamos você a tomar decisões estratégicas baseadas em insights precisos.",
      color: "bg-green-50",
      iconColor: "text-green-600",
      details: [
        "Mineração e processamento de dados",
        "Visualização de dados interativa",
        "Modelagem preditiva",
        "Relatórios executivos personalizados",
      ],
    },
    {
      icon: CloudLightning,
      title: "Arquitetura em Nuvem",
      description:
        "Estratégias de transformação em nuvem, otimização de infraestrutura e soluções escaláveis para empresas modernas. Garantimos segurança, performance e custo-benefício.",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
      details: [
        "Migração para cloud",
        "Arquitetura de microserviços",
        "Soluções híbridas e multi-cloud",
        "Otimização de custos em nuvem",
      ],
    },
    {
      icon: Palette,
      title: "Design UI/UX",
      description:
        "Criação de experiências digitais intuitivas, bonitas e centradas no usuário que encantam e impulsionam o engajamento. Design que combina estética e funcionalidade.",
      color: "bg-pink-50",
      iconColor: "text-pink-600",
      details: [
        "Prototipagem e wireframing",
        "Design de interface responsivo",
        "Teste de usabilidade",
        "Design thinking",
      ],
    },
    {
      icon: Smartphone,
      title: "Desenvolvimento Mobile",
      description:
        "Aplicativos móveis de alto desempenho para iOS, Android e ambientes híbridos. Soluções móveis que elevam a experiência do usuário e impulsionam o engajamento digital.",
      color: "bg-indigo-50",
      iconColor: "text-indigo-600",
      details: [
        "Desenvolvimento nativo",
        "Aplicações híbridas",
        "Design responsivo",
        "Otimização de performance",
      ],
    },
    {
      icon: Globe,
      title: "Desenvolvimento Web",
      description:
        "Websites e aplicações web responsivas com alto desempenho, proporcionando experiências perfeitas em todos os dispositivos e navegadores.",
      color: "bg-teal-50",
      iconColor: "text-teal-600",
      details: [
        "Desenvolvimento front-end",
        "Desenvolvimento back-end",
        "Sites institucionais",
        "E-commerce",
      ],
    },
    {
      icon: BarChart2,
      title: "Inteligência de Negócios",
      description:
        "Dashboards avançados, análises preditivas e insights estratégicos para impulsionar decisões baseadas em dados em toda a organização.",
      color: "bg-orange-50",
      iconColor: "text-orange-600",
      details: [
        "Dashboards personalizados",
        "Relatórios executivos",
        "Análise de tendências",
        "Modelagem de cenários",
      ],
    },
    {
      icon: Shield,
      title: "Soluções de Cibersegurança",
      description:
        "Avaliações de segurança abrangentes, testes de penetração e estratégias robustas de proteção para salvaguardar seus ativos digitais contra ameaças modernas.",
      color: "bg-red-50",
      iconColor: "text-red-600",
      details: [
        "Auditoria de segurança",
        "Testes de penetração",
        "Proteção de dados",
        "Consultoria em segurança",
      ],
    },
  ];

  useEffect(() => {
    // Simula um delay de carregamento de 1 segundo
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Limpa o timer se o componente for desmontado
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="animate-pulse">
          <div className="h-12 w-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-6 w-96 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Nossos Serviços Completos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções tecnológicas abrangentes que transformam desafios em
            oportunidades de crescimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden 
          transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              <div className="p-6">
                <div
                  className={`mb-6 w-16 h-16 rounded-full ${service.color} 
              flex items-center justify-center`}
                >
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Principais Entregas
                  </h3>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center text-gray-600"
                      >
                        <svg
                          className="w-4 h-4 mr-2 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <ContactModal />
        </div>
      </div>
    </section>
  );
}
