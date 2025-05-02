import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [lang, setLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLang = lang === "pt" ? "en" : "pt";
    changeLanguage(newLang);
    setLanguage(newLang);
  };

  return (
    <BrowserRouter>
      <Header t={t} handleChangeLanguage={handleChangeLanguage} lang={lang} />
      <Routes>
        <Route path="/" element={<Projects lang={lang} />} />
        <Route path="/about" element={<About lang={lang} t={t} />} />
        <Route path="/contact" element={<Contact t={t} />} />
      </Routes>
      <Footer t={t} />
    </BrowserRouter>
  );
}

export default App;
