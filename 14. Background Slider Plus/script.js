const leftBtn = document.querySelector('.left-arrow')
const rightBtn = document.querySelector('.right-arrow')
const body = document.body
const slides = document.querySelectorAll('.slide')

let Activeslide = 0

leftBtn.addEventListener('click', () => {
    Activeslide++

    if(Activeslide > slides.length - 1){
        Activeslide = 0
    }

    slideBg()
    slideImg()
})

rightBtn.addEventListener('click', () => {
    Activeslide--

    if(Activeslide < 0){
        Activeslide = slides.length - 1
    }

    slideBg()
    slideImg()
})

function slideBg(){
    body.style.backgroundImage = slides[Activeslide].style.backgroundImage
}

function slideImg(){
    slides.forEach((slide) => slide.classList.remove('active'))

    slides[Activeslide].classList.add('active')
}
