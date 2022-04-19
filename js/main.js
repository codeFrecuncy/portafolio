let burger = document.querySelector('.burger');
let menuLateral = document.querySelector('.menu-lateral');
let barras = document.querySelector('.barra');

burger.addEventListener('click', () =>{ 
    menuLateral.classList.toggle('active');
    burger.classList.toggle('active');
    barras.classList.toggle('active');
})