import equipe from "../data/equipe.js";

export default function Equipe() {
  return (
    <section id="beneficios" className="secao-equipe" aria-labelledby="equipe-titulo">
      <div className="equipe-container">
        <header className="equipe-intro">
          <span className="eyebrow">Nossa equipe</span>
          <h2 id="equipe-titulo">As pessoas por trás da Drakon.</h2>
          <p>
            Cinco integrantes, diferentes responsabilidades e um mesmo objetivo:
            transformar a câmera em uma experiência mais inteligente.
          </p>
        </header>
        <div className="equipe-grid">
          {equipe.map((membro) => (
            <a
              key={membro.nome}
              className="equipe-card"
              href={membro.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir LinkedIn de ${membro.nome}`}
            >
              <div className="equipe-foto" role="img" aria-label={`Foto de ${membro.nome}`}>
                <img src={membro.foto} alt={membro.nome} />
              </div>
              <div className="equipe-info">
                <span className="equipe-numero">{membro.numero}</span>
                <h3>{membro.nome}</h3>
                <p className="equipe-funcao">{membro.funcao}</p>
                <p className="equipe-descricao">{membro.descricao}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
