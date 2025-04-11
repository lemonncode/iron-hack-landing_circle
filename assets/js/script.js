// JavaScript para el menú hamburguesa
const hamburger = document.getElementById("hamburger");
const open = document.getElementById("+");
const close = document.getElementById("X");
const links = document.querySelector(".nav .links");

hamburger.addEventListener("click", () => {
  console.log("Probando menú hamburguesa");
  links.classList.toggle("active"); // Añadimos o quitamos la clase 'active' para mostrar/ocultar los enlaces
  close.classList.toggle("close"); // Añadimos o quitamos la clase 'active' para mostrar/ocultar los enlaces
  close.classList.toggle("#close"); // Añadimos o quitamos la clase 'active' para mostrar/ocultar los enlaces
  open.classList.toggle("open"); // Añadimos o quitamos la clase 'active' para mostrar/ocultar los enlaces
 
});
