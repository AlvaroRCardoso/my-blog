import { FaHtml5, FaCss3, FaJava, FaReact, FaVuejs, FaAngular, FaFigma, FaGit } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiJavascript, SiNuxtdotjs } from "react-icons/si";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config"

const technologies = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3 },
  { name: "JS", icon: SiJavascript },
  { name: "Java", icon: FaJava },
  { name: "React", icon: FaReact },
  { name: "Next", icon: SiNextdotjs },
  { name: "Vuejs", icon: FaVuejs },
  { name: "Nuxt", icon: SiNuxtdotjs },
  { name: "Angular", icon: FaAngular },
  { name: "Figma", icon: FaFigma },
  { name: "Git", icon: FaGit },
  { name: "Tailwind", icon: SiTailwindcss }
];

const About = ({ lang, t }) => {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    const fetchTexts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "texts"));

        const textList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))

        setTexts(textList)
      } catch (error) {
        console.error("Erro ao buscar projetos: ", error);
      }
    };

    fetchTexts();
  }, [])

  return (
    <>
      <section className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
        <div className="mx-auto w-full max-w-3xl">
          <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
            <p className="mb-7 last:mb-0">
              {lang && lang === "pt" ? texts[0]?.text_pt : texts[0]?.text_en}
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
        <div className="mx-auto w-full max-w-3xl">
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-4 gap-8 md:grid-cols-6">
              {technologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <IconComponent className='m-auto size-7 md:size-16' key={index} size={80} color="#64748b" />
                );
              })}
            </div>
            <p className="text-center m-4 font-serif italic tracking-tight text-slate-500 mb-7 last:mb-0">
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
            <p className="mb-7 last:mb-0">
              {lang && lang === "pt" ? texts[1]?.text_pt : texts[1]?.text_en}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
