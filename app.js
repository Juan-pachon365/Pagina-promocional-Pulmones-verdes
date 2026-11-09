document.getElementById('btn-calcular').addEventListener('click', function () {
  const cantidad = Number(document.getElementById('cantidad').value);
  const precio = Number(document.getElementById('precio').value);
  const ahorro = cantidad * precio * 30;

  document.getElementById('resultado').textContent =
    'En un mes ahorrarías $' + ahorro.toLocaleString('es-CO') +
    ' y evitarías ' + (cantidad * 30) + ' cigarrillos 🌱';
});

/* ===== Carga diferida de terceros (GTM -> GA4/Contentsquare, HubSpot) =====
   No bloquean la carga inicial: GTM se carga con la primera interacción
   del usuario (scroll, clic, toque, tecla) o a los 6 s; el formulario de
   HubSpot cuando la sección #registro se acerca a la pantalla. */
(function () {
  var gtmCargado = false;
  function cargarGTM() {
    if (gtmCargado) return;
    gtmCargado = true;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-K7S3DDBP';
    document.head.appendChild(s);
  }

  var hubspotCargado = false;
  function cargarHubSpot() {
    if (hubspotCargado) return;
    hubspotCargado = true;
    var s = document.createElement('script');
    s.src = 'https://js.hsforms.net/forms/embed/52186447.js';
    s.defer = true;
    document.body.appendChild(s);
  }

  ['scroll', 'click', 'touchstart', 'keydown', 'mousemove'].forEach(function (ev) {
    window.addEventListener(ev, cargarGTM, { once: true, passive: true });
  });
  window.addEventListener('load', function () { setTimeout(cargarGTM, 6000); });

  var registro = document.getElementById('registro');
  if ('IntersectionObserver' in window && registro) {
    new IntersectionObserver(function (entradas, obs) {
      if (entradas[0].isIntersecting) { cargarHubSpot(); obs.disconnect(); }
    }, { rootMargin: '600px' }).observe(registro);
  } else {
    cargarHubSpot();
  }
  document.querySelectorAll('a[href="#registro"]').forEach(function (a) {
    a.addEventListener('click', cargarHubSpot);
  });
})();
