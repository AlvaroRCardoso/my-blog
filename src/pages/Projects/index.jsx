import Project from "../../components/Project";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Projects = ({ lang }) => {
  const { documents: projects, loading } = useFetchDocuments("projects");

  return (
    <div className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-6xl">
        <ul className="grid grid-cols-1 gap-16">
          {loading && <p>Carregando...</p>}
          {projects &&
            projects.map((project) => (
              <Project key={project.id} project={project} lang={lang} />
            ))}
          {projects && projects.length === 0 && (
            <h1>Não foram encontrados projects</h1>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
