/**
 * Tipos globales para la aplicación
 */

// Tipos para navegación
export interface NavLink {
  name: string;
  href: string;
  id: string;
}

export type SectionId = "hero" | "tech" | "projects" | "about" | "contact";

// Tipos para proyectos
export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  type: "Fullstack" | "Frontend" | "Backend";
  github: string;
  demo?: string;
  header: string;
  learnings?: string;
}

// Tipos para form
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// Tipos para tema
export interface ThemeColors {
  primary: string;
  secondary: string;
  dark: string;
  light: string;
  accent: string;
}

// Tipos para SEO
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  image?: string;
}
