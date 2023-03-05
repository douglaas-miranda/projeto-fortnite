
const modos =  document.querySelector('.modos');
const modosNav = document.querySelector('.modos-nav');


modos.addEventListener("mouseover", function() {
    const elemento = document.querySelector('.modos-nav');
    elemento.style.display = 'inline-block';
})

modos.addEventListener("mouseout", function() {
    const elemento = document.querySelector('.modos-nav');
    elemento.style.display = 'none';
})

modosNav.addEventListener("mouseover", function() {
    const elemento = document.querySelector('.modos-nav');
    elemento.style.display = 'inline-block';
})

modosNav.addEventListener("mouseout", function() {
    const elemento = document.querySelector('.modos-nav');
    elemento.style.display = 'none';
})