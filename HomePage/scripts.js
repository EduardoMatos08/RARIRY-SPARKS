function toggleMenu() {
  var menu = document.getElementById("menuLateral");

  // Verifica se o menu está aberto ou fechado e faz a transição
  if (menu.style.left === "-101%") {
    menu.style.left = "0%";  // Abre o menu
  } else {
    menu.style.left = "-101%";  // Fecha o menu
  }
}