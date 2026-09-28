export default function Problema() {
  return (
    <section id="problema" className="secao-problema" aria-labelledby="problema-titulo">
      <div className="problema-grid">
        <header className="problema-intro">
          <span className="eyebrow">Problema</span>
          <h2 id="problema-titulo" className="problema-titulo">
            Quando o momento é rápido, a câmera precisa acompanhar.
          </h2>
          <p className="problema-texto">
            Na rotina de estudos, uma lousa pode ser apagada em segundos. Em vez de
            procurar foco, brilho e modo de captura, estudantes precisam registrar com
            clareza no primeiro toque.
          </p>
        </header>
        <div className="problema-cards">
          <article className="problema-card">
            <h3>O conteúdo não espera</h3>
            <p>
              Slides, documentos e anotações precisam ser capturados antes que a
              oportunidade passe — sem uma etapa extra de configuração.
            </p>
          </article>
          <article className="problema-card">
            <h3>Uma foto pode virar um obstáculo</h3>
            <p>
              Baixa iluminação, reflexos e foco impreciso deixam textos distantes
              borrados ou escuros, comprometendo a leitura depois da aula.
            </p>
          </article>
          <article className="problema-card problema-card--texto">
            <h3>Mais controles não significam mais agilidade</h3>
            <p>
              Interfaces cheias de botões exigem conhecimento técnico justamente quando
              o usuário só quer abrir a câmera e confiar no resultado.
            </p>
          </article>
        </div>
        <blockquote className="problema-lacuna">
          <p>
            O desafio não é ensinar fotografia: é fazer a tecnologia entender o
            contexto e entregar uma imagem nítida, legível e pronta para usar.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
