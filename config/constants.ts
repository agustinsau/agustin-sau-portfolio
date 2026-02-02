/**
 * Constantes globales de la aplicación
 */

export const SITE_CONFIG = {
  title: "Portfolio Agustin Sau",
  description: "Portafolio desarrollador fullstack",
  author: "Aguistin Ignacio Sau",
  deployUrl: "https://agustin-sau-portfolio.vercel.app/",
} as const;

export const FORM_CONFIG = {
  submitUrl: "https://formspree.io/f/YOUR_FORM_ID",
  validation: {
    nameMinLength: 2,
    emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    messageMinLength: 10,
  },
} as const;

export const CACHE_DURATIONS = {
  oneHour: 3600,
  oneDay: 86400,
  oneWeek: 604800,
} as const;

export const ERROR_MESSAGES = {
  validation: {
    nameRequired: "El nombre es requerido",
    nameMinLength: "El nombre debe tener al menos 2 caracteres",
    emailRequired: "El email es requerido",
    emailInvalid: "Ingresa un email válido",
    subjectRequired: "El asunto es requerido",
    messageRequired: "El mensaje es requerido",
    messageMinLength: "El mensaje debe tener al menos 10 caracteres",
  },
  form: {
    submitError: "Error al enviar el formulario",
    submitSuccess: "¡Mensaje enviado correctamente!",
  },
} as const;
