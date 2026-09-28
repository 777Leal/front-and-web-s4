export default function Contato() {
  return (
    <section id="dashboard-demo" className="secao-contato" aria-labelledby="contato-titulo">
      <div className="contato-decor contato-decor--top" aria-hidden="true" />
      <div className="contato-decor contato-decor--bottom" aria-hidden="true" />
      <div className="contato-container">
        <header className="contato-intro">
          <span className="eyebrow">Contato</span>
          <h2 id="contato-titulo">Vamos levar essa ideia para o próximo passo.</h2>
          <p className="contato-descricao">
            Quer conhecer melhor a proposta, conversar sobre a solução ou acompanhar o
            projeto? Fale com a equipe da Drakon.
          </p>
          <div className="contato-canais" aria-label="Canais de contato">
            <a href="mailto:drakon@gmail.com" className="contato-canal">
              <span className="contato-canal-icon" aria-hidden="true">
                ✉
              </span>
              <span className="contato-canal-copy">
                <span className="contato-canal-label">E-mail</span>
                <strong>drakon@gmail.com</strong>
              </span>
              <span className="contato-canal-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href="#" className="contato-canal">
              <span className="contato-canal-icon" aria-hidden="true">
                @
              </span>
              <span className="contato-canal-copy">
                <span className="contato-canal-label">Instagram</span>
                <strong>@drakon</strong>
              </span>
              <span className="contato-canal-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href="#" className="contato-canal">
              <span className="contato-canal-icon" aria-hidden="true">
                in
              </span>
              <span className="contato-canal-copy">
                <span className="contato-canal-label">LinkedIn</span>
                <strong>JOVI — Projeto</strong>
              </span>
              <span className="contato-canal-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </header>
        <div className="contato-form-shell">
          <div className="contato-form-top">
            <div>
              <span className="contato-form-index">Fale com a equipe</span>
              <h3>Envie uma mensagem.</h3>
            </div>
          </div>
          <form className="contato-form" action="mailto:seuemail@exemplo.com" method="post" encType="text/plain">
            <div className="contato-form-row">
              <div className="contato-field">
                <label htmlFor="contato-nome">Nome</label>
                <input
                  id="contato-nome"
                  name="nome"
                  type="text"
                  placeholder="Como podemos chamar você?"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="contato-field">
                <label htmlFor="contato-email">E-mail</label>
                <input
                  id="contato-email"
                  name="email"
                  type="email"
                  placeholder="voce@email.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>
            <div className="contato-field">
              <label htmlFor="contato-assunto">
                Assunto <span>(opcional)</span>
              </label>
              <input
                id="contato-assunto"
                name="assunto"
                type="text"
                placeholder="Sobre o que você quer falar?"
              />
            </div>
            <div className="contato-field">
              <label htmlFor="contato-mensagem">Mensagem</label>
              <textarea
                id="contato-mensagem"
                name="mensagem"
                rows="6"
                placeholder="Escreva sua mensagem..."
                required
              />
            </div>
            <button type="submit" className="contato-botao">
              <span>Enviar mensagem</span>
              <span aria-hidden="true">↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
