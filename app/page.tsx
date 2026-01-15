import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import { getPersonSchema } from "@/lib/seo";

export default function Home() {
  const personSchema = getPersonSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        suppressHydrationWarning
      />
      <Hero />
      <TechStack />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
