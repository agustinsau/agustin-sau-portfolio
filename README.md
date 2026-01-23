# 🚀 Portfolio - Fullstack Developer

Un portafolio construido con **Next.js 16**, **React 19**, **TypeScript** y **Tailwind CSS**.
![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.19-06B6D4?logo=tailwindcss)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success)

---

## ✨ Características

### 🎨 **Diseño & UX**
- ✅ Responsive design (mobile-first)
- ✅ Dark theme con paleta de colores moderna
- ✅ Animaciones suaves con Framer Motion
- ✅ Menú móvil responsive con hamburguesa
- ✅ Click-outside detection para cerrar menús

### 🔍 **SEO & Performance**
- ✅ Metadata API con Open Graph
- ✅ JSON-LD Structured Data
- ✅ Optimización de imágenes

### ♿ **Accesibilidad (WCAG 2.1)**
- ✅ ARIA labels en todas las secciones
- ✅ Focus visible indicators
- ✅ Skip links para navegación rápida
- ✅ Contraste de colores verificado
- ✅ Semántica HTML correcta

### 📝 **Formulario de Contacto**
- ✅ Validación completa de datos
- ✅ Integración con FormSubmit.co
- ✅ Error/Success feedback
- ✅ Mensajes de error personalizados

### 🏗️ **Arquitectura**
- ✅ Tipos centralizados
- ✅ Configuración modular
- ✅ Componentes reutilizables
- ✅ Imports limpios y organizados
- ✅ ESLint mejorado

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **Next.js** | 16.1.1 | Framework principal (App Router) |
| **React** | 19.2.3 | Librería UI |
| **TypeScript** | 5 | Type safety |
| **Tailwind CSS** | 3.4.19 | Styling utility-first |
| **Framer Motion** | 12.26.2 | Animaciones |
| **Lucide React** | 0.562.0 | Iconografía |
| **ESLint** | Latest | Linting y code quality |

---

## 📁 Estructura del Proyecto

```
portfolio/
├── 📄 app/                              # Next.js App Router
│   ├── layout.tsx                       # Layout global
│   ├── page.tsx                         # Home page
│   ├── globals.css                      # Estilos globales
│   └── projects/
│       ├── page.tsx                     # Página de proyectos
│       └── barber-book/
│           └── page.tsx                 # Detalle de proyecto
│
├── 🎨 components/
│   ├── layout/
│   │   ├── Navbar.tsx                   # Navegación (desktop + mobile)
│   │   ├── Footer.tsx                   # Pie de página
│   │   ├── ProjectCard.tsx              # Card de proyecto
│   │   ├── ProfilePicture.tsx           # Foto de perfil
│   │   ├── ContactForm.tsx              # Formulario de contacto
│   │   └── SkipLink.tsx                 # WCAG skip link
│   ├── sections/
│   │   ├── Hero.tsx                     # Sección hero
│   │   ├── About.tsx                    # Sobre mí
│   │   ├── TechStack.tsx                # Stack de tecnologías
│   │   ├── Projects.tsx                 # Galería de proyectos
│   │   └── Contact.tsx                  # Sección de contacto
│   └── ui/                              # Componentes UI reutilizables (preparado)
│
├── ⚙️ config/                           # Configuración centralizada
│   ├── constants.ts                     # Constantes globales
│   ├── navigation.ts                    # Rutas y navegación
│   ├── theme.ts                         # Colores y animaciones
│   └── index.ts                         # Barrel export
│
├── 🔤 types/                            # Tipos TypeScript
│   └── index.ts                         # Todas las interfaces
│
├── 📊 data/
│   └── projects.ts                      # Array de proyectos
│
├── 🔗 hooks/
│   └── useActiveSection.ts              # Hook para scroll tracking
│
├── 📚 lib/
│   └── seo.ts                           # Generadores de JSON-LD
│
├── 📦 public/
│   ├── cv/                              # CV descargable
│   └── images/                          # Imágenes del portfolio
│
│
├── 📄 Configuración
│   ├── eslint.config.mjs
│   ├── next.config.ts
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
```

---

## 🚀 Inicio Rápido

### Requisitos Previos
- Node.js 18+ 
- npm o pnpm

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/tuusuario/portfolio.git
cd portfolio

# Instalar dependencias
npm install
# o
pnpm install
```

### Desarrollo

```bash
# Ejecutar servidor de desarrollo
npm run dev

# Abrir navegador
# http://localhost:3000
```

### Build

```bash
# Build para producción
npm run build

# Servir build local
npm start
```

### Linting

```bash
# Ejecutar ESLint
npm run lint

