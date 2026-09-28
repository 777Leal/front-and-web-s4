export default function Publico() {
  return (
    <section id="objetivos" className="border-t border-jovi-border px-10 py-[150px] max-[700px]:px-6 max-[700px]:py-[100px]" aria-labelledby="publico-titulo">
      <div className="mx-auto grid max-w-[1280px] grid-cols-12 gap-6 max-[900px]:grid-cols-1 max-[700px]:flex max-[700px]:flex-col max-[700px]:gap-5">
        <header className="col-span-6 max-[900px]:col-span-full">
          <span className="inline-block text-[.8rem] font-semibold uppercase tracking-[.16em] text-jovi-highlight">Público-alvo</span>
          <h2 id="publico-titulo" className="mt-3.5 text-[clamp(2.3rem,5vw,4.2rem)] font-medium leading-[.98] tracking-[-.055em] text-jovi-primary">Para quem precisa registrar antes que o momento passe.</h2>
          <p className="mt-5 text-base leading-[1.7] text-jovi-secondary">
            Entre uma aula, o estágio e o próximo deslocamento, cada registro precisa
            acontecer no tempo certo. As nossas soluções entendem que essa rotina não
            oferece uma segunda chance, por isso elas ajudam a transformar lousas,
            slides e documentos em imagens nítidas antes que o conteúdo desapareça.
          </p>
        </header>
        <figure
          className="relative col-span-6 row-span-2 min-h-[420px] overflow-hidden rounded-[28px] border border-jovi-border bg-jovi-elevated shadow-jovi max-[900px]:col-span-full max-[900px]:aspect-video max-[700px]:order-2 max-[700px]:min-h-0"
          role="img"
          aria-label="Espaço reservado para a imagem do público-alvo"
        >
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/midia/imgs/publicoAlvo.png"
            alt="Imagem do público-alvo, representando uma estudante universitária em movimento, carregando livros e uma mochila, simbolizando a rotina agitada de quem precisa registrar informações rapidamente."
          />
          <figcaption className="absolute bottom-5 left-5 rounded-full bg-black/50 px-4 py-2 text-sm text-white backdrop-blur">Estudante full-time.</figcaption>
        </figure>
        <article className="col-span-7 rounded-3xl border border-jovi-border bg-jovi-card p-8 shadow-jovi max-[900px]:col-span-full max-[700px]:order-3 max-[700px]:p-6">
          <p className="text-2xl font-semibold text-jovi-primary">Mariana, 20</p>
          <p className="mt-2 text-jovi-secondary">Universitária e estagiária em grandes centros urbanos.</p>
          <dl className="mt-7 grid grid-cols-3 gap-5 max-[700px]:grid-cols-1">
            <div className="border-t-2 border-jovi-highlight pt-3.5">
              <dt className="text-xs font-semibold uppercase tracking-widest text-jovi-highlight">Rotina</dt>
              <dd className="mt-2 text-sm leading-relaxed text-jovi-secondary">Faculdade, estágio e vida social no mesmo dia.</dd>
            </div>
            <div className="border-t-2 border-jovi-highlight pt-3.5">
              <dt className="text-xs font-semibold uppercase tracking-widest text-jovi-highlight">Registros</dt>
              <dd className="mt-2 text-sm leading-relaxed text-jovi-secondary">Lousas, slides, documentos e momentos espontâneos.</dd>
            </div>
            <div className="border-t-2 border-jovi-highlight pt-3.5">
              <dt className="text-xs font-semibold uppercase tracking-widest text-jovi-highlight">Expectativa</dt>
              <dd className="mt-2 text-sm leading-relaxed text-jovi-secondary">Abrir, enquadrar e confiar no resultado — sem ajustes manuais.</dd>
            </div>
          </dl>
        </article>
        <blockquote className="col-span-full border-t border-jovi-border px-10 pt-7 text-center max-[700px]:order-4 max-[700px]:border-t-0 max-[700px]:border-l-[3px] max-[700px]:px-0 max-[700px]:py-2 max-[700px]:pl-5 max-[700px]:text-left">
          <p className="mx-auto max-w-[940px] text-[clamp(1.05rem,1.65vw,1.3rem)] font-medium leading-snug tracking-tight text-jovi-primary">
            “Eu não quero aprender a configurar uma câmera. Quero salvar o que
            importa, com clareza, na primeira tentativa.”
          </p>
        </blockquote>
      </div>
    </section>
  );
}
