"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar error al escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Usar FormSubmit.co (servicio gratuito)
      const response = await fetch("https://formsubmit.co/ajax/agustin.sauu@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Resetear mensaje después de 5 segundos
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="sr-only">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`w-full px-4 py-3 rounded-lg bg-card border focus-visible-ring transition text-black placeholder-gray-500 ${
            errors.name
              ? "border-destructive text-destructive"
              : "border-border hover:border-primary/50"
          }`}
        />
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            id="name-error"
            className="text-sm text-destructive mt-1 flex items-center gap-1"
          >
            <AlertCircle size={14} />
            {errors.name}
          </motion.p>
        )}
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="tu.email@ejemplo.com"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`w-full px-4 py-3 rounded-lg bg-card border focus-visible-ring transition text-black placeholder-gray-500 ${
            errors.email
              ? "border-destructive text-destructive"
              : "border-border hover:border-primary/50"
          }`}
        />
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            id="email-error"
            className="text-sm text-destructive mt-1 flex items-center gap-1"
          >
            <AlertCircle size={14} />
            {errors.email}
          </motion.p>
        )}
      </div>

      {/* Message Textarea */}
      <div>
        <label htmlFor="message" className="sr-only">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Tu mensaje (mín. 10 caracteres)"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full px-4 py-3 rounded-lg bg-card border focus-visible-ring transition resize-none text-black placeholder-gray-500 ${
            errors.message
              ? "border-destructive text-destructive"
              : "border-border hover:border-primary/50"
          }`}
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            id="message-error"
            className="text-sm text-destructive mt-1 flex items-center gap-1"
          >
            <AlertCircle size={14} />
            {errors.message}
          </motion.p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label={
          isSubmitting
            ? "Enviando mensaje..."
            : "Enviar mensaje de contacto"
        }
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold glow-primary focus-visible-ring disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        <Send size={20} />
        {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
      </motion.button>

      {/* Success Message */}
      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center gap-2 text-green-400"
        >
          <CheckCircle size={20} />
          <span>¡Mensaje enviado exitosamente! Te contactaré pronto.</span>
        </motion.div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 rounded-lg bg-destructive/10 border border-destructive/30 flex items-center gap-2 text-destructive"
        >
          <AlertCircle size={20} />
          <span>Error al enviar. Intenta nuevamente o usa el email directo.</span>
        </motion.div>
      )}
    </form>
  );
};

export default ContactForm;
