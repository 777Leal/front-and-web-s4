export default function Solucoes({ imagens }) {
  return (
    <section id="problems" className="secao-solucoes">
      <div className="solucoes-intro">
        <span className="eyebrow">Soluções</span>
        <h2 id="solucoes-titulo">Da lousa ao aplicativo, a IA assume o que era manual.</h2>
        <p className="solucoes-texto">
          Cada solução da JOVI ataca uma etapa da rotina: o AdaptAI aprende os hábitos
          do usuário e adapta a câmera automaticamente, o Smart-Pop recomenda o modo
          certo sem exigir configuração, e o JoviEdu transforma o registro em conteúdo
          pronto para estudar.
        </p>
      </div>
      <div className="solucoes-grid">
        <article className="solucao-card">
          <div
            className="solucao-imagem"
            aria-hidden="true"
            style={{ backgroundImage: imagens?.camera ? `url("${imagens.camera}")` : undefined }}
          />
          <div className="solucao-overlay">
            <h3 className="solucao-titulo-fixo">AdaptAI</h3>
            <div className="solucao-texto">
              <h3 className="solucao-titulo">AdaptAI</h3>
              <p className="solucao-descricao">
                A IA aprende os hábitos do usuário e adapta a câmera automaticamente,
                priorizando os modos e recursos mais utilizados de acordo com seu
                perfil e preferências.
              </p>
            </div>
          </div>
        </article>
        <article className="solucao-card">
          <div
            className="solucao-imagem"
            aria-hidden="true"
            style={{ backgroundImage: imagens?.smartPop ? `url("${imagens.smartPop}")` : undefined }}
          />
          <div className="solucao-overlay">
            <h3 className="solucao-titulo-fixo">Smart-Pop</h3>
            <div className="solucao-texto">
              <h3 className="solucao-titulo">Smart-Pop</h3>
              <p className="solucao-descricao">
                A IA reconhece o ambiente e faz recomendações do modo que mais
                compativel com o mesmo, deixando a tela limpa, agilizando a troca dos
                modos e acabando com a confusão visual.
              </p>
            </div>
          </div>
        </article>
        <article className="solucao-card">
          <div
            className="solucao-imagem"
            aria-hidden="true"
            style={{ backgroundImage: imagens?.joviEdu ? `url("${imagens.joviEdu}")` : undefined }}
          />
          <div className="solucao-overlay">
            <h3 className="solucao-titulo-fixo">JoviEdu</h3>
            <div className="solucao-texto">
              <h3 className="solucao-titulo">JoviEdu</h3>
              <p className="solucao-descricao">
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
