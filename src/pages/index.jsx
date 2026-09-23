import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Problema from "../components/Problema.jsx";
import Solucoes from "../components/Solucoes.jsx";
import Publico from "../components/Publico.jsx";
import Galeria from "../components/Galeria.jsx";
import Equipe from "../components/Equipe.jsx";
import Contato from "../components/Contato.jsx";
import { SOLUCAO_IMAGENS, TEMA_STORAGE_KEY, TEMAS, VIDEO_SOURCES } from "../data/theme.js";

function lerTemaSalvo() {
  if (typeof window === "undefined") return "tema1";
  const salvo = window.localStorage.getItem(TEMA_STORAGE_KEY);
  return TEMAS.includes(salvo) ? salvo : "tema1";
}

export default function IndexPage() {
  const [theme, setTheme] = useState(lerTemaSalvo);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("problema");

  // Refs para os elementos manipulados diretamente pelo efeito de scroll do
  // hero, como no script.js original (video scrubbing, fade de texto, etc).
  const headerRef = useRef(null);
  const heroTrackRef = useRef(null);
  const heroVideoRef = useRef(null);
  const vejaRef = useRef(null);
  const entendaRef = useRef(null);
  const captureRef = useRef(null);
  const descricaoRef = useRef(null);
  const scrollProgressRef = useRef(null);

  // TEMA — aplica a classe no <body> e persiste no localStorage.
  useEffect(() => {
    document.body.classList.remove("tema1", "tema2", "tema3");
    document.body.classList.add(theme);
    window.localStorage.setItem(TEMA_STORAGE_KEY, theme);
  }, [theme]);

  // TEMA — troca o vídeo do hero apenas quando a fonte realmente muda.
  useEffect(() => {
    const video = heroVideoRef.current;
    const novaFonte = VIDEO_SOURCES[theme];
    if (!video || !novaFonte) return;
    if (video.dataset.src === novaFonte) return;

    video.classList.remove("is-ready");
    video.dataset.src = novaFonte;
    video.src = novaFonte;
    video.load();
  }, [theme]);

  // HERO — vídeo controlado pelo scroll + fade do texto + barra de progresso
  // + destaque do link ativo no menu + classe "past-hero" no header.
  // Porte direto da lógica de scripts/script.js original para refs React.
  useEffect(() => {
    const heroVideo = heroVideoRef.current;
    const heroTrack = heroTrackRef.current;
    const headerEl = headerRef.current;
    const veja = vejaRef.current;
    const entenda = entendaRef.current;
    const capture = captureRef.current;
    const descricao = descricaoRef.current;
    const scrollProgressBar = scrollProgressRef.current;

    if (!heroVideo || !heroTrack) return;

    const clamp01 = (x) => Math.min(1, Math.max(0, x));
    const PASSO_VIDEO = 0.1;

    function quantizar(valor, passo) {
      return clamp01(Math.round(valor / passo) * passo);
    }

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function smoothstep(edge0, edge1, x) {
      const t = clamp01((x - edge0) / (edge1 - edge0));
      return t * t * (3 - 2 * t);
    }

    function faixaDaPalavra(progress, inicio, fim, fimDestaque, fimEsmaecer) {
      const entrada = smoothstep(inicio, fim, progress);
      const destaque = fimEsmaecer
        ? clamp01(entrada - smoothstep(fimDestaque, fimEsmaecer, progress))
        : entrada;
      return { in: entrada, active: destaque };
    }

    function aplicarFaixa(el, faixa) {
      if (!el) return;
      el.style.setProperty("--in", faixa.in.toFixed(3));
      el.style.setProperty("--active", faixa.active.toFixed(3));
    }

    function atualizarTexto(progress) {
      aplicarFaixa(veja, faixaDaPalavra(progress, 0, 0.08, 0.24, 0.34));
      aplicarFaixa(entenda, faixaDaPalavra(progress, 0.2, 0.28, 0.46, 0.56));
      aplicarFaixa(capture, faixaDaPalavra(progress, 0.42, 0.5, 1, null));

      if (descricao) {
        descricao.style.setProperty("--in", smoothstep(0.8, 0.92, progress).toFixed(3));
      }
    }

    let duration = 0;
    let ultimoProgressoQuantizado = null;
    let seekEmAndamento = false;

    function onLoadedMetadata() {
      duration = heroVideo.duration || 0;
      atualizarHero();
    }
    function onPlay() {
      heroVideo.pause();
    }
    function onSeeking() {
      seekEmAndamento = true;
    }
    function onSeeked() {
      seekEmAndamento = false;
    }

    heroVideo.addEventListener("loadedmetadata", onLoadedMetadata);
    heroVideo.addEventListener("play", onPlay);
    heroVideo.addEventListener("seeking", onSeeking);
    heroVideo.addEventListener("seeked", onSeeked);

    function atualizarHero() {
      if (!duration) return;

      const rect = heroTrack.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const scrolled = -rect.top;

      const progress = clamp01(scrollable > 0 ? scrolled / scrollable : 0);
      const progressoVideo = quantizar(progress, PASSO_VIDEO);

      if (progressoVideo !== ultimoProgressoQuantizado && !seekEmAndamento) {
        ultimoProgressoQuantizado = progressoVideo;
        const alvo = easeInOutCubic(progressoVideo) * duration;
        heroVideo.currentTime = Math.min(alvo, duration - 0.05);
      }

      atualizarTexto(progress);
    }

    function atualizarBarraDeProgresso() {
      if (!scrollProgressBar) return;
      const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
      const progresso = alturaTotal > 0 ? (window.scrollY / alturaTotal) * 100 : 0;
      scrollProgressBar.style.width = `${clamp01(progresso / 100) * 100}%`;
    }

    function atualizarMenuAtivo() {
      const sections = document.querySelectorAll("section[id]");
      let atual = "";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 150) {
          atual = section.id;
        }
      });
      setActiveLink((anterior) => (anterior === atual ? anterior : atual));
    }

    function atualizarLogoPorScroll() {
      if (!headerEl) return;
      const aindaSobreHero = heroTrack.getBoundingClientRect().bottom > 100;
      headerEl.classList.toggle("past-hero", !aindaSobreHero);
    }

    let precisaAtualizar = false;
    function agendarAtualizacao() {
      if (precisaAtualizar) return;
      precisaAtualizar = true;
      requestAnimationFrame(() => {
        atualizarHero();
        atualizarBarraDeProgresso();
        atualizarMenuAtivo();
        atualizarLogoPorScroll();
        precisaAtualizar = false;
      });
    }

    if (heroVideo.readyState >= 1) {
      duration = heroVideo.duration;
    }

    window.addEventListener("scroll", agendarAtualizacao, { passive: true });
    window.addEventListener("resize", agendarAtualizacao, { passive: true });
    agendarAtualizacao();

    return () => {
      heroVideo.removeEventListener("loadedmetadata", onLoadedMetadata);
      heroVideo.removeEventListener("play", onPlay);
      heroVideo.removeEventListener("seeking", onSeeking);
      heroVideo.removeEventListener("seeked", onSeeked);
      window.removeEventListener("scroll", agendarAtualizacao);
      window.removeEventListener("resize", agendarAtualizacao);
    };
  }, []);

  // MENU — fecha o menu mobile ao redimensionar para telas maiores.
  useEffect(() => {
    function fecharAoAlargar() {
      if (window.innerWidth > 700) setMenuOpen(false);
    }
    window.addEventListener("resize", fecharAoAlargar, { passive: true });
    return () => window.removeEventListener("resize", fecharAoAlargar);
  }, []);

  const imagensDoTema = SOLUCAO_IMAGENS[theme];

  return (
    <>
      <Head>
        <title>Jovi</title>
      </Head>
      <Header
        ref={headerRef}
        theme={theme}
        onTemaChange={setTheme}
        activeLink={activeLink}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((aberto) => !aberto)}
        onLinkClick={() => setMenuOpen(false)}
        scrollProgressRef={scrollProgressRef}
      />
      <main>
        <Hero
          heroTrackRef={heroTrackRef}
          heroVideoRef={heroVideoRef}
          vejaRef={vejaRef}
          entendaRef={entendaRef}
          captureRef={captureRef}
          descricaoRef={descricaoRef}
        />
        <Problema />
        <Solucoes imagens={imagensDoTema} />
        <Publico />
        <Galeria imagens={imagensDoTema} />
        <Equipe />
        <Contato />
      </main>
    </>
  );
}
