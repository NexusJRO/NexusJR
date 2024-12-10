import React from "react";
import Link from "next/link";
import {
  Network,
  Target,
  Lightbulb,
  Shield,
  Users,
  ArrowLeft,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NexusJRValues = [
  {
    icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
    title: "Excelência em Ação",
    description:
      "Nossa paixão pela qualidade guia tudo o que fazemos. 'Tech Excellence Always' não é apenas um lema, é nosso compromisso absoluto com a performance de ponta e resultados excepcionais.",
    color: "blue",
  },
  {
    icon: <Network className="w-12 h-12 text-green-600" />,
    title: "Inovação Transformadora",
    description:
      "Buscamos continuamente novas maneiras de agregar valor, usando tecnologia como força propulsora para transformar desafios complexos em oportunidades revolucionárias de negócio.",
    color: "green",
  },
  {
    icon: <Target className="w-12 h-12 text-purple-600" />,
    title: "Empatia com o Cliente",
    description:
      "Nos colocamos genuinamente no lugar do cliente, mergulhando profundamente para entender suas reais necessidades e entregar soluções tecnológicas que verdadeiramente fazem a diferença.",
    color: "purple",
  },
  {
    icon: <Shield className="w-12 h-12 text-yellow-600" />,
    title: "Ética e Transparência",
    description:
      "Integridade não é um conceito, é nossa prática diária. Construímos relacionamentos baseados em confiança absoluta, clareza e respeito mútuo em cada interação e projeto.",
    color: "yellow",
  },
  {
    icon: <Users className="w-12 h-12 text-red-600" />,
    title: "Espírito de Equipe",
    description:
      "Acreditamos profundamente no poder das parcerias colaborativas e na troca contínua de conhecimento como caminho para alcançar resultados verdadeiramente extraordinários.",
    color: "red",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
            Nexus <span className="text-blue-600">JR</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            Tech Excellence Always
          </p>
          <div className="border-b-4 border-blue-600 w-32 mx-auto"></div>
        </div>

        {/* Tabs para Missão, Visão e Valores */}
        <Tabs defaultValue="mission" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="mission">Nossa Missão</TabsTrigger>
            <TabsTrigger value="vision">Nossa Visão</TabsTrigger>
            <TabsTrigger value="values">Nossos Valores</TabsTrigger>
          </TabsList>

          {/* Missão */}
          <TabsContent value="mission">
            <div className="bg-white shadow-lg rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa <span className="text-blue-500">Missão</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                A Nexus JR existe para redefinir o papel da tecnologia nos
                negócios, criando soluções inovadoras que elevem nossos clientes
                ao próximo nível de eficiência e competitividade. Transformamos
                desafios tecnológicos em oportunidades estratégicas de
                crescimento.
              </p>
            </div>
          </TabsContent>

          {/* Visão */}
          <TabsContent value="vision">
            <div className="bg-white shadow-lg rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa <span className="text-blue-500">Visão</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Ser a escolha número um em Moçambique e além, conhecida por
                transformar ideias em realidades digitais de impacto. Nosso
                objetivo é impulsionar o crescimento e a modernização através de
                soluções tecnológicas verdadeiramente transformadoras.
              </p>
            </div>
          </TabsContent>

          {/* Valores */}
          <TabsContent value="values">
            <div className="bg-white shadow-lg rounded-xl p-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                Nossos Valores Fundamentais
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {NexusJRValues.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-2xl group"
                  >
                    <div className="flex flex-col items-center mb-6">
                      {value.icon}
                      <h3
                        className={`mt-4 text-xl font-bold text-${value.color}-600 group-hover:text-${value.color}-700 transition-colors`}
                      >
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 text-center">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Navegação de Volta */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Voltar à Página Inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
