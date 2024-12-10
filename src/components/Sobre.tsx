import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NexusJRAboutSection() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Sobre <span className="text-blue-500">Nós</span>
          </h1>
        </div>

        {/* Missão e Visão */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Missão */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all hover:scale-105">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa <span className="text-blue-500">Missão</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed ">
                A Nexus JR existe para redefinir o papel da tecnologia nos
                negócios, criando soluções inovadoras que elevem nossos clientes
                ao próximo nível de eficiência e competitividade.
              </p>
            </div>
          </div>

          {/* Visão */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all hover:scale-105">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa <span className="text-blue-500">Visão</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Ser a escolha número um em Moçambique e além, conhecida por
                transformar ideias em realidades digitais de impacto.
              </p>
            </div>
          </div>
        </div>

        {/* Botão para mais informações */}
        <div className="text-center">
          <Link
            href="/sobre"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Saiba Mais
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
