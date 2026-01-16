import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "barberia-turnos-frontend",
    title: "Administratacion de usuarios y turnos para Barberías",
    description:
      "Aplicación fullstack para la gestión de turnos, clientes y servicios. Incluye panel administrativo y control de disponibilidad.",
    image: "/images/barberia-front.jpg",
    tech: ["React", "TypeScript", "Tailwind"],
    type: "Frontend",
    github: "https://github.com/JereStorm/barberbook-frontend",
    header: "Proyecto Destacado",
  },
  {
    slug: "barberia-turnos-backend",
    title: "Gestión para Barberías",
    description:
      "Aplicación fullstack para la gestión de turnos, clientes y servicios. Incluye autenticación, panel administrativo y control de disponibilidad.",
    image: "/images/barberia-back.jpg",
    tech: ["NestJS", "TypeScript", "MySQL", "JWT", "TypeORM"],
    type: "Backend",
    github: "https://github.com/JereStorm/barberbook-backend",
    header: "Proyecto Destacado",
  },
  {
    slug: "supermercado-online",
    title: "Supermercado Online",
    description:
      "Sitio web dinámico de supermercado desarrollado con JavaScript puro. Manejo de productos, carrito y renderizado dinámico.",
    image: "/images/super.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Frontend",
    github: "https://github.com/agustinsau/frontEnd-CEPIT-2024",
    header: "Proyecto de Introducción",
  },
  {
    slug: "videojuego-web",
    title: "Videojuego Web",
    description:
      "Videojuego desarrollado con JavaScript puro. Incluye mecánicas de juego, gráficos y sonido integrados.",
    image: "/images/webgame.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Frontend",
    github: "https://github.com/agustinsau/Interfaces-Web-Game",
    header: "Proyecto Extra",
  },
];
