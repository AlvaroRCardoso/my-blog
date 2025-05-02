import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config"
import Project from "../../components/Project";

const Projects = ({ lang }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));

        const projectList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))

        setProjects(projectList)
      } catch (error) {
        console.error("Erro ao buscar projetos: ", error);
      }
    };

    fetchProjects();
  }, [])

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
