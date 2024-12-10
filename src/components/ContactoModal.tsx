"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";

// Services list remains the same
const SERVICES = [
  "Desenvolvimento de Software",
  "Análise de Dados",
  "Arquitetura em Nuvem",
  "Design UI/UX",
  "Desenvolvimento Mobile",
  "Desenvolvimento Web",
  "Inteligência de Negócios",
  "Soluções de Cibersegurança",
] as const;

// Zod validation schema remains the same
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "E-mail inválido" }),
  phone: z.string().regex(/^(?:\+?258)?[89]\d{1}\d{3}\d{4}$/, {
    message: "Número de telefone inválido. Use o formato +258 84 123 4567",
  }),
  service: z.enum(SERVICES),
  message: z.string().min(10, { message: "Mensagem muito curta" }),
});

// Infer the type from the schema
type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onOpenChange,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: undefined,
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    // Handle form submission logic here
    console.log(data);
    setIsSubmitted(true);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      form.reset();
      setIsSubmitted(false);
    }
    onOpenChange(open);
  };

  const handleCloseAndReset = () => {
    form.reset();
    handleOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md sm:max-w-4xl w-[95%] max-h-[95vh] overflow-y-auto">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            {isSubmitted ? "Mensagem enviada com sucesso" : "Entre em Contato"}
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-sm sm:text-base">
            {isSubmitted
              ? "Recebemos sua mensagem. Nossa equipe entrará em contato em breve."
              : "Estamos prontos para transformar sua visão em realidade"}
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center space-y-4">
            <CheckCircle className="mx-auto text-green-500 w-12 h-12 sm:w-16 sm:h-16" />
            <Alert variant="default">
              <AlertDescription className="text-sm">
                Sua mensagem foi enviada com sucesso! Nossa equipe
                administrativa entrará em contato com você dentro de 14 minutos.
              </AlertDescription>
            </Alert>
            <Button
              onClick={handleCloseAndReset}
              className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Fechar
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Info Column - Responsive Adjustments */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg space-y-4 order-2 md:order-1">
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">Tete, Moçambique</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">+258 83 339 0642</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-red-500 w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">
                  contato@nexusjr.com
                </span>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
                  Nossos Horários
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Segunda a Sexta: 09:00 - 18:00 Sábado: 09:00 - 14:00
                </p>

                {/* Google Maps iframe - Hidden on mobile */}
                <div className="mt-4 w-full h-48 sm:h-64 hidden md:block">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.2002345321907!2d33.5832426313678!3d-16.15862120850139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1926478542edb8fb%3A0x7a8dadd15cc6c84a!2sBCI%20ATM!5e0!3m2!1spt-PT!2smz!4v1733816589565!5m2!1spt-PT!2smz"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Form Column - Responsive Adjustments */}
            <div className="order-1 md:order-2">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          Nome Completo
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Seu nome completo"
                            {...field}
                            className="text-sm sm:text-base focus:ring-2 focus:ring-blue-300"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Similar adjustments for other form fields */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          E-mail
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="seu.email@exemplo.com"
                            {...field}
                            className="text-sm sm:text-base focus:ring-2 focus:ring-blue-300"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Phone, Service, and Message fields with similar responsive adjustments */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          Número de Telefone
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+258 84 123 4567"
                            {...field}
                            className="text-sm sm:text-base focus:ring-2 focus:ring-blue-300"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          Serviço de Interesse
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="text-sm sm:text-base">
                              <SelectValue placeholder="Selecione um serviço" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {SERVICES.map((service) => (
                              <SelectItem
                                key={service}
                                value={service}
                                className="text-sm sm:text-base"
                              >
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          Sua Mensagem
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Conte-nos mais sobre seu projeto..."
                            className="resize-none h-24 text-sm sm:text-base focus:ring-2 focus:ring-blue-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-sm sm:text-base"
                  >
                    <Send className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Enviar
                    Mensagem
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
