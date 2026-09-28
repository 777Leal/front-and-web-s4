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
 * Os estilos da página usam utilitários Tailwind e as cores dinâmicas do tema JOVI.
 */
export default function Materiais() {
  const { materiais, carregando, erro, recarregar } = useMateriais(9);

  return (
    <div className="min-h-screen bg-jovi-background px-6 pb-20 pt-10 text-jovi-primary">
      <div className="mx-auto mb-8 flex max-w-[1100px] items-center justify-between">
        <Link href="/" className="font-semibold opacity-75 transition-opacity hover:opacity-100">
          ← Voltar para a Home
        </Link>
      </div>

      <header className="mx-auto mb-10 max-w-[1100px]">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-jovi-highlight">Demo técnica</span>
        <h1 className="my-2 text-3xl font-semibold">Central de materiais (consumo de API)</h1>
        <p className="max-w-[640px] leading-relaxed opacity-[.85]">
          Esta página existe para demonstrar, de forma isolada da landing page
          original, o roteamento por arquivos do Next.js, um hook customizado
          (useMateriais) e o consumo de API via fetch. Os itens abaixo vêm de
          uma API pública de demonstração e representam, na prática, os
          "materiais capturados" que o JoviEdu organizaria automaticamente.
        </p>
      </header>

      {carregando && (
        <div className="mx-auto mb-6 max-w-[1100px] rounded-xl bg-jovi-elevated p-4">Carregando materiais da API...</div>
      )}

      {!carregando && erro && (
        <div className="mx-auto mb-6 max-w-[1100px] rounded-xl border border-red-500 bg-jovi-elevated p-4">
          <p>Não foi possível carregar os materiais: {erro}</p>
          <button type="button" className="mt-3 rounded-lg bg-jovi-highlight px-4 py-2 font-semibold text-white transition hover:brightness-110" onClick={recarregar}>
            Tentar novamente
          </button>
        </div>
      )}

      {!carregando && !erro && (
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {materiais.map((item, indice) => (
            <article className="overflow-hidden rounded-[14px] bg-jovi-card shadow-lg" key={item.id}>
              <img className="block h-[180px] w-full object-cover" src={item.miniatura} alt={item.titulo} loading="lazy" />
              <div className="p-4">
                <span className="mb-1 block text-xs opacity-60">
                  {String(indice + 1).padStart(2, "0")} / material
                </span>
                <p className="text-[0.95rem] capitalize leading-snug">{item.titulo}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
