// O CSS global importa Tailwind e as regras específicas da landing page.
import "../styles/style.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
