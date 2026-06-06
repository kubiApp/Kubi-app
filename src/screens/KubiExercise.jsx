import { useEffect } from "react";

const injectFonts = () => {
  if (document.getElementById("kubi-fonts")) return;
  const link = document.createElement("link");
  link.id = "kubi-fonts";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Baloo+2:wght@700;800&display=swap";
  document.head.appendChild(link);
};

const CSS = `
  @keyframes keFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
  @keyframes kePulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.6)} }
  @keyframes keRipple { 0%{transform:scale(.85);opacity:.7} 100%{transform:scale(1.45);opacity:0} }

  .ke-root{font-family:'Nunito',sans-serif;background:#1a237e;min-height:100vh;display:flex;justify-content:center;align-items:center;position:relative;overflow-x:hidden}
  .ke-root::before{content:'';position:fixed;inset:0;background:radial-gradient(ellipse 80% 50% at 50% 0%,#3949ab33 0%,transparent 65%);pointer-events:none}
  .ke-shell{position:relative;z-index:1;width:360px;min-height:780px;background:#1a237e;border-radius:44px;box-shadow:0 0 0 2px rgba(255,255,255,.08),0 24px 60px rgba(0,0,0,.6);display:flex;flex-direction:column;overflow:hidden}
  .ke-avatar{width:46px;height:46px;border-radius:50%;background:#f57c00;border:2px solid #ff9800;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(255,152,0,.35);margin:10px 20px 0;flex-shrink:0}
  .ke-avatar svg{width:24px;height:24px;fill:white}
  .ke-content{flex:1;display:flex;flex-direction:column;align-items:center;padding:16px 20px 0}
  .ke-tv{margin-bottom:12px;animation:keFloat 3.5s ease-in-out infinite}
  .ke-tv svg{width:110px;height:110px}
  .ke-desafio{font-family:'Baloo 2',cursive;font-size:13px;font-weight:800;color:#ff9800;letter-spacing:1px;text-transform:uppercase;margin-bottom:2px}
  .ke-instrucao{font-family:'Baloo 2',cursive;font-size:16px;font-weight:800;color:white;margin-bottom:20px}
  .ke-frase{width:100%;background:#2c3a9e;border-radius:14px;padding:14px 18px;display:flex;align-items:center;gap:12px;border:1px solid rgba(255,255,255,.1);box-shadow:0 4px 16px rgba(0,0,0,.25);cursor:pointer;transition:transform .15s;margin-bottom:24px}
  .ke-frase:hover{transform:scale(1.01)}
  .ke-play{width:34px;height:34px;flex-shrink:0;background:rgba(255,255,255,.12);border-radius:50%;display:flex;align-items:center;justify-content:center}
  .ke-play svg{width:14px;height:14px;fill:white;margin-left:2px}
  .ke-frase-text{font-family:'Baloo 2',cursive;font-size:15px;font-weight:700;color:white}
  .ke-steps{width:100%;display:flex;flex-direction:column;gap:0}
  .ke-step{border-radius:12px;padding:13px 16px;display:flex;align-items:center;gap:12px;font-size:14px;font-weight:700}
  .ke-step svg{width:18px;height:18px;flex-shrink:0}
  .ke-arrow{align-self:center;margin:4px 0;opacity:.5}
  .ke-arrow svg{width:18px;height:18px;stroke:white;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
  .ke-listen {background:#283593;border:1.5px solid rgba(255,255,255,.15);color:white}
  .ke-listen svg{fill:white}
  .ke-analyze{background:#6a1b9a;border:1.5px solid rgba(186,104,200,.4);color:white}
  .ke-analyze svg{fill:white}
  .ke-result {background:#2e7d32;border:1.5px solid rgba(102,187,106,.4);color:white}
  .ke-result svg{fill:#a5d6a7}
  .ke-nota{margin-left:auto;font-family:'Baloo 2',cursive;font-size:15px;font-weight:800;color:#a5d6a7}
  .ke-pulse{width:8px;height:8px;border-radius:50%;background:#26c6da;animation:kePulse 1s ease-in-out infinite;flex-shrink:0;margin-left:auto}
  .ke-bottombar{display:flex;align-items:center;justify-content:space-between;padding:16px 24px 24px;flex-shrink:0}
  .ke-nav{width:50px;height:50px;background:#2c3a9e;border:1.5px solid rgba(255,255,255,.15);border-radius:14px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:transform .15s,background .2s}
  .ke-nav:hover{background:#3549b8;transform:scale(1.05)}
  .ke-nav svg{width:20px;height:20px;stroke:white;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
  .ke-nav-orange{background:#f57c00;border-color:#ff9800;box-shadow:0 4px 14px rgba(255,152,0,.4)}
  .ke-fab{position:relative;width:58px;height:58px;background:linear-gradient(145deg,#ff9800,#f57c00);border-radius:50%;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 6px 20px rgba(255,152,0,.4),0 0 0 6px rgba(255,152,0,.1);transition:transform .15s}
  .ke-fab::before{content:'';position:absolute;inset:-8px;border-radius:50%;border:2px solid rgba(255,152,0,.2);animation:keRipple 2s ease-out infinite}
  .ke-fab:hover{transform:scale(1.06)}
  .ke-fab svg{width:24px;height:24px;fill:white}
`;

