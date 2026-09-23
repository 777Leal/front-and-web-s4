export default function Galeria({ imagens }) {
  return (
    <section id="tecnologia" className="secao-galeria" aria-labelledby="galeria-titulo">
      <div className="galeria-container">
        <header className="galeria-intro">
          <span className="eyebrow">Galeria</span>
          <h2 id="galeria-titulo">A JOVI em cada detalhe.</h2>
          <p>
            Uma visão da experiência que une inteligência contextual, interface
            minimalista e recursos pensados para a rotina real.
          </p>
        </header>
        <div className="galeria-grid">
          <figure className="galeria-card galeria-card--destaque">
            <div
              className="galeria-imagem"
              aria-hidden="true"
              style={{ backgroundImage: imagens?.camera ? `url("${imagens.camera}")` : undefined }}
            />
            <figcaption className="galeria-caption">
              <span className="galeria-numero">01</span>
              <div>
                <p className="galeria-kicker">Experiência JOVI</p>
                <h3>Precisão desde a lente.</h3>
                <p>
                  Uma câmera preparada para entender o que está diante dela e entregar
                  um registro mais claro.
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="galeria-card galeria-card--horizontal">
            <div
              className="galeria-imagem"
              aria-hidden="true"
              style={{ backgroundImage: imagens?.smartPop ? `url("${imagens.smartPop}")` : undefined }}
            />
            <figcaption className="galeria-caption">
              <span className="galeria-numero">02</span>
              <div>
                <p className="galeria-kicker">Contexto</p>
                <h3>Smart-Pop no momento certo.</h3>
                <p>Recomendações contextuais sem poluir a tela.</p>
              </div>
            </figcaption>
          </figure>
          <figure className="galeria-card galeria-card--horizontal">
            <div
              className="galeria-imagem"
              aria-hidden="true"
              style={{ backgroundImage: imagens?.joviEdu ? `url("${imagens.joviEdu}")` : undefined }}
            />
            <figcaption className="galeria-caption">
              <span className="galeria-numero">03</span>
              <div>
                <p className="galeria-kicker">Estudo contínuo</p>
                <h3>JOVI Edu transforma registro em conteúdo.</h3>
                <p>
                  O que foi capturado pode continuar sendo consultado, organizado e
                  compreendido.
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="galeria-features" aria-label="Destaques da experiência JOVI">
          <article className="galeria-feature">
            <span>01</span>
            <h3>IA contextual</h3>
            <p>A tecnologia considera o ambiente antes de sugerir o próximo passo.</p>
          </article>
          <article className="galeria-feature">
            <span>02</span>
            <h3>UX minimalista</h3>
            <p>Menos controles visíveis para que a captura aconteça sem complicação.</p>
          </article>
          <article className="galeria-feature">
            <span>03</span>
            <h3>Foco acadêmico</h3>
            <p>JOVI Edu amplia o valor da foto depois do momento da captura.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
