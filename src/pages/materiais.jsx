import Link from "next/link";
import { useMateriais } from "../hooks/useMateriais.js";

/**
 * Página de demonstração técnica de:
 *  - Roteamento (rota /materiais via file-system routing do Next.js);
 *  - Hook customizado (useMateriais, em src/hooks/useMateriais.js);
 *  - Consumo de API (fetch para a API pública JSONPlaceholder).
 *
 * Simula a "Central de materiais" do JoviEdu: uma listagem dos registros
 * organizados automaticamente pela IA depois da captura.
 *
 * O CSS desta página (src/styles/materiais.css) é importado globalmente em
 * src/pages/_app.jsx, pois o Next.js só permite import de CSS "global"
 * (não-module) dentro do arquivo _app.
 */
export default function Materiais() {
  const { materiais, carregando, erro, recarregar } = useMateriais(9);

  return (
    <div className="materiais-pagina">
      <div className="materiais-topo">
        <Link href="/" className="materiais-voltar">
          ← Voltar para a Home
        </Link>
      </div>

      <header className="materiais-cabecalho">
        <span className="eyebrow">Demo técnica</span>
        <h1>Central de materiais (consumo de API)</h1>
        <p>
          Esta página existe para demonstrar, de forma isolada da landing page
          original, o roteamento por arquivos do Next.js, um hook customizado
          (useMateriais) e o consumo de API via fetch. Os itens abaixo vêm de
          uma API pública de demonstração e representam, na prática, os
          "materiais capturados" que o JoviEdu organizaria automaticamente.
        </p>
      </header>

      {carregando && (
        <div className="materiais-status">Carregando materiais da API...</div>
      )}

      {!carregando && erro && (
        <div className="materiais-status materiais-status--erro">
          <p>Não foi possível carregar os materiais: {erro}</p>
          <button type="button" className="materiais-recarregar" onClick={recarregar}>
            Tentar novamente
          </button>
        </div>
      )}

      {!carregando && !erro && (
        <div className="materiais-grid">
          {materiais.map((item, indice) => (
            <article className="materiais-card" key={item.id}>
              <img src={item.miniatura} alt={item.titulo} loading="lazy" />
              <div className="materiais-card-corpo">
                <span className="materiais-card-numero">
                  {String(indice + 1).padStart(2, "0")} / material
                </span>
                <p className="materiais-card-titulo">{item.titulo}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
