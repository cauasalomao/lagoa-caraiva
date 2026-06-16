/* Widgets compartilhados: booking modal + WhatsApp form widget.
   Auto-injeta CSS e HTML em runtime. Define window.openBooking. */
(function () {
  'use strict';
  if (window.__lcWidgetsInit) return;
  window.__lcWidgetsInit = true;

  var BOOKING_BASE = 'https://hotels.cloudbeds.com/pt-br/reservation/zeLyfj/';
  var WA_NUMBER = '557399856862';
  var WEBHOOK_URL = 'https://webhook.komplexagrowth.com/webhook/7c87bd71-6c33-437f-9073-2fae80d76d2f';
  var HOTEL_NAME = 'Pousada Lagoa Caraíva';

  function sendToWebhook(payload) {
    payload.hotel = HOTEL_NAME;
    payload.origem_pagina = document.title;
    payload.url = window.location.href;
    payload.timestamp = new Date().toISOString();
    var body = JSON.stringify(payload);
    // fetch com no-cors garante que o request sai mesmo se o servidor não enviar CORS headers.
    // keepalive permite enviar mesmo se a página estiver fechando.
    return fetch(WEBHOOK_URL, {
      method: 'POST',
      mode: 'cors',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      body: body
    }).catch(function (err) {
      // Fallback final via sendBeacon caso fetch falhe (ex: page unloading)
      try {
        if (navigator.sendBeacon) {
          var blob = new Blob([body], { type: 'application/json' });
          navigator.sendBeacon(WEBHOOK_URL, blob);
        }
      } catch (e) {}
    });
  }

  function pushLead(tipo) {
    if (window.dataLayer) window.dataLayer.push({ event: 'gerar_lead', tipo: tipo });
  }

  // ---- CSS injection ----
  var css = ''
    + '.lc-overlay{position:fixed;inset:0;z-index:200;display:none;align-items:center;justify-content:center;padding:1.5rem}'
    + '.lc-overlay.is-open{display:flex}'
    + '.lc-overlay__bg{position:absolute;inset:0;background:rgba(31,51,40,.7);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}'
    + '.lc-overlay__card{position:relative;background:#FAF3E0;color:#2C2620;border-radius:6px;width:min(440px,100%);max-height:92vh;overflow-y:auto;box-shadow:0 28px 60px rgba(0,0,0,.32);padding:clamp(1.75rem,4vw,2.5rem)}'
    + '.lc-overlay__close{position:absolute;top:.75rem;right:.75rem;width:34px;height:34px;border:none;background:none;font-size:1.6rem;line-height:1;color:#5a5045;cursor:pointer;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:background .2s}'
    + '.lc-overlay__close:hover{background:rgba(46,74,58,.08)}'
    + '.lc-overlay__eyebrow{font-size:.65rem;letter-spacing:.3em;text-transform:uppercase;color:#7a6f60;margin-bottom:.6rem}'
    + '.lc-overlay__title{font-family:"Cormorant Garamond",Georgia,serif;font-weight:400;font-style:italic;font-size:1.75rem;line-height:1.15;color:#2C2620;margin-bottom:1.5rem}'
    + '.lc-form{display:flex;flex-direction:column;gap:.85rem}'
    + '.lc-form label{display:flex;flex-direction:column;gap:.3rem;font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;font-weight:600;color:#7a6f60}'
    + '.lc-form input{padding:.7rem .85rem;font:400 .95rem/1.3 "Inter",system-ui,sans-serif;color:#2C2620;background:#fff;border:1px solid rgba(46,74,58,.2);border-radius:3px;letter-spacing:normal;text-transform:none}'
    + '.lc-form input:focus{outline:none;border-color:#2E4A3A;box-shadow:0 0 0 3px rgba(46,74,58,.12)}'
    + '.lc-stepper{display:flex;align-items:center;justify-content:space-between;background:#fff;border:1px solid rgba(46,74,58,.2);border-radius:3px;padding:.35rem .5rem}'
    + '.lc-stepper button{width:32px;height:32px;border:1px solid rgba(46,74,58,.2);background:#FAF3E0;color:#2C2620;border-radius:50%;font-size:1.1rem;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .2s,border-color .2s}'
    + '.lc-stepper button:hover{background:#2E4A3A;border-color:#2E4A3A;color:#FAF3E0}'
    + '.lc-stepper button:disabled{opacity:.35;cursor:not-allowed}'
    + '.lc-stepper output{font:500 1rem/1 "Inter",system-ui,sans-serif;color:#2C2620}'
    + '.lc-form__submit{margin-top:.5rem;padding:.85rem 1.5rem;background:#2E4A3A;color:#FAF3E0;font:500 .8rem/1 "Inter",system-ui,sans-serif;letter-spacing:.08em;text-transform:uppercase;border:none;border-radius:3px;cursor:pointer;transition:background .2s,transform .2s}'
    + '.lc-form__submit:hover{background:#1F3328;transform:translateY(-1px)}'
    + '.lc-form__err{display:none;font-size:.78rem;color:#a94426;margin-top:.25rem}'
    + '.lc-form__err.is-show{display:block}'

    + '.wa-float{position:fixed;bottom:1.5rem;right:1.5rem;width:56px;height:56px;border-radius:50%;background:#2E4A3A;color:#FAF3E0;display:flex;align-items:center;justify-content:center;font-size:1.5rem;text-decoration:none;box-shadow:0 8px 24px rgba(46,74,58,.32);z-index:60;border:none;cursor:pointer;transition:transform .3s,box-shadow .3s}'
    + '.wa-float:hover{transform:translateY(-2px) scale(1.04);box-shadow:0 12px 32px rgba(46,74,58,.4)}'
    + '.wa-bubble{position:fixed;bottom:calc(1.5rem + 16px);right:calc(1.5rem + 56px + 12px);z-index:60;background:#FAF3E0;color:#2C2620;border:1px solid rgba(46,74,58,.12);box-shadow:0 8px 22px rgba(31,51,40,.18);font:500 .72rem/1 "Inter",system-ui,sans-serif;letter-spacing:.05em;padding:.6rem .85rem;border-radius:18px;white-space:nowrap;pointer-events:none;opacity:0;transform:translateX(8px);transition:opacity .35s ease,transform .35s ease;animation:wa-bubble-pulse 2.6s ease-in-out 2s infinite}'
    + '.wa-bubble.is-show{opacity:1;transform:translateX(0)}'
    + '.wa-bubble::after{content:"";position:absolute;right:-6px;top:50%;transform:translateY(-50%) rotate(45deg);width:10px;height:10px;background:#FAF3E0;border-right:1px solid rgba(46,74,58,.12);border-top:1px solid rgba(46,74,58,.12)}'
    + '@keyframes wa-bubble-pulse{0%,100%{transform:translateX(0)}50%{transform:translateX(-3px)}}'
    + '.wa-bubble.is-hidden{opacity:0;visibility:hidden;transform:translateX(8px);transition:opacity .25s,visibility .25s,transform .25s}'
    + '.wa-widget{position:fixed;bottom:calc(1.5rem + 56px + .75rem);right:1.5rem;width:min(340px,calc(100vw - 2rem));background:#FAF3E0;border-radius:12px;box-shadow:0 20px 50px rgba(31,51,40,.28),0 0 0 1px rgba(46,74,58,.08);z-index:59;opacity:0;visibility:hidden;transform:translateY(12px) scale(.96);transform-origin:bottom right;transition:opacity .28s,visibility .28s,transform .28s}'
    + '.wa-widget.is-open{opacity:1;visibility:visible;transform:translateY(0) scale(1)}'
    + '.wa-widget__header{padding:1.25rem 1.25rem 0}'
    + '.wa-widget__title{font-family:"Cormorant Garamond",Georgia,serif;font-weight:400;font-size:1.15rem;line-height:1.3;color:#2C2620;margin-bottom:.35rem}'
    + '.wa-widget__subtitle{font:400 .8rem/1.5 "Inter",system-ui,sans-serif;color:#7a6f60}'
    + '.wa-widget__close{position:absolute;top:.75rem;right:.75rem;width:28px;height:28px;font-size:1.25rem;line-height:1;color:#7a6f60;background:none;border:none;cursor:pointer;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:background .2s}'
    + '.wa-widget__close:hover{background:rgba(46,74,58,.08)}'
    + '.wa-widget__body{padding:1rem 1.25rem 1.25rem}'
    + '.wa-widget__form{display:flex;flex-direction:column;gap:.75rem}'
    + '.wa-widget__form label{display:flex;flex-direction:column;gap:.3rem;font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;font-weight:600;color:#7a6f60}'
    + '.wa-widget__form input{width:100%;padding:.55rem .7rem;font:400 .92rem/1.3 "Inter",system-ui,sans-serif;color:#2C2620;background:#fff;border:1px solid rgba(46,74,58,.25);border-radius:4px;letter-spacing:normal;text-transform:none}'
    + '.wa-widget__form input:focus{outline:none;border-color:#2E4A3A;box-shadow:0 0 0 3px rgba(46,74,58,.12)}'
    + '.wa-widget__submit{margin-top:.25rem;display:inline-flex;align-items:center;justify-content:center;gap:.5rem;padding:.7rem 1.25rem;background:#2E4A3A;color:#FAF3E0;font:500 .85rem/1 "Inter",system-ui,sans-serif;letter-spacing:.04em;border:none;border-radius:4px;cursor:pointer;transition:background .2s,transform .2s;width:100%}'
    + '.wa-widget__submit:hover{background:#1F3328;transform:translateY(-1px)}';

  var style = document.createElement('style');
  style.setAttribute('data-lc-widgets', '');
  style.textContent = css;
  document.head.appendChild(style);

  // ---- Booking modal HTML ----
  var bookingHTML = ''
    + '<div class="lc-overlay" id="lc-booking" aria-hidden="true">'
    +   '<div class="lc-overlay__bg" data-lc-close></div>'
    +   '<div class="lc-overlay__card" role="dialog" aria-modal="true" aria-labelledby="lc-booking-title">'
    +     '<button class="lc-overlay__close" aria-label="Fechar" data-lc-close>&times;</button>'
    +     '<p class="lc-overlay__eyebrow">Lagoa Caraíva</p>'
    +     '<h2 class="lc-overlay__title" id="lc-booking-title">Reserve sua estadia</h2>'
    +     '<form class="lc-form" id="lc-booking-form">'
    +       '<label>Check-in<input type="date" name="checkin" id="lc-bk-in" required></label>'
    +       '<label>Check-out<input type="date" name="checkout" id="lc-bk-out" required></label>'
    +       '<label>Hóspedes'
    +         '<div class="lc-stepper">'
    +           '<button type="button" data-lc-guests="-1" aria-label="Diminuir hóspedes">−</button>'
    +           '<output id="lc-bk-guests">2</output>'
    +           '<button type="button" data-lc-guests="+1" aria-label="Aumentar hóspedes">+</button>'
    +         '</div>'
    +       '</label>'
    +       '<p class="lc-form__err" id="lc-bk-err">A data de check-out precisa ser depois do check-in.</p>'
    +       '<button type="submit" class="lc-form__submit">Verificar disponibilidade</button>'
    +     '</form>'
    +   '</div>'
    + '</div>';

  // ---- WhatsApp widget HTML ----
  var waHTML = ''
    + '<button class="wa-float" aria-label="Falar pelo WhatsApp" id="wa-toggle"><span aria-hidden="true">💬</span></button>'
    + '<div class="wa-bubble" id="wa-bubble" aria-hidden="true">Benefícios exclusivos</div>'
    + '<div class="wa-widget" id="wa-widget">'
    +   '<button class="wa-widget__close" aria-label="Fechar" id="wa-close">&times;</button>'
    +   '<div class="wa-widget__header">'
    +     '<div class="wa-widget__title">Fale conosco</div>'
    +     '<p class="wa-widget__subtitle">Fale diretamente conosco para reservar com as melhores tarifas</p>'
    +   '</div>'
    +   '<div class="wa-widget__body">'
    +     '<form class="wa-widget__form" id="wa-form">'
    +       '<label>Nome<input type="text" name="nome" placeholder="Seu nome" required></label>'
    +       '<label>E-mail<input type="email" name="email" placeholder="seu@email.com" required></label>'
    +       '<label>Telefone<input type="tel" name="telefone" placeholder="(00) 00000-0000" required></label>'
    +       '<button type="submit" class="wa-widget__submit">'
    +         '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.106-1.138l-.294-.176-2.866.852.852-2.866-.176-.294A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/></svg>'
    +         'Iniciar conversa'
    +       '</button>'
    +     '</form>'
    +   '</div>'
    + '</div>';

  // ---- Mount when DOM ready ----
  function mount() {
    // Remove any pre-existing wa-float / wa-widget to avoid duplicates
    document.querySelectorAll('.wa-float').forEach(function(el){ if (el.id !== 'wa-toggle') el.remove(); });
    var existingWA = document.getElementById('wa-toggle');
    if (existingWA) existingWA.remove();
    var existingWW = document.getElementById('wa-widget');
    if (existingWW) existingWW.remove();
    var existingBM = document.getElementById('lc-booking');
    if (existingBM) existingBM.remove();

    var wrap = document.createElement('div');
    wrap.innerHTML = bookingHTML + waHTML;
    while (wrap.firstChild) document.body.appendChild(wrap.firstChild);

    initBooking();
    initWA();
  }

  function todayISO(offset) {
    var d = new Date();
    d.setDate(d.getDate() + (offset || 0));
    return d.toISOString().slice(0, 10);
  }

  function initBooking() {
    var modal = document.getElementById('lc-booking');
    var checkin = document.getElementById('lc-bk-in');
    var checkout = document.getElementById('lc-bk-out');
    var guestsOut = document.getElementById('lc-bk-guests');
    var err = document.getElementById('lc-bk-err');
    var form = document.getElementById('lc-booking-form');
    var guests = 2;

    checkin.min = todayISO(0);
    checkin.value = todayISO(1);
    checkout.min = todayISO(1);
    checkout.value = todayISO(4);

    checkin.addEventListener('change', function() {
      var c = new Date(checkin.value);
      c.setDate(c.getDate() + 1);
      var minOut = c.toISOString().slice(0,10);
      checkout.min = minOut;
      if (checkout.value <= checkin.value) checkout.value = minOut;
    });

    modal.querySelectorAll('[data-lc-close]').forEach(function(el) {
      el.addEventListener('click', function() { close(); });
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) close();
    });

    modal.querySelectorAll('[data-lc-guests]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var delta = parseInt(btn.getAttribute('data-lc-guests'), 10);
        guests = Math.max(1, Math.min(15, guests + delta));
        guestsOut.textContent = guests;
      });
    });

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (checkout.value <= checkin.value) {
        err.classList.add('is-show');
        return;
      }
      err.classList.remove('is-show');
      var url = BOOKING_BASE
        + '?currency=brl'
        + '&checkin=' + encodeURIComponent(checkin.value)
        + '&checkout=' + encodeURIComponent(checkout.value)
        + '&guests=' + guests;
      window.open(url, '_blank', 'noopener');
      close();
    });

    function open() {
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    window.openBooking = open;
  }

  function initWA() {
    var toggle = document.getElementById('wa-toggle');
    var widget = document.getElementById('wa-widget');
    var closeBtn = document.getElementById('wa-close');
    var form = document.getElementById('wa-form');
    var bubble = document.getElementById('wa-bubble');
    if (!toggle || !widget) return;

    // Bolha "Benefícios exclusivos" aparece depois de ~1.5s e some quando o widget abre
    if (bubble) {
      setTimeout(function() {
        if (!widget.classList.contains('is-open')) bubble.classList.add('is-show');
      }, 1500);
    }
    function hideBubble() {
      if (bubble) bubble.classList.add('is-hidden');
    }

    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      widget.classList.toggle('is-open');
      hideBubble();
    });
    closeBtn.addEventListener('click', function() { widget.classList.remove('is-open'); });
    document.addEventListener('click', function(e) {
      if (!widget.contains(e.target) && e.target !== toggle && !toggle.contains(e.target)) {
        widget.classList.remove('is-open');
      }
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') widget.classList.remove('is-open');
    });
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var data = new FormData(form);
      var nomeCompleto = (data.get('nome') || '').trim();
      var email = (data.get('email') || '').trim();
      var telefone = (data.get('telefone') || '').trim();
      sendToWebhook({
        tipo: 'whatsapp_modal',
        nome: nomeCompleto,
        email: email,
        telefone: telefone
      });
      pushLead('whatsapp_modal');
      var primeiroNome = nomeCompleto.split(/\s+/)[0];
      var msg = 'Olá meu nome é ' + primeiroNome + '. Tenho interesse em realizar uma reserva na Pousada Lagoa Caraíva!';
      window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
      widget.classList.remove('is-open');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
