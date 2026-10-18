// ============================================================
// PULMONES VERDES - app.js
// Calculadora de ahorro mensual.
// Los eventos de Analytics NO están aquí: GTM detecta los clics
// en los botones por su id o su clase (ver la guía).
// ============================================================

document.getElementById('btn-calcular').addEventListener('click', function () {
  const cantidad = Number(document.getElementById('cantidad').value);
  const precio = Number(document.getElementById('precio').value);
  const ahorro = cantidad * precio * 30; // 30 días

  document.getElementById('resultado').textContent =
    'En un mes ahorrarías $' + ahorro.toLocaleString('es-CO') +
    ' y evitarías ' + (cantidad * 30) + ' cigarrillos 🌱';
});
