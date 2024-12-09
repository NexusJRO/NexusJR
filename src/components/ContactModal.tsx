"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the services from the original component
const services = [
  "Desenvolvimento de Software",
  "Análise de Dados",
  "Arquitetura em Nuvem",
  "Design UI/UX",
  "Desenvolvimento Mobile",
  "Desenvolvimento Web",
  "Inteligência de Negócios",
  "Soluções de Cibersegurança",
];

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "E-mail inválido" }),
  service: z.string({ required_error: "Selecione um serviço" }),
  message: z.string().optional(),
});

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // TODO: Implement actual form submission logic
    console.log(values);
    // Close modal after submission
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          className="inline-flex items-center px-10 py-4 
      bg-blue-600 text-white font-semibold rounded-full 
      hover:bg-blue-700 transition-colors duration-300 
      shadow-md hover:shadow-lg text-lg"
        >
          Solicite uma Consulta
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px] p-8 rounded-2xl">
        <DialogHeader className="text-center">
          <DialogTitle className="text-3xl font-bold text-gray-900 mb-4">
            Solicite uma Consulta
          </DialogTitle>
          <DialogDescription className="text-gray-600 mb-6">
            Preencha o formulário abaixo e nossa equipe entrará em contato
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Nome Completo</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Seu nome"
                      {...field}
                      className="rounded-lg"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">E-mail</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      {...field}
                      className="rounded-lg"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">
                    Serviço de Interesse
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="rounded-lg">
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">
                    Mensagem (Opcional)
                  </FormLabel>
                  <FormControl>
                    <textarea
                      {...field}
                      placeholder="Detalhes adicionais sobre sua necessidade"
                      className="w-full p-3 border rounded-lg min-h-[120px] resize-y"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 text-lg transition-colors duration-300"
            >
              Enviar Solicitação
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ContactModal;
