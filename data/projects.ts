export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  type: "Fullstack" | "Frontend" | "Backend";
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "barberia-turnos",
    title: "Gestión de Turnos para Barberías",
    description:
      "Aplicación fullstack para la gestión de turnos, clientes y servicios. Incluye autenticación, panel administrativo y control de disponibilidad.",
    image: "/projects/barberia.png",
    tech: ["React", "NestJS", "TypeScript", "MySQL", "JWT", "Tailwind"],
    type: "Fullstack",
    github: "https://github.com/tuusuario/barberia-turnos",
    demo: "",
  },
  {
    slug: "supermercado-online",
    title: "Supermercado Online",
    description:
      "Sitio web dinámico de supermercado desarrollado con JavaScript puro. Manejo de productos, carrito y renderizado dinámico.",
    image: "/projects/supermercado.png",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Frontend",
    github: "https://github.com/tuusuario/supermercado-online",
  },
];

