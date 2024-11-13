const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () =>{
        stopSound()
        
        document.getElementById(sound).play()
    })
    
    document.getEleentById('buttons').appendChild(btn)
})

function stopSound() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound).pause()

        sound.currentTime = 0
    })
}