export default function Hero({
  theme,
  heroTrackRef,
  heroVideoRef,
  vejaRef,
  entendaRef,
  captureRef,
  descricaoRef,
}) {
  return (
    <section id="hero" aria-labelledby="hero-title">
      <div className="relative h-[300vh] max-[700px]:h-[220svh]" ref={heroTrackRef}>
        <div className="sticky top-0 isolate h-screen min-h-[620px] w-full overflow-hidden bg-[#e9e8eb] max-[700px]:h-[100svh] max-[700px]:min-h-0">
          <div className="absolute inset-0 z-0 bg-[#e9e8eb] bg-[image:var(--hero-fallback-image)] bg-cover bg-center bg-no-repeat" aria-hidden="true" />
          <video
            id="heroScrollVideo"
            ref={heroVideoRef}
            className="pointer-events-none absolute inset-0 z-[1] h-full w-full object-cover object-center opacity-0 transition-opacity duration-300 [&.is-ready]:opacity-100 max-[600px]:opacity-0 motion-reduce:opacity-0"
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          />
          <div className={`pointer-events-none absolute left-1/2 top-[42%] z-[5] w-full -translate-x-1/2 -translate-y-1/2 px-10 text-center max-[700px]:top-1/2 max-[700px]:px-6 ${theme === "tema3" ? "[text-shadow:none]" : "[text-shadow:0_10px_42px_var(--hero-copy-glow)]"}`}>
            <h1 id="hero-title" className="m-0 flex items-center justify-center gap-[clamp(20px,4vw,70px)] whitespace-nowrap text-[clamp(3rem,7vw,7rem)] font-normal leading-[.95] tracking-[-.06em] max-[600px]:flex-col max-[600px]:gap-0.5 max-[600px]:whitespace-normal max-[600px]:text-[clamp(3.2rem,15vw,5.5rem)] max-[600px]:leading-[.88]">
              <span id="veja" className={`[--in:0] [--active:0] inline-block transition-[opacity,transform,color] duration-100 [transform:translateY(calc((1_-_var(--in))_*_28px))_scale(calc(.94_+_var(--in)_*_.06_+_var(--active)_*_.05))] [opacity:var(--in)] ${theme === "tema3" ? "text-black" : "text-jovi-primary"}`} ref={vejaRef}>
                Veja.
              </span>
              <span id="entenda" className={`[--in:0] [--active:0] inline-block transition-[opacity,transform,color] duration-100 [transform:translateY(calc((1_-_var(--in))_*_28px))_scale(calc(.94_+_var(--in)_*_.06_+_var(--active)_*_.05))] [opacity:var(--in)] ${theme === "tema3" ? "text-black" : "text-jovi-primary"}`} ref={entendaRef}>
                Entenda.
              </span>
              <span id="capture" className={`[--in:0] [--active:0] inline-block transition-[opacity,transform,color] duration-100 [transform:translateY(calc((1_-_var(--in))_*_28px))_scale(calc(.94_+_var(--in)_*_.06_+_var(--active)_*_.05))] [opacity:var(--in)] ${theme === "tema3" ? "text-black" : "text-jovi-primary"}`} ref={captureRef}>
                Capture.
              </span>
            </h1>
            <p id="heroDescricao" className={`[--in:0] mx-auto mt-[70px] max-w-[650px] text-[clamp(1rem,1.3vw,1.2rem)] leading-[1.6] [opacity:var(--in)] [transform:translateY(calc((1_-_var(--in))_*_25px))] transition-[opacity,transform] duration-300 max-[700px]:mt-[42px] max-[600px]:max-w-[330px] max-[600px]:text-[.9rem] ${theme === "tema3" ? "text-black" : "text-jovi-primary"}`} ref={descricaoRef}>
              Uma câmera inteligente que entende o contexto antes mesmo de você
              apertar o botão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
