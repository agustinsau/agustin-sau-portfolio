"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import ContactForm from "../layout/ContactForm";

const Contact = () => {
  return (
    <section id="contact" aria-label="Sección de contacto" className="py-16 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-mono text-sm md:text-base mb-2">¿Tienes un proyecto?</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
              Trabajemos <span className="text-gradient">Juntos</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-12 px-4 leading-relaxed">
              Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. 
              Si tienes una idea o quieres colaborar, ¡no dudes en contactarme!
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16"
          >
            <div className="flex items-center gap-2 md:gap-3 text-base md:text-lg text-muted-foreground">
              <MapPin className="text-primary flex-shrink-0" size={20} />
              <span>Olavarría, Buenos Aires, AR</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-base md:text-lg text-muted-foreground">
              <Mail className="text-primary flex-shrink-0" size={20} />
              <a href="mailto:agustin.sauu@gmail.com" className="hover:text-primary transition focus-visible-ring rounded">
                agustin.sauu@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
