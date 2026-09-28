export default function Problema() {
  return (
    <section id="problema" className="border-t border-jovi-border px-10 pb-[100px] pt-[140px] max-[700px]:pt-[100px] max-[700px]:px-6" aria-labelledby="problema-titulo">
      <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-x-6 gap-y-12 max-[700px]:gap-y-8">
        <header className="col-[3/11] text-center max-[1100px]:col-[2/12] max-[700px]:col-[1/-1]">
          <span className="inline-block text-[.8rem] font-semibold uppercase tracking-[.16em] text-jovi-highlight">Problema</span>
          <h2 id="problema-titulo" className="mt-3.5 text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.15] tracking-[-.02em] text-jovi-primary">
            Quando o momento é rápido, a câmera precisa acompanhar.
          </h2>
          <p className="mt-5 text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.7] text-jovi-secondary">
            Na rotina de estudos, uma lousa pode ser apagada em segundos. Em vez de
            procurar foco, brilho e modo de captura, estudantes precisam registrar com
            clareza no primeiro toque.
          </p>
        </header>
        <div className="col-span-full grid grid-cols-3 gap-6 max-[1100px]:grid-cols-2 max-[700px]:grid-cols-1">
          <article className="rounded-2xl border border-jovi-border bg-jovi-card p-8 shadow-jovi transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="mb-3 text-lg font-semibold tracking-tight text-jovi-primary">O conteúdo não espera</h3>
            <p className="text-[.95rem] leading-relaxed text-jovi-secondary">
              Slides, documentos e anotações precisam ser capturados antes que a
              oportunidade passe — sem uma etapa extra de configuração.
            </p>
          </article>
          <article className="rounded-2xl border border-jovi-border bg-jovi-card p-8 shadow-jovi transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="mb-3 text-lg font-semibold tracking-tight text-jovi-primary">Uma foto pode virar um obstáculo</h3>
            <p className="text-[.95rem] leading-relaxed text-jovi-secondary">
              Baixa iluminação, reflexos e foco impreciso deixam textos distantes
              borrados ou escuros, comprometendo a leitura depois da aula.
            </p>
          </article>
          <article className="rounded-2xl border border-jovi-border bg-jovi-card p-8 shadow-jovi transition duration-300 hover:-translate-y-1 hover:shadow-xl max-[1100px]:col-span-full">
            <h3 className="mb-3 text-lg font-semibold tracking-tight text-jovi-primary">Mais controles não significam mais agilidade</h3>
            <p className="text-[.95rem] leading-relaxed text-jovi-secondary">
              Interfaces cheias de botões exigem conhecimento técnico justamente quando
              o usuário só quer abrir a câmera e confiar no resultado.
            </p>
          </article>
        </div>
        <blockquote className="col-[3/11] border-l-[3px] border-jovi-highlight pl-7 text-left max-[1100px]:col-[2/12] max-[700px]:col-[1/-1]">
          <p className="text-[clamp(1.05rem,1.6vw,1.3rem)] font-medium leading-snug tracking-tight text-jovi-primary">
            O desafio não é ensinar fotografia: é fazer a tecnologia entender o
            contexto e entregar uma imagem nítida, legível e pronta para usar.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
