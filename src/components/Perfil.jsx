const Perfil = ({ t, handleChangeLanguage, lang }) => {
  return (
    <div className="px-4">
      <div className="grid max-w-lg grid-cols-1 justify-items-center gap-8">
        <div className="relative h-40 w-40 overflow-hidden rounded-full bg-slate-300">
          <a href="https://www.instagram.com/cardosoalvaro_/" target="_blak">
            <img alt={t("alt")} src="/me.png" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-2 text-center">
          <h1 className="font-sans font-semibold tracking-tighter text-slate-800 text-3xl md:text-4xl flex items-end justify-center gap-1">
            Álvaro Cardoso
            <button
              type="button"
              className="font-semibold tracking-tight text-lg text-slate-800 hover:underline underline md:no-underline"
              onClick={handleChangeLanguage}
            >
              {lang}
            </button>
          </h1>
          <p className="font-serif text-2xl italic leading-normal tracking-tight text-slate-500">
            {t("header")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
