export default function Publico() {
  return (
    <section id="objetivos" className="secao-publico" aria-labelledby="publico-titulo">
      <div className="publico-grid">
        <header className="publico-intro">
          <span className="eyebrow">Público-alvo</span>
          <h2 id="publico-titulo">Para quem precisa registrar antes que o momento passe.</h2>
          <p>
            Entre uma aula, o estágio e o próximo deslocamento, cada registro precisa
            acontecer no tempo certo. As nossas soluções entendem que essa rotina não
            oferece uma segunda chance, por isso elas ajudam a transformar lousas,
            slides e documentos em imagens nítidas antes que o conteúdo desapareça.
          </p>
        </header>
        <figure
          className="publico-imagem"
          role="img"
          aria-label="Espaço reservado para a imagem do público-alvo"
        >
          <img
            src="/midia/imgs/publicoAlvo.png"
            alt="Imagem do público-alvo, representando uma estudante universitária em movimento, carregando livros e uma mochila, simbolizando a rotina agitada de quem precisa registrar informações rapidamente."
          />
          <figcaption>Estudante full-time.</figcaption>
        </figure>
        <article className="publico-persona">
          <p className="publico-nome">Mariana, 20</p>
          <p className="publico-papel">Universitária e estagiária em grandes centros urbanos.</p>
          <dl className="publico-dados">
            <div>
              <dt>Rotina</dt>
              <dd>Faculdade, estágio e vida social no mesmo dia.</dd>
            </div>
            <div>
              <dt>Registros</dt>
              <dd>Lousas, slides, documentos e momentos espontâneos.</dd>
            </div>
            <div>
              <dt>Expectativa</dt>
              <dd>Abrir, enquadrar e confiar no resultado — sem ajustes manuais.</dd>
            </div>
          </dl>
        </article>
        <blockquote className="publico-citacao">
          <p>
            “Eu não quero aprender a configurar uma câmera. Quero salvar o que
            importa, com clareza, na primeira tentativa.”
          </p>
        </blockquote>
      </div>
    </section>
  );
}
