function mostrar(id) {
  const paineis = document.querySelectorAll('.painel');
  paineis.forEach(p => p.classList.add('oculto'));
  document.getElementById(id).classList.remove('oculto');
}
