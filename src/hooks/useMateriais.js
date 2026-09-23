import { useEffect, useState } from "react";

/**
 * Hook customizado de consumo de API.
 *
 * Busca uma lista de "materiais capturados" para simular, em formato de
 * demonstração técnica, a funcionalidade do JoviEdu de organizar em pastas
 * o conteúdo registrado pelo usuário (lousas, slides, documentos).
 *
 * Como o projeto ainda não possui um backend próprio, o hook consome a API
 * pública gratuita JSONPlaceholder (https://jsonplaceholder.typicode.com),
 * que não exige chave de acesso e é amplamente usada para prototipagem.
 * Basta trocar `API_URL` por um endpoint real quando o backend do JOVI
 * existir — o restante do hook (estados de loading/erro/dados) não precisa
 * mudar.
 *
 * @param {number} limite quantidade de materiais a buscar
 * @returns {{ materiais: Array, carregando: boolean, erro: string|null, recarregar: () => void }}
 */
const API_URL = "https://jsonplaceholder.typicode.com/albums/1/photos";

export function useMateriais(limite = 9) {
  const [materiais, setMateriais] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [tentativa, setTentativa] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function buscarMateriais() {
      setCarregando(true);
      setErro(null);

      try {
        const resposta = await fetch(API_URL, { signal: controller.signal });

        if (!resposta.ok) {
          throw new Error(`Falha ao buscar materiais (HTTP ${resposta.status})`);
        }

        const dados = await resposta.json();

        const materiaisFormatados = dados.slice(0, limite).map((item) => ({
          id: item.id,
          titulo: item.title,
          miniatura: item.thumbnailUrl,
          imagem: item.url,
        }));

        setMateriais(materiaisFormatados);
      } catch (err) {
        if (err.name !== "AbortError") {
          setErro(err.message || "Não foi possível carregar os materiais.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setCarregando(false);
        }
      }
    }

    buscarMateriais();

    return () => controller.abort();
  }, [limite, tentativa]);

  const recarregar = () => setTentativa((atual) => atual + 1);

  return { materiais, carregando, erro, recarregar };
}

export default useMateriais;
