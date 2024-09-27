import { NavLink } from "react-router-dom";

const Navbar = ({ t }) => {
  return (
    <nav>
      <ul className="flex flex-wrap justify-center gap-10">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-semibold tracking-tight text-slate-800 hover:underline underline"
              : "font-semibold tracking-tight text-slate-800 hover:underline"
          }
          to="/"
        >
          {t("projects")}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-semibold tracking-tight text-slate-800 hover:underline underline"
              : "font-semibold tracking-tight text-slate-800 hover:underline"
          }
          to="/about"
        >
          {t("about")}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-semibold tracking-tight text-slate-800 hover:underline underline"
              : "font-semibold tracking-tight text-slate-800 hover:underline"
          }
          to="/contact"
        >
          {t("contact")}
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
