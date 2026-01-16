"use client";

import type { Project } from "@/types";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  reversed?: boolean;
}

export default function ProjectCard({ project, reversed }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.7 }}
    >
      {/* CARD */}
      <div
        className={`
          bg-white/5 backdrop-blur
          border border-white/10
          rounded-2xl
          p-12 md:p-14
        `}
      >
        <div
          className={`grid md:grid-cols-2 gap-12 items-center ${
            reversed ? "md:grid-flow-col-dense" : ""
          }`}
        >
          {/* Image */}
          <div className={reversed ? "md:col-start-2" : ""}>
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-white/10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            {/* Meta */}
            <div className="flex items-center gap-3 text-sm font-mono">
              <span className="text-primary">{project.header}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">{project.type}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>

            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-3 pt-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-4 py-1.5
                    rounded-full
                    text-sm font-mono
                    bg-primary/10
                    text-primary
                    border border-primary/20
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver código en GitHub del proyecto ${project.title}`}
                className="text-muted-foreground hover:text-primary transition-colors focus-visible-ring rounded-lg p-1"
              >
                <Github size={22} />
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver demo en línea del proyecto ${project.title}`}
                  className="text-muted-foreground hover:text-primary transition-colors focus-visible-ring rounded-lg p-1"
                >
                  <ExternalLink size={22} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
