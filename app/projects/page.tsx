import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">
        Proyectos
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </main>
  );
}
