import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ t }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const resetStatusMessage = () => {
    setStatusMessage(
      <>
        Enviar mensagem{" "}
        <span aria-hidden="true" className="text-xl">
          →
        </span>
      </>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Preencha todos os campos!");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Email inválido!");
      return;
    }

    setIsSending(true);

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_c6uk4c8",
        "template_20tqdjq",
        templateParams,
        "IlJRFIOWnULCRqiQ9"
      )
      .then(
        (response) => {
          resetForm();
          setTimeout(resetStatusMessage, 5000);
          alert("Mensagem enviada com sucesso!");
        },
        (error) => {
          resetForm();
          setTimeout(resetStatusMessage, 5000);
          alert("Erro ao enviar mensagem!");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <label>
            <span className="text-sm text-slate-500">{t("name")}</span>
            <input
              type="text"
              required
              placeholder="Álvaro Cardoso"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full transition rounded-none border-b border-slate-200 py-3 pl-3 pr-7 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-400"
            />
          </label>
          <label>
            <span className="text-sm text-slate-500">{t("email")}</span>
            <input
              type="email"
              required
              placeholder="alvaro.rc@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full transition rounded-none border-b border-slate-200 py-3 pl-3 pr-7 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-400"
            />
          </label>
          <label>
            <span className="text-sm text-slate-500">{t("message")}</span>
          </label>
          <textarea
            required
            placeholder={t("placeholder")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="h-40 w-full transition resize-none rounded-none border-b border-slate-200 py-3 pl-3 pr-7 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-400"
          />
          <button
            type="submit"
            className={`ml-auto inline-flex items-center gap-2 font-semibold tracking-tight text-slate-800 ${
              isSending ? "opacity-50 cursor-not-allowed" : null
            }`}
            disabled={isSending}
          >
            <span className="hover:underline">
              <>
                {t("send")}
                <span aria-hidden="true" className="text-xl">
                  →
                </span>
              </>
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
