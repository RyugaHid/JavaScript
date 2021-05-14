let hamburger = document.querySelector("#hamburger");

let navLinks = document.querySelector('#nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show')
})

let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset +=  256;
    if (offset > 768) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset -= 256;
    if (offset < 0) {
        offset = 768;
    }
    sliderLine.style.left = -offset + 'px';
});


let btn = document.querySelector('#btn_modal');

let modal = document.querySelector('#modal');

btn.addEventListener('click', () => {
    modal.classList.toggle('appear')
})