# Verificar TypeScript
npx tsc --noEmit
```

---

## 📊 Fases de Desarrollo

### ✅ FASE 1: SEO Crítico + Accesibilidad

- ✅ Metadata API con Open Graph
- ✅ JSON-LD Structured Data
- ✅ WCAG 2.4.1 Skip Links
- ✅ Aria-labels en secciones
- ✅ Focus visible indicators

---

### ✅ FASE 2: UX 

- ✅ Active section indicator en navbar
- ✅ Contact form con validación completa
- ✅ FormSubmit.co integration
- ✅ Error/Success feedback
- ✅ Responsive design optimizado

---

### ✅ FASE 3: Refactoring Arquitectónico

- ✅ Tipos centralizados en `/types`
- ✅ Configuración modular en `/config`
- ✅ ESLint mejorado con reglas estrictas
- ✅ Imports organizados y consistentes
- ✅ Zero TypeScript errors

---

## 🏗️ Arquitectura

### Tipos Centralizados (`types/index.ts`)

```typescript
interface NavLink {
  name: string;
  href: string;
  id: string;
}

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  type: "Fullstack" | "Frontend" | "Backend";
  github: string;
  demo?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ThemeColors {
  primary: string;
  secondary: string;
  dark: string;
  light: string;
  accent: string;
}
```

### Configuración Centralizada

#### `config/navigation.ts`
```typescript
NAV_ITEMS     - Array de links de navegación
NAVBAR_OFFSET - Height del navbar (80px)
SOCIAL_LINKS  - URLs de redes sociales
```

#### `config/theme.ts`
```typescript
COLORS        - Paleta de colores (#06C6DB primary)
BREAKPOINTS   - Media queries (768px tablet)
ANIMATIONS    - Definiciones Framer Motion
Z_INDEX       - Valores z-index consistentes
```

#### `config/constants.ts`
```typescript
SITE_CONFIG     - Configuración del sitio
FORM_CONFIG     - URLs y validación de formulario
ERROR_MESSAGES  - Mensajes centralizados
CACHE_DURATIONS - Tiempos de caché
```

---

## 🎨 Colores & Temas

```typescript
// Paleta principal
Primary:   #06C6DB (Cyan)
Secondary: #0F172A (Slate-900)
Accent:    #EC4899 (Pink)
```

### Breakpoints Tailwind

```typescript
Mobile:   320px
Tablet:   768px (md)
Desktop:  1024px (lg)
Wide:     1280px (xl)
```

---

## 📝 Componentes Principales

### Navbar
- **Desktop:** Links visibles + CTA button
- **Mobile:** Hamburguesa menu con slide animation
- **Features:** Active section indicator, click-outside detection

### Contact Form
- Validación de campos en tiempo real
- Integración con FormSubmit.co
- Estados de error/success
- Mensajes de validación personalizados

### Project Card
- Imagen con overlay
- Tech stack display
- Links a GitHub y demo
- Hover effects

### Hero Section
- Background animado
- Foto de perfil con animación
- CTA principal
- Social links

---

## 🔗 Imports Recomendados

```typescript
// Types
import type { Project, NavLink } from '@/types';

// Config
import { NAV_ITEMS, NAVBAR_OFFSET } from '@/config/navigation';
import { COLORS, ANIMATIONS } from '@/config/theme';
import { SITE_CONFIG, ERROR_MESSAGES } from '@/config';

// Componentes
import Navbar from '@/components/layout/Navbar';
import ProjectCard from '@/components/layout/ProjectCard';
import { Hero } from '@/components/sections/Hero';
```

---

## 🚀 Deployment

### Vercel (Recomendado)

1. Push a GitHub
2. Conectar repositorio en [Vercel](https://vercel.com)
3. Deploy automático en cada push

```bash
git push origin main
```

### Variables de Entorno

Crear `.env.local`:

```bash
# FormSubmit.co
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# SEO
NEXT_PUBLIC_SITE_URL=https://tuportfolio.com
```
---

## 🐛 Troubleshooting

### Puerto 3000 en uso
```bash
# Usar puerto alternativo
npm run dev -- -p 3001
```

### Errores de TypeScript
```bash
# Limpiar caché
rm -rf .next node_modules
npm install
npm run build
```

### ESLint warnings
```bash
# Verificar reglas
npx eslint --debug .

# Aplicar fixes automáticos
npx eslint . --fix
```

---

## 🤝 Contribuir

Este es un proyecto personal, pero las sugerencias son bienvenidas:

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/amazing-feature`)
3. Commit cambios (`git commit -m 'feat: amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

---

## 📋 Checklist de Producción

- ✅ TypeScript sin errores
- ✅ ESLint pasando
- ✅ Build sin warnings
- ✅ Responsive en todos los breakpoints
- ✅ SEO implementado
- ✅ Accesibilidad WCAG 2.1
- ✅ Formulario funcional
- ✅ Social media links configurados
- ✅ Favicon incluido
- ✅ CV descargable

---

## 📞 Contacto

- 📧 Email: contacto@ejemplo.com
- 💼 LinkedIn: [linkedin.com/in/agusau](https://linkedin.com)
- 🐙 GitHub: [github.com/agustinsau](https://github.com)

---

<div align="center">

**Hecho con ❤️ por Agustin**

⭐ Si te gusta este proyecto, dale una estrella en GitHub

[Ver Portfolio en Vivo](https://portfolio.vercel.app) • [LinkedIn](https://linkedin.com) • [GitHub](https://github.com)

</div>
