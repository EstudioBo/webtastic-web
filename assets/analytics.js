// Consentimiento de cookies + Google Analytics (Webtastic)
// GA4 no se carga hasta que el usuario acepta cookies de análisis (RGPD/LSSI).
(function () {
  var GA_MEASUREMENT_ID = 'G-R1VXH9CYVD';
  var STORAGE_KEY = 'webtastic_cookie_consent';

  function loadGA() {
    if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID.indexOf('XXXX') !== -1) return;
    if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) return;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  var styleTag = document.createElement('style');
  styleTag.textContent =
    '#cc-overlay{position:fixed;inset:0;z-index:9999;background:rgba(10,7,20,0.72);' +
    'backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;' +
    'padding:24px;opacity:0;transition:opacity 0.35s ease;font-family:"Inter",sans-serif;}' +
    '#cc-overlay.cc-visible{opacity:1;}' +
    '#cc-modal{width:100%;max-width:440px;background:#181229;border:1px solid rgba(255,255,255,0.08);' +
    'border-radius:20px;padding:36px 32px;box-shadow:0 32px 80px rgba(109,40,217,0.35),0 8px 24px rgba(0,0,0,0.4);' +
    'transform:translateY(16px) scale(0.98);opacity:0;transition:transform 0.35s cubic-bezier(.2,.8,.2,1),opacity 0.35s ease;}' +
    '#cc-overlay.cc-visible #cc-modal{transform:translateY(0) scale(1);opacity:1;}' +
    '#cc-modal .cc-badge{display:inline-flex;align-items:center;gap:8px;font-size:12px;letter-spacing:2.5px;' +
    'text-transform:uppercase;color:#c4b5fd;margin-bottom:18px;border:1px solid rgba(196,181,253,0.3);' +
    'padding:7px 16px;border-radius:100px;}' +
    '#cc-modal h2{font-family:"Poppins",sans-serif;font-weight:800;color:#fff;font-size:22px;margin:0 0 14px;letter-spacing:-0.3px;}' +
    '#cc-modal p{color:#cbd5e1;font-size:14.5px;line-height:1.65;margin:0 0 8px;}' +
    '#cc-modal a{color:#EC4899;text-decoration:underline;}' +
    '#cc-settings{max-height:0;overflow:hidden;transition:max-height 0.35s ease;}' +
    '#cc-settings.cc-open{max-height:320px;margin-top:14px;}' +
    '.cc-settings-link{margin:14px 0 0 !important;font-size:13px !important;}' +
    '.cc-row{display:flex;align-items:center;justify-content:space-between;gap:16px;' +
    'padding:16px 0;border-top:1px solid rgba(255,255,255,0.08);}' +
    '.cc-row strong{display:block;color:#fff;font-size:14px;font-weight:600;margin-bottom:4px;}' +
    '.cc-row p{font-size:12.5px;color:#8b7cb8;margin:0;}' +
    '.cc-toggle{position:relative;flex-shrink:0;width:44px;height:24px;border-radius:100px;border:none;' +
    'background:rgba(255,255,255,0.15);cursor:pointer;padding:0;transition:background 0.25s ease;}' +
    '.cc-toggle .cc-knob{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;' +
    'background:#fff;transition:transform 0.25s ease;}' +
    '.cc-toggle[aria-checked="true"]{background:linear-gradient(135deg,#6D28D9 0%,#EC4899 50%,#F97316 100%);}' +
    '.cc-toggle[aria-checked="true"] .cc-knob{transform:translateX(20px);}' +
    '.cc-toggle-locked{opacity:0.5;cursor:not-allowed;background:linear-gradient(135deg,#6D28D9 0%,#EC4899 50%,#F97316 100%);}' +
    '.cc-toggle-locked .cc-knob{transform:translateX(20px);}' +
    '#cc-actions{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:26px;flex-wrap:wrap;}' +
    '#cc-settings-btn{background:none;border:none;color:#8b7cb8;font-family:"Inter",sans-serif;font-weight:600;' +
    'font-size:13.5px;cursor:pointer;padding:8px 0;text-decoration:underline;}' +
    '#cc-settings-btn:hover{color:#c4b5fd;}' +
    '.cc-main-btns{display:flex;gap:10px;}' +
    '.cc-btn{font-family:"Poppins",sans-serif;font-weight:700;font-size:13.5px;padding:12px 22px;' +
    'border-radius:100px;border:none;cursor:pointer;transition:box-shadow 0.25s ease,transform 0.15s ease;}' +
    '.cc-btn-primary{background:linear-gradient(135deg,#6D28D9 0%,#EC4899 50%,#F97316 100%);color:#fff;' +
    'box-shadow:0 10px 30px rgba(236,72,153,0.35);}' +
    '.cc-btn-primary:hover{box-shadow:0 16px 40px rgba(236,72,153,0.45);}' +
    '.cc-btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,0.3) !important;}' +
    '.cc-btn-ghost:hover{border-color:rgba(255,255,255,0.6) !important;}' +
    '#cc-reopen{position:fixed;bottom:20px;left:20px;z-index:9998;width:44px;height:44px;border-radius:50%;' +
    'background:#181229;border:1px solid rgba(255,255,255,0.12);box-shadow:0 8px 24px rgba(0,0,0,0.35);' +
    'cursor:pointer;font-size:19px;display:flex;align-items:center;justify-content:center;}' +
    '@media (max-width:480px){#cc-actions{flex-direction:column-reverse;align-items:stretch;}' +
    '.cc-main-btns{justify-content:stretch;}.cc-main-btns .cc-btn{flex:1;}#cc-settings-btn{text-align:center;}}';
  document.head.appendChild(styleTag);

  function buildModal() {
    var overlay = document.createElement('div');
    overlay.id = 'cc-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'cc-title');
    overlay.innerHTML =
      '<div id="cc-modal">' +
      '<span class="cc-badge">✦ Privacidad</span>' +
      '<h2 id="cc-title">Antes de seguir</h2>' +
      '<p>Usamos cookies para analizar cómo se usa la web y mejorarla. Puedes aceptarlas, rechazarlas o elegir qué permitir. Más info en la <a href="/cookies" target="_blank" rel="noopener">política de cookies</a>.</p>' +
      '<div id="cc-settings">' +
      '<div class="cc-row"><div><strong>Cookies técnicas</strong><p>Necesarias para que la web funcione. Siempre activas.</p></div>' +
      '<span class="cc-toggle cc-toggle-locked" aria-hidden="true"><span class="cc-knob"></span></span></div>' +
      '<div class="cc-row"><div><strong>Cookies de análisis</strong><p>Google Analytics: nos ayuda a entender cómo se usa la web.</p></div>' +
      '<button type="button" class="cc-toggle" id="cc-toggle-analytics" role="switch" aria-checked="false"><span class="cc-knob"></span></button></div>' +
      '<p class="cc-settings-link"><a href="/cookies" target="_blank" rel="noopener">Ver política de cookies completa ↗</a></p>' +
      '</div>' +
      '<div id="cc-actions">' +
      '<button type="button" id="cc-settings-btn">Ajustes</button>' +
      '<div class="cc-main-btns">' +
      '<button type="button" id="cc-reject" class="cc-btn cc-btn-ghost">Rechazar</button>' +
      '<button type="button" id="cc-accept" class="cc-btn cc-btn-primary">Aceptar</button>' +
      '</div></div>' +
      '</div>';
    document.body.appendChild(overlay);
    requestAnimationFrame(function () { overlay.classList.add('cc-visible'); });

    var settingsPanel = overlay.querySelector('#cc-settings');
    var settingsBtn = overlay.querySelector('#cc-settings-btn');
    var toggleAnalytics = overlay.querySelector('#cc-toggle-analytics');
    var acceptBtn = overlay.querySelector('#cc-accept');
    var rejectBtn = overlay.querySelector('#cc-reject');
    var settingsOpen = false;

    settingsBtn.addEventListener('click', function () {
      settingsOpen = !settingsOpen;
      settingsPanel.classList.toggle('cc-open', settingsOpen);
      settingsBtn.textContent = settingsOpen ? 'Ocultar ajustes' : 'Ajustes';
      acceptBtn.textContent = settingsOpen ? 'Guardar preferencias' : 'Aceptar';
    });

    toggleAnalytics.addEventListener('click', function () {
      var on = toggleAnalytics.getAttribute('aria-checked') === 'true';
      toggleAnalytics.setAttribute('aria-checked', String(!on));
    });

    function close(consent) {
      localStorage.setItem(STORAGE_KEY, consent);
      overlay.classList.remove('cc-visible');
      setTimeout(function () { overlay.remove(); }, 350);
      if (consent === 'granted') loadGA();
    }

    acceptBtn.addEventListener('click', function () {
      if (settingsOpen) {
        var analyticsOn = toggleAnalytics.getAttribute('aria-checked') === 'true';
        close(analyticsOn ? 'granted' : 'denied');
      } else {
        toggleAnalytics.setAttribute('aria-checked', 'true');
        close('granted');
      }
    });
    rejectBtn.addEventListener('click', function () {
      toggleAnalytics.setAttribute('aria-checked', 'false');
      close('denied');
    });
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) { /* clic fuera: no cierra, exige decisión explícita */ }
    });
  }

  function addReopenButton() {
    if (document.getElementById('cc-reopen')) return;
    var btn = document.createElement('button');
    btn.id = 'cc-reopen';
    btn.type = 'button';
    btn.title = 'Preferencias de cookies';
    btn.setAttribute('aria-label', 'Preferencias de cookies');
    btn.textContent = '🍪';
    btn.addEventListener('click', buildModal);
    document.body.appendChild(btn);
  }

  var isCookiePolicyPage = /\/cookies(\.html)?\/?$/.test(location.pathname);

  var consent = localStorage.getItem(STORAGE_KEY);
  if (consent === 'granted') {
    loadGA();
    addReopenButton();
  } else if (consent === 'denied') {
    addReopenButton();
  } else if (isCookiePolicyPage) {
    // En la propia página de política de cookies no forzamos el modal:
    // así se puede leer libremente antes de decidir.
    addReopenButton();
  } else {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { buildModal(); addReopenButton(); });
    } else {
      buildModal();
      addReopenButton();
    }
  }
})();
