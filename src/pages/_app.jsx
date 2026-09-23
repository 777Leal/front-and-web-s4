// CSS "global" (não-module) só pode ser importado aqui, no _app do Next.js.
// Ambos os arquivos abaixo são exatamente os mesmos usados na versão Vite,
// sem nenhuma alteração de conteúdo.
import "../styles/style.css";
import "../styles/materiais.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
