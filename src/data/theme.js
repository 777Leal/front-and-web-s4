// Mesma configuração do script.js original, adaptada para uso nos componentes React.
export const TEMAS = ["tema1", "tema2", "tema3"];

export const VIDEO_SOURCES = {
  tema1: "/midia/videos/VideoInicioLilas.mp4",
  tema2: "/midia/videos/VideoInicioLilas.mp4",
  tema3: "/midia/videos/VideoInicioLilas.mp4",
};

// Imagens de fundo dos 3 cards de solução (reutilizadas também na Galeria,
// exatamente como no script.js original).
export const SOLUCAO_IMAGENS = {
  tema1: {
    camera: "/midia/imgs/Azul/CameraDesconstruçãoAzul.png",
    smartPop: "/midia/imgs/Azul/SmartPopAzul.png",
    joviEdu: "/midia/imgs/Azul/JoviEduAzul.png",
  },
  tema2: {
    camera: "/midia/imgs/Lilas/CameraDesconstruçãoLilas.png",
    smartPop: "/midia/imgs/Lilas/SmartPopLilas.png",
    joviEdu: "/midia/imgs/Lilas/JoviEduLilas.png",
  },
  tema3: {
    camera: "/midia/imgs/Preto/CameraDesconstruçãoPreto.png",
    smartPop: "/midia/imgs/Preto/SmartPopPreto.png",
    joviEdu: "/midia/imgs/Preto/JoviEduPreto.png",
  },
};

export const TEMA_STORAGE_KEY = "jovi-tema";
