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
  @keyframes kiaFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
  @keyframes kiaRipple { 0%{transform:scale(.85);opacity:.7} 100%{transform:scale(1.45);opacity:0} }
  @keyframes kiaBar    { 0%,100%{opacity:1} 50%{opacity:.2} }

  .kia-root{font-family:'Nunito',sans-serif;background:#1a237e;min-height:100vh;display:flex;justify-content:center;align-items:center;position:relative;overflow-x:hidden}
  .kia-root::before{content:'';position:fixed;inset:0;background:radial-gradient(ellipse 80% 50% at 50% 0%,#3949ab33 0%,transparent 65%);pointer-events:none}
  .kia-shell{position:relative;z-index:1;width:360px;min-height:780px;background:#1a237e;border-radius:44px;box-shadow:0 0 0 2px rgba(255,255,255,.08),0 24px 60px rgba(0,0,0,.6);display:flex;flex-direction:column;overflow:hidden}
  .kia-avatar{width:46px;height:46px;border-radius:50%;background:#f57c00;border:2px solid #ff9800;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(255,152,0,.35);margin:10px 20px 0;flex-shrink:0}
  .kia-avatar svg{width:24px;height:24px;fill:white}
  .kia-content{flex:1;display:flex;flex-direction:column;align-items:center;padding:20px 24px 0}
  .kia-mic{position:relative;width:90px;height:90px;background:linear-gradient(145deg,#ff9800,#f57c00);border-radius:50%;border:none;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 28px rgba(255,152,0,.4),0 0 0 8px rgba(255,152,0,.1);cursor:pointer;transition:transform .15s;animation:kiaFloat 3.6s ease-in-out infinite;margin-bottom:28px;flex-shrink:0}
  .kia-mic::before{content:'';position:absolute;inset:-10px;border-radius:50%;border:2px solid rgba(255,152,0,.2);animation:kiaRipple 2.2s ease-out infinite}
  .kia-mic svg{width:38px;height:38px;fill:white}
  .kia-question{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:800;color:white;margin-bottom:14px;align-self:flex-start}
  .kia-bars{display:flex;align-items:center;gap:2px;flex-shrink:0}
  .kia-bars span{display:block;width:3px;border-radius:2px;background:#26c6da}
  .kia-bars span:nth-child(1){height:5px;animation:kiaBar 1.5s .0s ease-in-out infinite}
  .kia-bars span:nth-child(2){height:9px;animation:kiaBar 1.5s .15s ease-in-out infinite}
  .kia-bars span:nth-child(3){height:13px;animation:kiaBar 1.5s .3s ease-in-out infinite}
  .kia-bars span:nth-child(4){height:9px;animation:kiaBar 1.5s .45s ease-in-out infinite}
  .kia-bars span:nth-child(5){height:5px;animation:kiaBar 1.5s .6s ease-in-out infinite}
  .kia-input{width:100%;display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.08);border:1.5px solid rgba(255,255,255,.18);border-radius:12px;padding:11px 14px;margin-bottom:16px}
  .kia-mic-sm{width:28px;height:28px;background:rgba(255,255,255,.12);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}
  .kia-mic-sm svg{width:12px;height:12px;fill:white}
  .kia-input span{font-size:13px;font-weight:600;color:rgba(255,255,255,.7)}
  .kia-error{width:100%;display:flex;align-items:center;gap:10px;margin-bottom:10px}
  .kia-error svg{width:22px;height:22px;flex-shrink:0}
  .kia-error span{font-size:14px;font-weight:800;color:#ef5350}
  .kia-hint{align-self:flex-start;font-size:14px;font-weight:700;color:rgba(255,255,255,.6);margin-bottom:10px}
  .kia-input-corrected{width:100%;display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.06);border:1.5px solid rgba(38,198,218,.35);border-radius:12px;padding:11px 14px;margin-bottom:32px}
  .kia-mic-cyan{width:28px;height:28px;background:rgba(38,198,218,.15);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}
  .kia-mic-cyan svg{width:12px;height:12px;fill:#26c6da}
  .kia-input-corrected span{font-size:13px;font-weight:600;color:white}
  .kia-actions{width:100%;display:flex;gap:12px}
  .kia-btn-retry{flex:1;background:#2c3a9e;border:1.5px solid rgba(255,255,255,.2);border-radius:14px;padding:16px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s,transform .15s}
  .kia-btn-retry:hover{background:#3549b8;transform:translateY(-1px)}
  .kia-btn-retry svg{width:22px;height:22px;stroke:white;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
  .kia-btn-send{flex:2;background:linear-gradient(135deg,#ff9800,#f57c00);border:none;border-radius:14px;padding:16px;display:flex;align-items:center;justify-content:center;gap:10px;cursor:pointer;box-shadow:0 6px 20px rgba(255,152,0,.35);transition:transform .15s,box-shadow .2s}
  .kia-btn-send:hover{transform:translateY(-2px);box-shadow:0 10px 28px rgba(255,152,0,.48)}
  .kia-btn-send svg{width:20px;height:20px;stroke:white;fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}
`;

const MicIcon = ({ size = 12, color = "white" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}>
    <path fill={color} d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4zm6.5 9a1 1 0 1 1 2 0 8.5 8.5 0 0 1-7.5 8.46V21h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2.54A8.5 8.5 0 0 1 3.5 10a1 1 0 1 1 2 0 6.5 6.5 0 0 0 13 0z"/>
  </svg>
);

// hasError: boolean — mostra o estado de erro com sugestão de correção
export default function KubiIA({
  question = "Olá! O que você quer dizer?",
  userSaid = '"Mi qui pelo app"',
  hasError = true,
  corrected = '"Me guie pelo app"',
  onRetry,
  onSend,
}) {
  useEffect(() => {
    injectFonts();
    if (!document.getElementById("kubi-ia-css")) {
      const s = document.createElement("style");
      s.id = "kubi-ia-css";
      s.textContent = CSS;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <div className="kia-root">
      <div className="kia-shell">

        <div className="kia-avatar">
          <svg viewBox="0 0 48 48"><circle cx="24" cy="18" r="9" /><path d="M6 42c0-9.9 8.06-18 18-18s18 8.1 18 18" /></svg>
        </div>

        <div className="kia-content">

          {/* Mic hero */}
          <button className="kia-mic" onClick={onRetry}>
            <MicIcon size={38} />
          </button>

          {/* Pergunta */}
          <div className="kia-question">
            <div className="kia-bars">
              <span/><span/><span/><span/><span/>
            </div>
            {question}
          </div>

          {/* O que o usuário disse */}
          <div className="kia-input">
            <div className="kia-mic-sm"><MicIcon size={12} /></div>
            <span>{userSaid}</span>
          </div>

          {/* Estado de erro */}
          {hasError && (
            <>
              <div className="kia-error">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                        stroke="#ef5350" strokeWidth="2" fill="rgba(239,83,80,0.15)" strokeLinejoin="round"/>
                  <line x1="12" y1="9" x2="12" y2="13" stroke="#ef5350" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="17" r="1" fill="#ef5350"/>
                </svg>
                <span>Desculpe, não entendi!</span>
              </div>

              <div className="kia-hint">O que você quer dizer?</div>

              <div className="kia-input-corrected">
                <div className="kia-mic-cyan"><MicIcon size={12} color="#26c6da" /></div>
                <span>{corrected}</span>
              </div>
            </>
          )}

          {/* Ações */}
          <div className="kia-actions">
            <button className="kia-btn-retry" onClick={onRetry}>
              <svg viewBox="0 0 24 24">
                <polyline points="1,4 1,10 7,10"/>
                <path d="M3.51 15a9 9 0 1 0 .49-4.95"/>
              </svg>
            </button>
            <button className="kia-btn-send" onClick={onSend}>
              <svg viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12,5 19,12 12,19"/>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
