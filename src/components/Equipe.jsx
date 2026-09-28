import equipe from "../data/equipe.js";

export default function Equipe() {
  return (
    <section id="beneficios" className="relative border-t border-jovi-border px-10 py-[150px] max-[1000px]:px-8 max-[1000px]:py-[120px] max-[700px]:px-6 max-[700px]:py-[100px]" aria-labelledby="equipe-titulo">
      <div className="mx-auto max-w-[1180px]">
        <header className="mx-auto mb-16 max-w-[820px] text-center max-[700px]:mb-10 max-[700px]:text-left">
          <span className="inline-block text-[.8rem] font-semibold uppercase tracking-[.16em] text-jovi-highlight">Nossa equipe</span>
          <h2 id="equipe-titulo" className="mt-3.5 text-[clamp(2.3rem,5vw,4.2rem)] font-medium leading-[.98] tracking-[-.055em] text-jovi-primary">As pessoas por trás da Drakon.</h2>
          <p className="mx-auto mt-5 max-w-[620px] text-[1.05rem] leading-[1.7] text-jovi-secondary max-[700px]:ml-0">
            Cinco integrantes, diferentes responsabilidades e um mesmo objetivo:
            transformar a câmera em uma experiência mais inteligente.
          </p>
        </header>
        <div className="flex flex-col gap-[22px] max-[700px]:gap-4">
          {equipe.map((membro) => (
            <a
              key={membro.nome}
              className="group flex min-h-[320px] items-stretch overflow-hidden rounded-[20px] border border-jovi-border bg-jovi-card text-inherit shadow-jovi transition duration-300 even:flex-row-reverse hover:-translate-y-1.5 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-jovi-highlight max-[700px]:min-h-0 max-[700px]:flex-col max-[700px]:even:flex-col"
              href={membro.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir LinkedIn de ${membro.nome}`}
            >
              <div className="relative grid flex-[0_0_42%] place-items-center overflow-hidden max-[1000px]:flex-[0_0_38%] max-[700px]:min-h-[240px] max-[700px]:flex-auto" role="img" aria-label={`Foto de ${membro.nome}`}>
                <img className="absolute inset-0 z-0 block h-full w-full object-cover object-[50%_30%]" src={membro.foto} alt={membro.nome} />
              </div>
              <div className="flex flex-1 flex-col justify-center gap-1.5 p-[clamp(28px,4vw,56px)] max-[700px]:p-6">
                <span className="block text-[.72rem] font-bold uppercase tracking-[.14em] text-jovi-highlight">{membro.numero}</span>
                <h3 className="mt-2 text-[clamp(1.5rem,2.6vw,2.1rem)] font-semibold tracking-tight text-jovi-primary">{membro.nome}</h3>
                <p className="mt-2 text-[.9rem] font-semibold text-jovi-highlight">{membro.funcao}</p>
                <p className="mt-3.5 max-w-[60ch] text-[.92rem] leading-relaxed text-jovi-secondary">{membro.descricao}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
