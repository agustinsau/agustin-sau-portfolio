"use client";

import { motion } from "framer-motion";

const navItems = [
  { name: "Inicio", href: "#hero" },
  { name: "Tecnologías", href: "#tech" },
  { name: "Proyectos", href: "#projects" },
  { name: "Sobre mí", href: "#about" },
  { name: "Contacto", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-label="Navegación principal"
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" aria-label="Volver al inicio (AgusDev)" className="text-xl font-bold text-gradient focus-visible-ring rounded-lg">
          &lt;AgusDev /&gt;
        </a>

        <ul className="hidden md:flex gap-8">
          {navItems.map((item, i) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <a
                href={item.href}
                aria-label={`Ir a ${item.name}`}
                className="text-sm text-muted-foreground hover:text-primary transition focus-visible-ring rounded-lg px-2 py-1"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        <a
          href="#contact"
          aria-label="Sección de contacto - Hablemos"
          className="hidden md:inline-flex px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm focus-visible-ring"
        >
          Hablemos
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
