import Project from "../../components/Project";
import projects from "../../data/projects";

const Projects = ({ lang }) => {
  return (
    <div className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-6xl">
        <ul className="grid grid-cols-1 gap-16">
          {projects.map((project) => (
            <Project key={project.id} project={project} lang={lang} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
