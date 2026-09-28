export default function Galeria({ imagens }) {
  return (
    <section id="tecnologia" className="relative overflow-hidden border-t border-jovi-border px-10 py-[150px] max-[900px]:px-8 max-[900px]:py-[120px] max-[700px]:px-6 max-[700px]:py-[100px]" aria-labelledby="galeria-titulo">
      <div className="relative z-[1] mx-auto max-w-[1280px]">
        <header className="mx-auto mb-16 max-w-[820px] text-center max-[700px]:mb-10 max-[700px]:text-left">
          <span className="inline-block text-[.8rem] font-semibold uppercase tracking-[.16em] text-jovi-highlight">Galeria</span>
          <h2 id="galeria-titulo" className="mt-3.5 text-[clamp(2.3rem,5vw,4.2rem)] font-medium leading-[.98] tracking-[-.055em] text-jovi-primary">A JOVI em cada detalhe.</h2>
          <p className="mx-auto mt-5 max-w-[610px] text-[clamp(1rem,1.4vw,1.12rem)] leading-[1.7] text-jovi-secondary max-[700px]:ml-0">
            Uma visão da experiência que une inteligência contextual, interface
            minimalista e recursos pensados para a rotina real.
          </p>
        </header>
        <div className="grid grid-cols-12 grid-rows-[repeat(2,minmax(260px,1fr))] gap-5 max-[900px]:grid-rows-[repeat(2,minmax(230px,1fr))] max-[700px]:grid-cols-1 max-[700px]:grid-rows-none max-[700px]:gap-3.5">
          <figure className="group relative col-[1/8] row-span-2 isolate m-0 min-h-[570px] overflow-hidden rounded-[22px] border border-jovi-border bg-jovi-elevated shadow-jovi before:absolute before:inset-0 before:z-[1] before:bg-gradient-to-t before:from-black/90 before:via-black/20 before:to-transparent max-[900px]:min-h-[500px] max-[700px]:col-auto max-[700px]:row-auto max-[700px]:min-h-[480px]">
            {imagens?.camera && <img className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={encodeURI(imagens.camera)} alt="" aria-hidden="true" />}
            <figcaption className="absolute bottom-6 left-6 right-6 z-10 grid grid-cols-[auto_1fr] items-end gap-4 text-white max-[700px]:bottom-[18px] max-[700px]:left-[18px] max-[700px]:right-[18px] max-[700px]:grid-cols-[34px_1fr] max-[700px]:gap-3">
              <span className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/40 bg-black/20 text-xs font-bold tracking-widest backdrop-blur-xl max-[700px]:h-[34px] max-[700px]:w-[34px]">01</span>
              <div>
                <p className="mb-1.5 text-[.68rem] font-bold uppercase tracking-[.15em] text-white/75">Experiência JOVI</p>
                <h3 className="text-[clamp(1.25rem,2.1vw,1.8rem)] font-semibold leading-tight tracking-tight">Precisão desde a lente.</h3>
                <p className="mt-2 max-w-[480px] text-[.92rem] leading-relaxed text-white/85">
                  Uma câmera preparada para entender o que está diante dela e entregar
                  um registro mais claro.
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="group relative col-[8/-1] isolate m-0 min-h-[260px] overflow-hidden rounded-[22px] border border-jovi-border bg-jovi-elevated shadow-jovi before:absolute before:inset-0 before:z-[1] before:bg-gradient-to-t before:from-black/90 before:via-black/20 before:to-transparent max-[700px]:col-auto max-[700px]:row-auto max-[700px]:min-h-[360px]">
            <div
              className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
              aria-hidden="true"
              style={{ backgroundImage: imagens?.smartPop ? `url("${imagens.smartPop}")` : undefined }}
            />
            <figcaption className="absolute bottom-6 left-6 right-6 z-10 grid grid-cols-[auto_1fr] items-end gap-4 text-white max-[700px]:bottom-[18px] max-[700px]:left-[18px] max-[700px]:right-[18px] max-[700px]:grid-cols-[34px_1fr] max-[700px]:gap-3">
              <span className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/40 bg-black/20 text-xs font-bold tracking-widest backdrop-blur-xl max-[700px]:h-[34px] max-[700px]:w-[34px]">02</span>
              <div>
                <p className="mb-1.5 text-[.68rem] font-bold uppercase tracking-[.15em] text-white/75">Contexto</p>
                <h3 className="text-[clamp(1.25rem,2.1vw,1.8rem)] font-semibold leading-tight tracking-tight">Smart-Pop no momento certo.</h3>
                <p className="mt-2 max-w-[480px] text-[.92rem] leading-relaxed text-white/85">Recomendações contextuais sem poluir a tela.</p>
              </div>
            </figcaption>
          </figure>
          <figure className="group relative col-[8/-1] isolate m-0 min-h-[260px] overflow-hidden rounded-[22px] border border-jovi-border bg-jovi-elevated shadow-jovi before:absolute before:inset-0 before:z-[1] before:bg-gradient-to-t before:from-black/90 before:via-black/20 before:to-transparent max-[700px]:col-auto max-[700px]:row-auto max-[700px]:min-h-[360px]">
            <div
              className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
              aria-hidden="true"
              style={{ backgroundImage: imagens?.joviEdu ? `url("${imagens.joviEdu}")` : undefined }}
            />
            <figcaption className="absolute bottom-6 left-6 right-6 z-10 grid grid-cols-[auto_1fr] items-end gap-4 text-white max-[700px]:bottom-[18px] max-[700px]:left-[18px] max-[700px]:right-[18px] max-[700px]:grid-cols-[34px_1fr] max-[700px]:gap-3">
              <span className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/40 bg-black/20 text-xs font-bold tracking-widest backdrop-blur-xl max-[700px]:h-[34px] max-[700px]:w-[34px]">03</span>
              <div>
                <p className="mb-1.5 text-[.68rem] font-bold uppercase tracking-[.15em] text-white/75">Estudo contínuo</p>
                <h3 className="text-[clamp(1.25rem,2.1vw,1.8rem)] font-semibold leading-tight tracking-tight">JOVI Edu transforma registro em conteúdo.</h3>
                <p className="mt-2 max-w-[480px] text-[.92rem] leading-relaxed text-white/85">
                  O que foi capturado pode continuar sendo consultado, organizado e
                  compreendido.
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="mt-7 grid grid-cols-3 border-y border-jovi-border max-[900px]:grid-cols-1" aria-label="Destaques da experiência JOVI">
          <article className="relative p-7 max-[700px]:px-0 max-[700px]:py-5">
            <span className="text-[.68rem] font-bold tracking-[.15em] text-jovi-highlight">01</span>
            <h3 className="mt-2.5 text-base text-jovi-primary">IA contextual</h3>
            <p className="mt-2 text-sm leading-relaxed text-jovi-secondary">A tecnologia considera o ambiente antes de sugerir o próximo passo.</p>
          </article>
          <article className="relative border-l border-jovi-border p-7 max-[900px]:border-l-0 max-[900px]:border-t max-[700px]:px-0 max-[700px]:py-5">
            <span className="text-[.68rem] font-bold tracking-[.15em] text-jovi-highlight">02</span>
            <h3 className="mt-2.5 text-base text-jovi-primary">UX minimalista</h3>
            <p className="mt-2 text-sm leading-relaxed text-jovi-secondary">Menos controles visíveis para que a captura aconteça sem complicação.</p>
          </article>
          <article className="relative border-l border-jovi-border p-7 max-[900px]:border-l-0 max-[900px]:border-t max-[700px]:px-0 max-[700px]:py-5">
            <span className="text-[.68rem] font-bold tracking-[.15em] text-jovi-highlight">03</span>
            <h3 className="mt-2.5 text-base text-jovi-primary">Foco acadêmico</h3>
            <p className="mt-2 text-sm leading-relaxed text-jovi-secondary">JOVI Edu amplia o valor da foto depois do momento da captura.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
