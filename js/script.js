const menu = document.querySelector('.js-menu');

function menuAtivo() {
    if (window.pageYOffset > 70) {
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
    }
}

window.addEventListener('scroll', menuAtivo);



const links = document.querySelectorAll('.js-link[href^="#"');

function animaScroll(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    //fazer o scroll acontecer
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}


links.forEach((link) => {
    link.addEventListener('click', animaScroll);
});