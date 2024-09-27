import Navbar from "./Navbar";
import Perfil from "./Perfil";

const Header = ({ t, handleChangeLanguage, lang }) => {
  return (
    <header className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-3xl">
        <div className="grid grid-cols-1 justify-items-center gap-20">
          <Navbar t={t} />
          <Perfil
            t={t}
            handleChangeLanguage={handleChangeLanguage}
            lang={lang}
          />
          <hr className="h-px w-1/2 border-0 bg-slate-200 md:max-w-sm"></hr>
        </div>
      </div>
    </header>
  );
};

export default Header;
