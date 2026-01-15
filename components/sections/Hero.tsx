"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import ProfilePicture from "../layout/ProfilePicture";

const Hero = () => {
  return (
    <section
      id="hero"
      aria-label="Sección de presentación del desarrollador"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-6 mb-5"
          >
            <div
              className="w-64 h-64 rounded-full aspect-square overflow-hidden border-4 border-primary/20 
              transition-transform
              duration-300
              ease-out
              hover:scale-105"
            >
              <ProfilePicture className="object-center" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-mono text-md mb-4"
          >
            ¡Hola! Me llamo
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Agustin Sau
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-muted-foreground mb-6"
          >
            Desarrollador <span className="text-gradient">Fullstack</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Creo experiencias digitales excepcionales. Especializado en
            construir aplicaciones web modernas, escalables y con un diseño
            impecable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-6 mb-16"
          >
            <a
              href="https://github.com/agustinsau"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil de GitHub"
              className="p-3 rounded-lg glass hover:text-primary transition-colors focus-visible-ring"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/agusau/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil de LinkedIn"
              className="p-3 rounded-lg glass hover:text-primary transition-colors focus-visible-ring"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:agustin.sauu@gmail.com"
              aria-label="Enviar correo electrónico"
              className="p-3 rounded-lg glass hover:text-primary transition-colors focus-visible-ring"
            >
              <Mail size={24} />
            </a>

            <a
              href="/cv/cv.pdf"
              download="Agustin-Ignacio-Sau-Curriculum-Vitae.pdf"
              aria-label="Descargar curriculum vitae en PDF"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold glow-primary transition-all hover:scale-[1.03] focus-visible-ring"
            >
              <Download className="w-5 h-5 " />
              Descargar CV
            </a>
          </motion.div>

          <motion.a
            href="#projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-md mb-2">Ver proyectos</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
