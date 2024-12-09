"use client";

import React from "react";
import Image from "next/image";
import { Github, Instagram, ArrowRight, Download } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 bg-[#0C1445]">
      <div className="max-w-6xl w-full mx-auto relative z-10 grid md:grid-cols-2 gap-8 items-center">
        {/* Swiper Image Container */}
        <div className="flex justify-center">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000, // Change slide every 3 seconds
              disableOnInteraction: false, // Continue autoplay after user interaction
            }}
            loop={true} // Enable infinite loop
            className="w-full max-w-[350px] sm:max-w-[450px]"
          >
            <SwiperSlide>
              <Image
                src="/home/brain.png"
                alt="Nexus JR Avatar 1"
                width={450}
                height={450}
                priority
                className="rounded-3xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/home/brain.png"
                alt="Nexus JR Avatar 2"
                width={450}
                height={450}
                priority
                className="rounded-3xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/home/brain.png"
                alt="Nexus JR Avatar 3"
                width={450}
                height={450}
                priority
                className="rounded-3xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          {/* Animated Intro */}
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <span className="w-10 h-1 bg-primary-500 rounded-full"></span>
            <p className="text-white text-lg tracking-wide">
              Tech excellence always
            </p>
          </div>

          {/* Headline with Dynamic Emphasis */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Nexus{" "}
            <span className="text-primary-500 animate-text-shimmer">JR</span>
          </h1>

          {/* Descriptive Subtext */}
          <p className="text-neutral-200 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Com cada linha de código e cada projeto concluído, reforçamos nosso
            compromisso com a excelência técnica e a inovação contínua.
          </p>

          {/* Call to Action Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
            <button
              className="group relative px-8 py-3 rounded-lg 
                bg-primary-500 text-white font-semibold
                hover:bg-primary-600 transition-all duration-300
                shadow-lg hover:shadow-xl
                flex items-center gap-3
                active:scale-95"
            >
              <span>Ver Meus Projetos</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Social Links with Hover Effects */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-primary-400 
                  transition-all duration-300 
                  hover:scale-110 active:scale-90"
                aria-label="Github Profile"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-primary-400 
                  transition-all duration-300 
                  hover:scale-110 active:scale-90"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-primary-400 
                  transition-all duration-300 
                  hover:scale-110 active:scale-90"
                aria-label="Download Resume"
              >
                <Download className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
