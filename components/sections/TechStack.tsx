"use client";

import { motion } from "framer-motion";

const technologies = {
  Frontend: [
    { name: "HTML5", level: 85, description: "Estructura y semántica de páginas web" },
    { name: "CSS3", level: 85, description: "Estilos, animaciones y diseño visual" },
    { name: "Tailwind CSS", level: 70, description: "Framework CSS para el estilo visual" },
    { name: "React", level: 60, description: "Librería para interfaces dinámicas" },
    { name: "Next.js", level: 50, description: "Framework React con SSR y optimizaciones" },
  ],
  Backend: [
    { name: "MySQL", level: 80, description: "Base de datos relacional" },
    { name: "REST APIs", level: 80, description: "Comunicación entre cliente y servidor" },
    { name: "TypeScript", level: 75, description: "JavaScript con tipado estático" },
    { name: "NestJS", level: 70, description: "Framework Node.js escalable" },
    { name: "Node.js", level: 50, description: "JavaScript en el servidor" },
  ],
  Herramientas: [
    { name: "Github", level: 80, description: "Control de versiones y colaboración" },
    { name: "Jira", level: 65, description: "Gestión de proyectos y tareas" },
    { name: "Figma", level: 65, description: "Diseño y prototipado colaborativo" },
    { name: "Postman", level: 60, description: "Testing y documentación de APIs" },
  ],
};

const TechStack = () => {
  return (
    <section id="tech" aria-label="Sección de habilidades técnicas" className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-md mb-2">Habilidades</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Stack <span className="text-gradient">Tecnológico</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, techs], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-6 text-gradient">
                {category}
              </h3>

              <div className="space-y-5">
                {techs.map((tech, index) => (
                  <div key={tech.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{tech.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {tech.level}%
                      </span>
                    </div>
                    
                    {tech.description && (
                      <p className="text-sm text-muted-foreground mb-2">
                        {tech.description}
                      </p>
                    )}

                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
