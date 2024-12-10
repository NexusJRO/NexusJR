"use client";

import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

export default function WelcomeToast() {
  const { toast } = useToast();

  useEffect(() => {
    // Get current hour
    const currentHour = new Date().getHours();

    // Determine greeting based on time of day
    let greeting = "Olá";
    if (currentHour >= 5 && currentHour < 12) {
      greeting = "Bom dia";
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = "Boa tarde";
    } else if (currentHour >= 18 || currentHour < 5) {
      greeting = "Boa noite";
    }

    // Show toast automatically when the component mounts
    toast({
      title: `${greeting} à Nexus JR!`,
      description: "Explore nossa jornada de inovação e excelência técnica.",
      duration: 5000, // Toast will display for 5 seconds
    });
  }, []); // Empty dependency array ensures this runs only once on initial render

  return <Toaster />; // Added back the Toaster component
}
