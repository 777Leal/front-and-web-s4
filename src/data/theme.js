// Mesma configuração do script.js original, adaptada para uso nos componentes React.
export const TEMAS = ["tema1", "tema2", "tema3"];

export const THEME_STYLES = {
  tema1: {
    "--hero-fallback-image": 'url("/midia/imgs/Azul/CameraDesconstrucaoAzul.png")',
    "--hero-copy-glow": "rgba(255,255,255,.56)",
    "--bg-color": "#f4fbff", "--bg-card": "#fff", "--bg-elevated": "#e8f5fc",
    "--text-primary": "#17212b", "--text-secondary": "#607586", "--text-highlight": "#42aee3",
    "--button-primary-bg": "#42aee3", "--button-primary-text": "#fff",
    "--card-border": "rgba(66,174,227,.16)", "--shadow-card": "0 4px 24px rgba(46,104,132,.1)",
    "--header-bg-hero": "rgba(255,255,255,.55)", "--header-bg-scroll": "color-mix(in srgb,var(--bg-card) 55%,transparent)",
  },
  tema2: {
    "--hero-fallback-image": 'url("/midia/imgs/Lilas/CameraDesconstrucaoLilas.png")',
    "--hero-copy-glow": "rgba(255,255,255,.56)",
    "--bg-color": "#faf7ff", "--bg-card": "#fff", "--bg-elevated": "#f3eaff",
    "--text-primary": "#241d2e", "--text-secondary": "#766b82", "--text-highlight": "#9b70d6",
    "--button-primary-bg": "#9b70d6", "--button-primary-text": "#fff",
    "--card-border": "rgba(155,112,214,.16)", "--shadow-card": "0 4px 24px rgba(108,72,145,.1)",
    "--header-bg-hero": "rgba(255,255,255,.55)", "--header-bg-scroll": "color-mix(in srgb,var(--bg-card) 55%,transparent)",
  },
  tema3: {
    "--hero-fallback-image": 'url("/midia/imgs/Preto/CameraDesconstrucaoPreto.png")',
    "--hero-copy-glow": "rgba(0,0,0,.72)",
    "--bg-color": "#111214", "--bg-card": "#191b1f", "--bg-elevated": "#22252a",
    "--text-primary": "#f1f2f3", "--text-secondary": "#a6a9ae", "--text-highlight": "#d4d7db",
    "--button-primary-bg": "#d4d7db", "--button-primary-text": "#111214",
    "--card-border": "rgba(212,215,219,.12)", "--shadow-card": "0 4px 28px rgba(0,0,0,.45)",
    "--header-bg-hero": "rgba(255,255,255,.7)", "--header-bg-scroll": "color-mix(in srgb,var(--bg-card) 55%,transparent)",
  },
};

export const VIDEO_SOURCES = {
  tema1: "/midia/videos/VideoInicioLilas.mp4",
  tema2: "/midia/videos/VideoInicioLilas.mp4",
  tema3: "/midia/videos/VideoInicioLilas.mp4",
};

// Imagens de fundo dos 3 cards de solução (reutilizadas também na Galeria,
// exatamente como no script.js original).
export const SOLUCAO_IMAGENS = {
  tema1: {
    camera: "/midia/imgs/Azul/CameraDesconstrucaoAzul.png",
    inclinado: "/midia/imgs/Azul/InclinadoAzul.png",
    smartPop: "/midia/imgs/Azul/SmartPopAzul.png",
    joviEdu: "/midia/imgs/Azul/JoviEduAzul.png",
  },
  tema2: {
    camera: "/midia/imgs/Lilas/CameraDesconstrucaoLilas.png",
    inclinado: "/midia/imgs/Lilas/InclinadoLilas.png",
    smartPop: "/midia/imgs/Lilas/SmartPopLilas.png",
    joviEdu: "/midia/imgs/Lilas/JoviEduLilas.png",
  },
  tema3: {
    camera: "/midia/imgs/Preto/CameraDesconstrucaoPreto.png",
    inclinado: "/midia/imgs/Preto/InclinadoPreto.png",
    smartPop: "/midia/imgs/Preto/SmartPopPreto.png",
    joviEdu: "/midia/imgs/Preto/JoviEduPreto.png",
  },
};

export const TEMA_STORAGE_KEY = "jovi-tema";
