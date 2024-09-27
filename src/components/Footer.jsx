const Footer = ({ t }) => {
  return (
    <footer className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-3xl">
        <div className="grid grid-cols-1 justify-items-center gap-16">
          <hr className="h-px w-1/2 border-0 bg-slate-200 md:max-w-sm" />
          <div className="px-4">
            <div className="text-center font-serif tracking-tight text-slate-500">
              <h2 className="font-sans font-semibold tracking-tighter text-slate-800 text-3xl md:text-4xl mb-4 last:mb-0">
                {t("thanks")}
              </h2>
              <p className="mb-4 italic last:mb-0">{t("footer")}</p>
            </div>
            <div className="flex justify-center gap-9 items-center mt-5 font-semibold tracking-tight text-slate-800">
              <a
                className="hover:underline underline md:no-underline"
                href="https://www.linkedin.com/in/cardosoalvaro/"
                target="_blank"
              >
                Linkedin
              </a>
              <a
                className="hover:underline underline md:no-underline"
                href="https://github.com/AlvaroRCardoso"
                target="_blank"
              >
                Github
              </a>
              <a
                className="hover:underline underline md:no-underline"
                href="./curriculo_alvaro.pdf"
                download="curriculo.pdf"
              >
                {t("curriculum")}
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-3xl text-center text-xs font-semibold tracking-tight text-slate-500 gap-1 flex items-center justify-center">
            {t("developed")}
            <a
              className="text-slate-700"
              href="https://www.linkedin.com/in/cardosoalvaro/"
              target="_blank"
            >
              Álvaro Cardoso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
