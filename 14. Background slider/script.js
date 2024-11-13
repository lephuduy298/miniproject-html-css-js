const slides = document.querySelectorAll('.slide')
const rightBtn = document.querySelector('.right-arrow')
const leftBtn = document.querySelector('.left-arrow')
const body = document.body

let slideActive = 0

rightBtn.addEventListener('click', () => {
    slideActive++

    if(slideActive > slides.length - 1){
        slideActive = 0
    }

    bgActive()
    imgActive()
})

leftBtn.addEventListener('click', () => {
    slideActive--

    if(slideActive < 0){
        slides.length - 1
    }

    bgActive()
    imgActive()
})

bgActive()

function bgActive(){
    body.style.backgroundImage = slides[slideActive].style.backgroundImage
}

imgActive()

function imgActive(){
    slides.forEach(slide => slide.classList.remove('active'))

    slides[slideActive].classList.add('active')
}