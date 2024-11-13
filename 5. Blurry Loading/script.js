const bg = document.querySelector('.bg')
const loading = document.querySelector('.loading-text')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++

    if(load > 99){
        clearInterval(int)
    }
    console.log(load)
    loading.innerText = `${load}%`
    loading.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.fliter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}   