const MicPath = () => (
  <path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4zm6.5 9a1 1 0 1 1 2 0 8.5 8.5 0 0 1-7.5 8.46V21h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2.54A8.5 8.5 0 0 1 3.5 10a1 1 0 1 1 2 0 6.5 6.5 0 0 0 13 0z" />
);

// status: "idle" | "listening" | "analyzing" | "done"
// score: número (ex: 10)
export default function KubiExercise({
  desafio = "Desafio 01",
  instrucao = "Leia a Frase Abaixo",
  frase = "Eu gosto de assistir TV",
  status = "done",
  score = 10,
  onBack,
  onNext,
  onMic,
}) {
  useEffect(() => {
    injectFonts();
    if (!document.getElementById("kubi-exercise-css")) {
      const s = document.createElement("style");
      s.id = "kubi-exercise-css";
      s.textContent = CSS;
      document.head.appendChild(s);
    }
  }, []);

  const showListen  = ["listening", "analyzing", "done"].includes(status);
  const showAnalyze = ["analyzing", "done"].includes(status);
  const showResult  = status === "done";

  const scoreLabel =
    score >= 9 ? "Excelente!" :
    score >= 7 ? "Muito Bom!" :
    score >= 5 ? "Bom!" : "Continue Tentando!";

  return (
    <div className="ke-root">
      <div className="ke-shell">

        <div className="ke-avatar">
          <svg viewBox="0 0 48 48"><circle cx="24" cy="18" r="9" /><path d="M6 42c0-9.9 8.06-18 18-18s18 8.1 18 18" /></svg>
        </div>

        <div className="ke-content">

          {/* TV */}
          <div className="ke-tv">
            <svg viewBox="0 0 110 110" fill="none">
              <line x1="42" y1="22" x2="32" y2="8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="68" y1="22" x2="78" y2="8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <rect x="18" y="22" width="74" height="58" rx="10" stroke="white" strokeWidth="2.5" fill="rgba(255,255,255,0.05)"/>
              <rect x="26" y="30" width="58" height="42" rx="6" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="rgba(255,255,255,0.03)"/>
              <line x1="38" y1="80" x2="32" y2="92" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="72" y1="80" x2="78" y2="92" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="ke-desafio">{desafio}</div>
          <div className="ke-instrucao">{instrucao}</div>

          {/* Frase */}
          <div className="ke-frase">
            <div className="ke-play">
              <svg viewBox="0 0 16 16"><path d="M4 2l10 6-10 6V2z"/></svg>
            </div>
            <span className="ke-frase-text">{frase}</span>
          </div>

          {/* Steps */}
          <div className="ke-steps">
            {showListen && (
              <div className="ke-step ke-listen">
                <svg viewBox="0 0 24 24"><MicPath /></svg>
                <span>Te ouvindo...</span>
                {status === "listening" && <div className="ke-pulse" />}
              </div>
            )}
            {showAnalyze && (
              <>
                <div className="ke-arrow">
                  <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19,12 12,19 5,12"/></svg>
                </div>
                <div className="ke-step ke-analyze">
                  <svg viewBox="0 0 24 24" fill="white"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v3z"/></svg>
                  <span>Analisando sua fala...</span>
                </div>
              </>
            )}
            {showResult && (
              <>
                <div className="ke-arrow">
                  <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19,12 12,19 5,12"/></svg>
                </div>
                <div className="ke-step ke-result">
                  <svg viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                  <span>{scoreLabel}</span>
                  <span className="ke-nota">Nota {score.toFixed(2)}</span>
                </div>
              </>
            )}
          </div>

        </div>

        <div className="ke-bottombar">
          <button className="ke-nav" onClick={onBack}>
            <svg viewBox="0 0 24 24"><polyline points="15,18 9,12 15,6"/></svg>
          </button>
          <button className="ke-fab" onClick={onMic}>
            <svg viewBox="0 0 24 24"><MicPath /></svg>
          </button>
          <button className={`ke-nav ${showResult ? "ke-nav-orange" : ""}`} onClick={onNext}>
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/>
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}
