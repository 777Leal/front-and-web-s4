export default function Hero({
  heroTrackRef,
  heroVideoRef,
  vejaRef,
  entendaRef,
  captureRef,
  descricaoRef,
}) {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero-scroll-track" ref={heroTrackRef}>
        <div className="hero-sticky">
          <div className="hero-fallback" aria-hidden="true" />
          <video
            id="heroScrollVideo"
            ref={heroVideoRef}
            className="hero-video"
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          />
          <div className="hero-copy">
            <h1 id="hero-title" className="hero-title">
              <span id="veja" ref={vejaRef}>
                Veja.
              </span>
              <span id="entenda" ref={entendaRef}>
                Entenda.
              </span>
              <span id="capture" ref={captureRef}>
                Capture.
              </span>
            </h1>
            <p id="heroDescricao" className="hero-descricao" ref={descricaoRef}>
              Uma câmera inteligente que entende o contexto antes mesmo de você
              apertar o botão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
