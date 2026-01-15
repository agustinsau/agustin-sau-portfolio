"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" aria-label="Sección de contacto" className="py-16 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12"
          >
            <div className="flex items-center gap-2 md:gap-3 text-base md:text-lg text-muted-foreground">
              <MapPin className="text-primary flex-shrink-0" size={20} />
              <span>Olavarría, Buenos Aires, AR</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-base md:text-lg text-muted-foreground">
              <Mail className="text-primary flex-shrink-0" size={20} />
              <span className="break-all">agustin.sauu@gmail.com</span>
            </div>
          </motion.div>
          <motion.a
            href="mailto:agustin.sauu@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Enviar correo de contacto"
            className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-lg md:text-xl glow-primary focus-visible-ring"
          >
            <Send size={20} />
            Envíame un mensaje
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
