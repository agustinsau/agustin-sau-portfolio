/**
 * Configuración de tema y colores
 */

import type { ThemeColors } from "@/types";

export const COLORS: ThemeColors = {
  primary: "#06C6DB", // Cyan
  secondary: "#0F172A", // Slate-900 (dark)
  dark: "#0F172A",
  light: "#F8FAFC",
  accent: "#EC4899", // Pink
} as const;

export const BREAKPOINTS = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
} as const;

export const ANIMATIONS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  },
  slideInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  slideInDown: {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3 },
  },
} as const;

export const Z_INDEX = {
  dropdown: 40,
  sticky: 20,
  fixed: 30,
  modal: 50,
  tooltip: 60,
} as const;
