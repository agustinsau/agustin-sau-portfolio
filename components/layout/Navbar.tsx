"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Inicio", href: "#hero", id: "hero" },
  { name: "Tecnologías", href: "#tech", id: "tech" },
  { name: "Proyectos", href: "#projects", id: "projects" },
  { name: "Sobre mí", href: "#about", id: "about" },
  { name: "Contacto", href: "#contact", id: "contact" },
];

const NAVBAR_OFFSET = 80;

const Navbar = () => {
  const activeSection = useActiveSection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault();

      const element = document.getElementById(sectionId);
      if (!element) return;

      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - NAVBAR_OFFSET,
        behavior: "smooth",
      });

      // Pequeño delay antes de cerrar el menú para asegurar que el scroll inicie
      setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 100);
    },
    []
  );

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-label="Navegación principal"
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          aria-label="Volver al inicio (AgusDev)"
          className="text-lg md:text-xl font-bold text-gradient focus-visible-ring rounded-lg px-2 py-1"
        >
          &lt;AgusDev /&gt;
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item, i) => {
            const isActive = activeSection === item.id;

            return (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  aria-label={`Ir a ${item.name}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm transition focus-visible-ring rounded-lg px-2 py-1 ${
                    isActive
                      ? "text-primary font-semibold border-b-2 border-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </a>
              </motion.li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          {/* Desktop CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            aria-label="Sección de contacto - Hablemos"
            className="hidden md:inline-flex px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-medium focus-visible-ring"
          >
            Hablemos
          </a>

          {/* Mobile Menu Button */}
          <motion.button
            ref={buttonRef}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className="md:hidden p-2 rounded-lg focus-visible-ring"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="text-primary" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} className="text-primary" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border/50 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item, i) => {
                const isActive = activeSection === item.id;

                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    aria-label={`Ir a ${item.name}`}
                    aria-current={isActive ? "page" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`block px-4 py-2.5 rounded-lg transition focus-visible-ring ${
                      isActive
                        ? "text-primary font-semibold bg-primary/10 border-l-2 border-primary"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.name}
                  </motion.a>
                );
              })}

              {/* Mobile CTA Button */}
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                aria-label="Sección de contacto - Hablemos"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.04 }}
                className="w-full px-4 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground font-medium text-center focus-visible-ring mt-2"
              >
                Hablemos
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;