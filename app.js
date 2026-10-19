document.getElementById('btn-calcular').addEventListener('click', function () {
  const cantidad = Number(document.getElementById('cantidad').value);
  const precio = Number(document.getElementById('precio').value);
  const ahorro = cantidad * precio * 30;

  document.getElementById('resultado').textContent =
    'En un mes ahorrarías $' + ahorro.toLocaleString('es-CO') +
    ' y evitarías ' + (cantidad * 30) + ' cigarrillos 🌱';
});
