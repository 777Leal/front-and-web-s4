export default function Solucoes({ imagens }) {
  return (
    <section id="problems" className="min-h-screen border-t border-jovi-border px-10 py-[120px] pb-40 max-[700px]:px-6 max-[700px]:py-[100px]">
      <div className="mx-auto mb-14 max-w-[780px] text-center">
        <span className="inline-block text-[.8rem] font-semibold uppercase tracking-[.16em] text-jovi-highlight">Soluções</span>
        <h2 id="solucoes-titulo" className="mt-3.5 text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.15] tracking-[-.02em] text-jovi-primary">Da lousa ao aplicativo, a IA assume o que era manual.</h2>
        <p className="mt-5 text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.7] text-jovi-secondary">
          Cada solução da JOVI ataca uma etapa da rotina: o AdaptAI aprende os hábitos
          do usuário e adapta a câmera automaticamente, o Smart-Pop recomenda o modo
          certo sem exigir configuração, e o JoviEdu transforma o registro em conteúdo
          pronto para estudar.
        </p>
      </div>
      <div className="mx-auto grid max-w-[1400px] grid-cols-3 gap-6 max-[1100px]:grid-cols-2 max-[700px]:grid-cols-1">
        <article className="group relative min-h-[620px] isolate overflow-hidden rounded-2xl border border-jovi-border bg-jovi-card shadow-jovi transition duration-300 hover:-translate-y-1 hover:shadow-xl max-[700px]:min-h-[520px]">
          {imagens?.inclinado && <img className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={encodeURI(imagens.inclinado)} alt="" aria-hidden="true" />}
          <div className="absolute inset-0 z-[1] flex flex-col justify-end bg-gradient-to-t from-black/65 to-transparent p-6">
            <div className="rounded-xl border border-jovi-border bg-jovi-card p-6 shadow-xl">
              <h3 className="mt-1.5 text-xl font-semibold text-jovi-primary">AdaptAI</h3>
              <p className="mt-2 break-words text-[.95rem] font-medium leading-relaxed text-jovi-secondary">
                A IA aprende os hábitos do usuário e adapta a câmera automaticamente,
                priorizando os modos e recursos mais utilizados de acordo com seu
                perfil e preferências.
              </p>
            </div>
          </div>
        </article>
        <article className="group relative min-h-[620px] isolate overflow-hidden rounded-2xl border border-jovi-border bg-jovi-card shadow-jovi transition duration-300 hover:-translate-y-1 hover:shadow-xl max-[700px]:min-h-[520px]">
          {imagens?.smartPop && <img className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={encodeURI(imagens.smartPop)} alt="" aria-hidden="true" />}
          <div className="absolute inset-0 z-[1] flex flex-col justify-end bg-gradient-to-t from-black/65 to-transparent p-6">
            <div className="rounded-xl border border-jovi-border bg-jovi-card p-6 shadow-xl">
              <h3 className="mt-1.5 text-xl font-semibold text-jovi-primary">Smart-Pop</h3>
              <p className="mt-2 break-words text-[.95rem] font-medium leading-relaxed text-jovi-secondary">
                A IA reconhece o ambiente e recomenda o modo mais adequado, mantendo a
                interface limpa, agilizando a troca de modos e reduzindo a poluição visual.
              </p>
            </div>
          </div>
        </article>
        <article className="group relative min-h-[620px] isolate overflow-hidden rounded-2xl border border-jovi-border bg-jovi-card shadow-jovi transition duration-300 hover:-translate-y-1 hover:shadow-xl max-[700px]:min-h-[520px]">
          {imagens?.joviEdu && <img className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={encodeURI(imagens.joviEdu)} alt="" aria-hidden="true" />}
          <div className="absolute inset-0 z-[1] flex flex-col justify-end bg-gradient-to-t from-black/65 to-transparent p-6">
            <div className="rounded-xl border border-jovi-border bg-jovi-card p-6 shadow-xl">
              <h3 className="mt-1.5 text-xl font-semibold text-jovi-primary">JoviEdu</h3>
              <p className="mt-2 break-words text-[.95rem] font-medium leading-relaxed text-jovi-secondary">
                A IA não só tira a foto da lousa com clareza, mas também identifica a
                matéria, organiza em pastas e permite que o usuário tire dúvidas sobre
                aquele conteúdo diretamente pelo app.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
