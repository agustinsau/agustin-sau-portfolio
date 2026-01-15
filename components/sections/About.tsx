"use client";

import { motion } from "framer-motion";
import ProfilePicture from "../layout/ProfilePicture";

const About = () => {
  return (
    <section id="about" aria-label="Sección sobre el desarrollador" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-primary font-mono text-md mb-2">Conóceme</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Sobre <span className="text-gradient">Mí</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="md:col-span-2"
            >
              <div className="transition-transform duration-300 ease-out hover:scale-105">
                <ProfilePicture />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="md:col-span-3 space-y-6"
            >
              <div className="p-5 md:p-0 text-center md:text-left space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  ¡Hola! Soy{" "}
                  <span className="text-primary font-semibold">
                    Agustin Sau
                  </span>
                  , desarrollador Fullstack Junior enfocado en crear
                  aplicaciones web modernas, escalables y bien estructuradas.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Trabajo principalmente con el ecosistema JavaScript /
                  TypeScript, tanto en frontend como en backend, cuidando la
                  experiencia de usuario y la calidad del código.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Me gusta aprender constantemente, enfrentar nuevos desafíos y
                  seguir mejorando como desarrollador.
                </p>
              </div>

              <div className="p-4 md:p-0">
                <h4 className="font-semibold pb-3 md:pt-4 mb-3 text-center md:text-left space-y-4">
                  Principales tecnologías con las que trabajo:
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "React / Next.js",
                    "MySQL",
                    "Tailwind CSS",
                    "NestJS",
                    "TypeScript",
                  ].map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-3 text-md
                                  justify-center md:justify-start
                                  text-center md:text-left 
                                "
                    >
                      <span className="text-primary">▹</span>
                      <span className="text-muted-foreground font-mono">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
