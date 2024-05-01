"use client"
import projects from "@/util/projects";
import Card from "./Card";
import MobileCard from "./MobileCard";

const Projects = () => {
  return (
    <section className="flex flex-col gap-12 py-10 w-full">
      <h1 className="text-5xl font-bold text-center">Projetos</h1>
      <div className="hidden xl:flex flex-col gap-[150px] ">
        {projects.map((project, index) => (
              <Card project={project} index={index} key={project.title} />
        ))}
      </div>
      <div className="xl:hidden flex items-center gap-5">
        <MobileCard  />
      </div>
    </section>
  );
};

export default Projects;
