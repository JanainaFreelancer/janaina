let menuItens = document.querySelectorAll('.navegacao li a');


menuItens.forEach(item => {
    item.addEventListener('click', scrollToOnClick)
});

function scrollToOnClick(event) {
    event.preventDefault();
    let elemento = event.target;
    let url = elemento.getAttribute('href')
    let DistanciSecao = document.querySelector(url).offsetTop
    window.scroll({
        top: DistanciSecao - 103,
        behavior: "smooth"
    })
}

let menu = document.querySelector('nav');

function menuFixo() {
    if (window.pageYOffset > 103) {
        menu.classList.add('active')
    } else {
        menu.classList.remove('active')
    }
}
window.addEventListener('scroll', menuFixo)



const btnBurger = document.getElementById('btn-mobile')
const menuMobile = document.querySelector('.menu-mobile')
const closeButton = document.querySelector('.mobile')
const btnClose = document.querySelector('.btn-close')

function openMenu() {
    closeButton.classList.add('active')
    menuMobile.classList.add('active')
}

function closeMenu() {
    closeButton.classList.remove('active')
    menuMobile.classList.remove('active')
}

btnClose.addEventListener('click', closeMenu)
btnBurger.addEventListener('click', openMenu)