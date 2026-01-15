"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "../layout/ProjectCard";

const Projects = () => {
  return (
     <section id="projects" aria-label="Sección de proyectos destacados" className="py-32">
      <div className="container mx-auto px-15">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-primary font-mono text-md mb-2">
            Mi trabajo
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Proyectos <span className="text-gradient">Destacados</span>
          </h2>
        </div>

        {/* Projects list */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
