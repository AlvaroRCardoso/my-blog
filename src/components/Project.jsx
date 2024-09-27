const Project = ({ project, lang }) => {
  return (
    <li className="flex flex-wrap flex-row gap-6" key={project.id}>
      <div className="flex flex-1 w-full h-fit rounded-md overflow-hidden md:max-w-80">
        <img
          src={project.src}
          alt={project.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-3 md:flex-1">
        <h2 className="font-sans font-semibold tracking-tighter text-slate-800 text-3xl md:text-4xl underline md:no-underline">
          <a href={project.link} target="_blank" className="hover:underline">
            {project.name}
          </a>
        </h2>
        <p className="font-serif italic tracking-tighter text-slate-500">
          {lang && lang === "pt" ? project.date : project.date_en}
        </p>
        <p className="font-serif leading-relaxed md:text-lg md:leading-relaxed">
          {lang && lang === "pt" ? project.description : project.description_en}
        </p>
      </div>
    </li>
  );
};

export default Project;
