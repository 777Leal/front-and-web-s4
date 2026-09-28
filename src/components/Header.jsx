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
      <div className="fixed left-0 top-0 z-[9999] h-0.5 w-0 bg-jovi-highlight shadow-[0_0_8px_var(--text-highlight)] transition-[width] duration-100" ref={scrollProgressRef} />
      <header className="group" ref={headerRef}>
        <div className="fixed left-1/2 top-5 z-[1000] flex w-[calc(100%-20px)] max-w-[1400px] -translate-x-1/2 items-center justify-between rounded-[70px] border border-jovi-border bg-[var(--header-bg-hero)] px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,.25),inset_0_1px_0_rgba(255,255,255,.05)] backdrop-blur-xl transition-colors group-[.past-hero]:bg-[var(--header-bg-scroll)] max-[700px]:top-3 max-[700px]:w-[calc(100%-24px)] max-[700px]:px-4 max-[700px]:py-2">
          {/* Logo padrão */}
          <img src="/midia/imgs/logo.png" className={`ml-10 block h-auto w-[85px] max-[700px]:ml-0 max-[700px]:w-[68px] ${theme === "tema3" ? "group-[.past-hero]:hidden" : ""}`} alt="JOVI" />
          {/* Logo branca */}
          <img src="/midia/imgs/logo2.png" className={`ml-10 hidden h-auto w-[85px] ${theme === "tema3" ? "group-[.past-hero]:block" : ""}`} alt="JOVI" />
          <button
            className="order-2 hidden h-11 w-11 shrink-0 cursor-pointer rounded-full border border-jovi-border bg-jovi-card text-jovi-primary max-[700px]:block"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="menu-principal"
            onClick={onToggleMenu}
          >
            <span className="sr-only">Abrir menu de navegação</span>
            <span aria-hidden="true" className={`mx-auto my-1 block h-0.5 w-[17px] rounded-full bg-current transition-transform ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`} />
            <span aria-hidden="true" className={`mx-auto my-1 block h-0.5 w-[17px] rounded-full bg-current transition-transform ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
          <nav
            className={`flex items-center gap-10 max-[700px]:absolute max-[700px]:left-0 max-[700px]:right-0 max-[700px]:top-[calc(100%+10px)] max-[700px]:grid max-[700px]:gap-0 max-[700px]:rounded-[22px] max-[700px]:border max-[700px]:border-jovi-border max-[700px]:bg-jovi-card/95 max-[700px]:p-2.5 max-[700px]:shadow-xl max-[700px]:backdrop-blur-xl max-[700px]:transition-all ${menuOpen ? "max-[700px]:visible max-[700px]:translate-y-0 max-[700px]:opacity-100" : "max-[700px]:invisible max-[700px]:-translate-y-2 max-[700px]:opacity-0"}`}
            id="menu-principal"
            aria-label="Navegação principal"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-[.95rem] font-semibold tracking-[.3px] text-jovi-secondary transition-colors after:absolute after:-bottom-2.5 after:left-1/2 after:h-[3px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-jovi-highlight after:transition-[width] hover:text-jovi-primary hover:after:w-full max-[700px]:rounded-xl max-[700px]:px-3.5 max-[700px]:py-3 max-[700px]:text-base max-[700px]:hover:bg-jovi-elevated max-[700px]:after:hidden ${activeLink === link.href.slice(1) ? "text-jovi-primary after:w-full" : ""}`}
                onClick={onLinkClick}
              >
                {link.label}
              </a>
            ))}
            <Link href={ROTA_MATERIAIS.to} className="relative text-[.95rem] font-semibold tracking-[.3px] text-jovi-secondary transition-colors after:absolute after:-bottom-2.5 after:left-1/2 after:h-[3px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-jovi-highlight after:transition-[width] hover:text-jovi-primary hover:after:w-full max-[700px]:rounded-xl max-[700px]:px-3.5 max-[700px]:py-3 max-[700px]:text-base max-[700px]:after:hidden" onClick={onLinkClick}>
              {ROTA_MATERIAIS.label}
            </Link>
          </nav>
          <div className="order-3 flex gap-1 rounded-full border border-white/10 bg-white/[.04] p-1">
            <input
              className="peer/tema1 sr-only"
              type="radio"
              id="tema1"
              name="tema"
              checked={theme === "tema1"}
              onChange={() => onTemaChange("tema1")}
            />
            <label className="cursor-pointer rounded-full px-[18px] py-2.5 text-[.85rem] font-semibold text-jovi-secondary transition hover:bg-white/[.06] hover:text-jovi-primary peer-checked/tema1:bg-[#42aee3] peer-checked/tema1:text-white peer-checked/tema1:shadow-[0_0_20px_rgba(66,174,227,.45)] max-[700px]:h-[25px] max-[700px]:w-[25px] max-[700px]:bg-[#42aee3] max-[700px]:p-0 max-[700px]:text-[0px]" htmlFor="tema1">Blue</label>
            <input
              className="peer/tema2 sr-only"
              type="radio"
              id="tema2"
              name="tema"
              checked={theme === "tema2"}
              onChange={() => onTemaChange("tema2")}
            />
            <label className="cursor-pointer rounded-full px-[18px] py-2.5 text-[.85rem] font-semibold text-jovi-secondary transition hover:bg-white/[.06] hover:text-jovi-primary peer-checked/tema2:bg-[#9b70d6] peer-checked/tema2:text-white max-[700px]:h-[25px] max-[700px]:w-[25px] max-[700px]:bg-[#9b70d6] max-[700px]:p-0 max-[700px]:text-[0px]" htmlFor="tema2">Purple</label>
            <input
              className="peer/tema3 sr-only"
              type="radio"
              id="tema3"
              name="tema"
              checked={theme === "tema3"}
              onChange={() => onTemaChange("tema3")}
            />
            <label className="cursor-pointer rounded-full px-[18px] py-2.5 text-[.85rem] font-semibold text-jovi-secondary transition hover:bg-white/[.06] hover:text-jovi-primary peer-checked/tema3:bg-[#24262b] peer-checked/tema3:text-white max-[700px]:h-[25px] max-[700px]:w-[25px] max-[700px]:bg-[#24262b] max-[700px]:p-0 max-[700px]:text-[0px]" htmlFor="tema3">Black</label>
          </div>
        </div>
      </header>
    </>
  );
});

export default Header;
