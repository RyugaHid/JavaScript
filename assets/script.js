let hamburger = document.querySelector("#hamburger");

let navLinks = document.querySelector('#nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show')
})