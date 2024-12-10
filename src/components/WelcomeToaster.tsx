"use client";

import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

export default function WelcomeToast() {
  const { toast } = useToast();

  useEffect(() => {
    const currentHour = new Date().getHours();
    let greeting = "Olá";
    if (currentHour >= 5 && currentHour < 12) {
      greeting = "Bom dia";
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = "Boa tarde";
    } else if (currentHour >= 18 || currentHour < 5) {
      greeting = "Boa noite";
    }

    toast({
      title: `${greeting} à Nexus JR!`,
      description: "Explore nossa jornada de inovação e excelência técnica.",
      duration: 5000,
    });
  }, [toast]); // Agora inclui 'toast' como dependência

  return <Toaster />; // Added back the Toaster component
}
