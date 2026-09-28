export default function Contato() {
  return (
    <section id="dashboard-demo" className="relative isolate overflow-hidden border-t border-jovi-border bg-[radial-gradient(circle_at_8%_18%,color-mix(in_srgb,var(--text-highlight)_12%,transparent),transparent_28%),radial-gradient(circle_at_92%_84%,color-mix(in_srgb,var(--text-highlight)_10%,transparent),transparent_28%),var(--bg-color)] px-10 pb-[170px] pt-[150px] max-[700px]:px-6 max-[700px]:pb-[120px] max-[700px]:pt-[100px]" aria-labelledby="contato-titulo">
      <div className="pointer-events-none absolute -right-32 -top-[70px] h-[190px] w-[500px] rotate-[-16deg] rounded-[50%] border border-jovi-highlight/50 opacity-45 max-[700px]:h-[130px] max-[700px]:w-[300px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-20 -left-40 h-[190px] w-[500px] rotate-[18deg] rounded-[50%] border border-jovi-highlight/50 opacity-45 max-[700px]:h-[130px] max-[700px]:w-[300px]" aria-hidden="true" />
      <div className="relative z-[2] mx-auto grid max-w-[1240px] grid-cols-[minmax(0,1fr)_minmax(420px,.86fr)] items-center gap-[clamp(50px,7vw,100px)] max-[1000px]:grid-cols-1 max-[1000px]:gap-[52px]">
        <header className="pt-2.5 max-[700px]:pt-0">
          <span className="inline-block text-[.8rem] font-semibold uppercase tracking-[.16em] text-jovi-highlight">Contato</span>
          <h2 id="contato-titulo" className="mt-3 max-w-[720px] text-[clamp(2.8rem,6vw,5.6rem)] font-medium leading-[.95] tracking-[-.065em] text-jovi-primary max-[700px]:text-[clamp(2.55rem,13vw,4.2rem)]">Vamos levar essa ideia para o próximo passo.</h2>
          <p className="mt-7 max-w-[600px] text-[clamp(1rem,1.4vw,1.12rem)] leading-[1.7] text-jovi-secondary max-[700px]:mt-[22px]">
            Quer conhecer melhor a proposta, conversar sobre a solução ou acompanhar o
            projeto? Fale com a equipe da Drakon.
          </p>
          <div className="mt-[38px] grid max-w-[610px] gap-2.5 max-[700px]:mt-[30px]" aria-label="Canais de contato">
            <a href="mailto:drakon@gmail.com" className="grid grid-cols-[44px_minmax(0,1fr)_auto] items-center gap-3.5 rounded-2xl border border-jovi-border bg-jovi-card/70 p-[15px_16px] text-inherit shadow-jovi backdrop-blur transition hover:translate-x-1.5 hover:border-jovi-highlight max-[700px]:grid-cols-[40px_minmax(0,1fr)_auto] max-[700px]:gap-[11px] max-[700px]:p-[13px]">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-jovi-highlight/40 text-sm font-bold text-jovi-highlight max-[700px]:h-9 max-[700px]:w-9" aria-hidden="true">
                ✉
              </span>
              <span className="grid min-w-0 gap-[3px]">
                <span className="text-[.66rem] font-bold uppercase tracking-[.13em] text-jovi-secondary">E-mail</span>
                <strong className="break-all text-[.92rem] font-semibold text-jovi-primary">drakon@gmail.com</strong>
              </span>
              <span className="text-lg text-jovi-highlight" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href="#" className="grid grid-cols-[44px_minmax(0,1fr)_auto] items-center gap-3.5 rounded-2xl border border-jovi-border bg-jovi-card/70 p-[15px_16px] text-inherit shadow-jovi backdrop-blur transition hover:translate-x-1.5 hover:border-jovi-highlight max-[700px]:grid-cols-[40px_minmax(0,1fr)_auto] max-[700px]:gap-[11px] max-[700px]:p-[13px]">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-jovi-highlight/40 text-sm font-bold text-jovi-highlight max-[700px]:h-9 max-[700px]:w-9" aria-hidden="true">
                @
              </span>
              <span className="grid min-w-0 gap-[3px]">
                <span className="text-[.66rem] font-bold uppercase tracking-[.13em] text-jovi-secondary">Instagram</span>
                <strong className="break-all text-[.92rem] font-semibold text-jovi-primary">@drakon</strong>
              </span>
              <span className="text-lg text-jovi-highlight" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href="#" className="grid grid-cols-[44px_minmax(0,1fr)_auto] items-center gap-3.5 rounded-2xl border border-jovi-border bg-jovi-card/70 p-[15px_16px] text-inherit shadow-jovi backdrop-blur transition hover:translate-x-1.5 hover:border-jovi-highlight max-[700px]:grid-cols-[40px_minmax(0,1fr)_auto] max-[700px]:gap-[11px] max-[700px]:p-[13px]">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-jovi-highlight/40 text-sm font-bold text-jovi-highlight max-[700px]:h-9 max-[700px]:w-9" aria-hidden="true">
                in
              </span>
              <span className="grid min-w-0 gap-[3px]">
                <span className="text-[.66rem] font-bold uppercase tracking-[.13em] text-jovi-secondary">LinkedIn</span>
                <strong className="break-all text-[.92rem] font-semibold text-jovi-primary">JOVI — Projeto</strong>
              </span>
              <span className="text-lg text-jovi-highlight" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </header>
        <div className="relative rounded-[28px] border border-jovi-highlight/25 bg-jovi-card/90 p-[30px] shadow-[0_30px_80px_rgba(0,0,0,.18)] backdrop-blur-2xl max-[1000px]:max-w-[760px] max-[700px]:rounded-[22px] max-[700px]:px-[18px] max-[700px]:py-[22px]">
          <div className="flex items-start justify-between gap-5 border-b border-jovi-border pb-[22px]">
            <div>
              <span className="text-[.68rem] font-bold uppercase tracking-[.14em] text-jovi-highlight">Fale com a equipe</span>
              <h3 className="mt-2 text-2xl tracking-tight text-jovi-primary max-[700px]:text-[1.35rem]">Envie uma mensagem.</h3>
            </div>
          </div>
          <form className="grid gap-[15px] pt-[22px]" action="mailto:seuemail@exemplo.com" method="post" encType="text/plain">
            <div className="grid grid-cols-2 gap-3 max-[700px]:grid-cols-1 max-[700px]:gap-[15px]">
              <div className="grid gap-[7px]">
                <label className="text-[.78rem] font-bold text-jovi-primary" htmlFor="contato-nome">Nome</label>
                <input
                  className="w-full resize-y rounded-[13px] border border-jovi-border bg-jovi-background/50 px-3.5 py-[13px] text-[.9rem] text-jovi-primary outline-none transition placeholder:text-jovi-secondary/70 focus:border-jovi-highlight focus:bg-jovi-elevated focus:ring-[3px] focus:ring-jovi-highlight/15"
                  id="contato-nome"
                  name="nome"
                  type="text"
                  placeholder="Como podemos chamar você?"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="grid gap-[7px]">
                <label className="text-[.78rem] font-bold text-jovi-primary" htmlFor="contato-email">E-mail</label>
                <input
                  className="w-full resize-y rounded-[13px] border border-jovi-border bg-jovi-background/50 px-3.5 py-[13px] text-[.9rem] text-jovi-primary outline-none transition placeholder:text-jovi-secondary/70 focus:border-jovi-highlight focus:bg-jovi-elevated focus:ring-[3px] focus:ring-jovi-highlight/15"
                  id="contato-email"
                  name="email"
                  type="email"
                  placeholder="voce@email.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>
            <div className="grid gap-[7px]">
              <label className="text-[.78rem] font-bold text-jovi-primary" htmlFor="contato-assunto">
                Assunto <span className="font-normal text-jovi-secondary">(opcional)</span>
              </label>
              <input
                className="w-full resize-y rounded-[13px] border border-jovi-border bg-jovi-background/50 px-3.5 py-[13px] text-[.9rem] text-jovi-primary outline-none transition placeholder:text-jovi-secondary/70 focus:border-jovi-highlight focus:bg-jovi-elevated focus:ring-[3px] focus:ring-jovi-highlight/15"
                id="contato-assunto"
                name="assunto"
                type="text"
                placeholder="Sobre o que você quer falar?"
              />
            </div>
            <div className="grid gap-[7px]">
              <label className="text-[.78rem] font-bold text-jovi-primary" htmlFor="contato-mensagem">Mensagem</label>
              <textarea
                className="min-h-[140px] w-full resize-y rounded-[13px] border border-jovi-border bg-jovi-background/50 px-3.5 py-[13px] text-[.9rem] text-jovi-primary outline-none transition placeholder:text-jovi-secondary/70 focus:border-jovi-highlight focus:bg-jovi-elevated focus:ring-[3px] focus:ring-jovi-highlight/15"
                id="contato-mensagem"
                name="mensagem"
                rows="6"
                placeholder="Escreva sua mensagem..."
                required
              />
            </div>
            <button type="submit" className="mt-1 flex min-h-[54px] w-full items-center justify-between gap-4 rounded-[13px] bg-[var(--button-primary-bg)] px-[18px] text-[.9rem] font-bold text-[var(--button-primary-text)] transition hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg">
              <span>Enviar mensagem</span>
              <span aria-hidden="true">↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
