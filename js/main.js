
const modos =  document.querySelector('.modos');
const modosNav = document.querySelector('.modos-nav');
const menuMobile =  document.querySelector('.menu-li');
const modosMobile =  document.querySelector('.menu-mobile')

//-----------------------------------------------------------------------
//Desktop


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


//-----------------------------------------------------------------------
//Mobile

menuMobile.addEventListener("click", function() {
    const elemento = document.querySelector('.menu-mobile');
    elemento.style.display = 'inline-block';
})

menuMobile.addEventListener("mouseout", function() {
    const elemento = document.querySelector('.menu-mobile');
    elemento.style.display = 'none';
})


modosMobile.addEventListener("mouseover", function() {
    const elemento = document.querySelector('.menu-mobile');
    elemento.style.display = 'inline-block';
})

modosMobile.addEventListener("mouseout", function() {
    const elemento = document.querySelector('.menu-mobile');
    elemento.style.display = 'none';
})