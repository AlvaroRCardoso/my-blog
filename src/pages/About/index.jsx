const technologies = [
  "HTML 5",
  "CSS 3",
  "JavaScript",
  "Tailwind",
  "React.js",
  "Next.js",
  "Node.js",
  "Nest.js",
  "Figma",
  "Git",
  "PostgreSQL",
  "Firebase",
];

const About = ({ t }) => {
  return (
    <>
      <section className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
        <div className="mx-auto w-full max-w-3xl">
          <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
            <p className="mb-7 last:mb-0">{t("text1")}</p>
          </div>
        </div>
      </section>
      <section className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
        <div className="mx-auto w-full max-w-3xl">
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
              {technologies.map((technology, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 cursor-default"
                >
                  <span className="text-lg font-serif italic text-slate-800">
                    {technology}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center font-serif italic tracking-tight text-slate-500 mb-7 last:mb-0">
              {t("technologies")}
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
        <div className="mx-auto w-full max-w-4xl">
          <div className="font-serif text-2xl italic leading-relaxed">
            <q
              title="A única maneira de fazer um ótimo trabalho é amar o que você faz."
              className=" cursor-zoom-in"
            >
              The only way to do great work is to love what you do.
            </q>{" "}
            - Steve Jobs
          </div>
        </div>
      </section>
      <section className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
        <div className="mx-auto w-full max-w-3xl">
          <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
            <p className="mb-7 last:mb-0">{t("text2")}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
