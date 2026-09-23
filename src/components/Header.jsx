import { forwardRef } from "react";
import Link from "next/link";

const LINKS = [
  { href: "#problema", label: "Problema" },
  { href: "#problems", label: "Soluções" },
  { href: "#objetivos", label: "Público-Alvo" },
  { href: "#tecnologia", label: "Galeria" },
  { href: "#beneficios", label: "Nossa Equipe" },
  { href: "#dashboard-demo", label: "Contato" },
];

// Link de rota (next/link) para a página de demonstração de API,
// exibido junto aos demais itens do menu com a mesma classe visual.
const ROTA_MATERIAIS = { to: "/materiais", label: "Materiais (API)" };

const Header = forwardRef(function Header(
  { theme, onTemaChange, activeLink, menuOpen, onToggleMenu, onLinkClick, scrollProgressRef },
  headerRef
) {
  return (
    <>
      <div className="scroll-progress" ref={scrollProgressRef} />
      <header ref={headerRef}>
        <div className="header">
          {/* Logo padrão */}
          <img src="/midia/imgs/logo.png" className="logo logo-padrao" alt="JOVI" />
          {/* Logo branca */}
          <img src="/midia/imgs/logo2.png" className="logo logo-branca" alt="JOVI" />
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="menu-principal"
            onClick={onToggleMenu}
          >
            <span className="sr-only">Abrir menu de navegação</span>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
          <nav
            className={`menu${menuOpen ? " is-open" : ""}`}
            id="menu-principal"
            aria-label="Navegação principal"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`menu-link${activeLink === link.href.slice(1) ? " active" : ""}`}
                onClick={onLinkClick}
              >
                {link.label}
              </a>
            ))}
            <Link href={ROTA_MATERIAIS.to} className="menu-link" onClick={onLinkClick}>
              {ROTA_MATERIAIS.label}
            </Link>
          </nav>
          <div className="theme-switcher">
            <input
              type="radio"
              id="tema1"
              name="tema"
              checked={theme === "tema1"}
              onChange={() => onTemaChange("tema1")}
            />
            <label htmlFor="tema1">Blue</label>
            <input
              type="radio"
              id="tema2"
              name="tema"
              checked={theme === "tema2"}
              onChange={() => onTemaChange("tema2")}
            />
            <label htmlFor="tema2">Purple</label>
            <input
              type="radio"
              id="tema3"
              name="tema"
              checked={theme === "tema3"}
              onChange={() => onTemaChange("tema3")}
            />
            <label htmlFor="tema3">Black</label>
          </div>
        </div>
      </header>
    </>
  );
});

export default Header;
