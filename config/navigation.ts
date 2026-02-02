/**
 * Configuración de navegación
 */

import type { NavLink } from "@/types";

export const NAV_ITEMS: NavLink[] = [
  { name: "Inicio", href: "#hero", id: "hero" },
  { name: "Tecnologías", href: "#tech", id: "tech" },
  { name: "Proyectos", href: "#projects", id: "projects" },
  { name: "Sobre mí", href: "#about", id: "about" },
  { name: "Contacto", href: "#contact", id: "contact" },
];

export const NAVBAR_OFFSET = 80; // px - height del navbar para scroll offset

export const SOCIAL_LINKS = {
  github: "https://github.com/agustinsau",
  linkedin: "https://www.linkedin.com/in/agusau/",
  email: "agustin.sauu@gmail.com",
} as const;
