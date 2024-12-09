"use client";

import {
  LucideIcon,
  CheckCircle,
  Users,
  Briefcase,
  TrendingUp,
  Globe,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const useCounterAnimation = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = counterRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setCount(0);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / 50));
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return { count, counterRef };
};

interface CounterItemProps {
  icon: LucideIcon;
  end: number;
  label: string;
  color: string;
}

const CounterItem: React.FC<CounterItemProps> = ({
  icon: Icon,
  end,
  label,
  color,
}) => {
  const { count, counterRef } = useCounterAnimation(end);

  return (
    <div
      ref={counterRef}
      className="flex flex-col items-center justify-center p-6 space-y-4 rounded-xl shadow-md w-full"
    >
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center ${color} text-white`}
      >
        <Icon size={32} strokeWidth={2} />
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold text-gray-800">{count}+</p>
        <p className="text-sm text-gray-600 uppercase tracking-wider">
          {label}
        </p>
      </div>
    </div>
  );
};

export const NexusJrContadores: React.FC = () => {
  const counterData = [
    {
      icon: CheckCircle,
      end: 5,
      label: "Projetos Concluídos",
      color: "bg-blue-500",
    },
    {
      icon: Users,
      end: 5,
      label: "Clientes Satisfeitos",
      color: "bg-green-500",
    },
    {
      icon: Briefcase,
      end: 8,
      label: "Soluções Desenvolvidas",
      color: "bg-purple-500",
    },
    {
      icon: TrendingUp,
      end: 69,
      label: "Taxa de Sucesso",
      color: "bg-orange-500",
    },
    {
      icon: Globe,
      end: 5,
      label: "Anos de Experiência",
      color: "bg-red-500",
    },
  ];

  return (
    <section className="flex items-center justify-center">
      <div className="w-full max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            Excelência em Números
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transformando desafios em soluções tecnológicas inovadoras
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
          {counterData.map((item, index) => (
            <CounterItem
              key={index}
              icon={item.icon}
              end={item.end}
              label={item.label}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NexusJrContadores;
