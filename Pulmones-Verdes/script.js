// Menú móvil
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', false); }
});

// Maqueta de la app (datos de ejemplo)
const $ = id => document.getElementById(id);
const counts = { day: 7, week: 46, month: 198 };
const week = [5, 8, 6, 9, 7, 4]; // lunes a sábado; hoy va aparte
const PRICE = 0.25, MIN = 11;
let tab = 'day';

const money = n => '$' + (n * PRICE).toLocaleString('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const life = n => { const m = n * MIN; return m >= 120 ? Math.round(m / 60) + ' h' : m + ' min'; };

function render() {
  const n = counts[tab];
  $('n').textContent = n;
  $('money').textContent = money(n);
  $('life').textContent = life(n);
  const bars = document.querySelectorAll('.bars i');
  [...week, counts.day].forEach((v, i) => bars[i].style.height = Math.min(v / 12, 1) * 100 + '%');
  $('lungsPhone').style.setProperty('--dirt', Math.min(counts.day / 20, 1) * 85 + '%');
}

document.querySelectorAll('.tabs button').forEach(b => b.addEventListener('click', () => {
  tab = b.dataset.k;
  document.querySelectorAll('.tabs button').forEach(x => x.setAttribute('aria-selected', x === b));
  render();
}));
$('add').addEventListener('click', () => { counts.day++; counts.week++; counts.month++; render(); });
render();