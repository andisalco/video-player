const js_video = document.querySelector('#video')
const js_play = document.querySelector('#play')
const js_pause = document.querySelector('#pause')
const js_backward = document.querySelector('#backward')
const js_forward = document.querySelector('#forward')

js_play.addEventListener('click', handle_play )
js_pause.addEventListener('click', handle_pause )
js_backward.addEventListener('click', handle_backward )
js_forward.addEventListener('click', handle_forward )

function handle_play() {
    js_video.play()
    js_play.hidden = true
    js_pause.hidden = false
    console.log('click play')
}

function handle_pause() {
    js_video.pause()
    js_play.hidden = false
    js_pause.hidden = true
    console.log('click pause')
}

function handle_backward() {
    js_video.currentTime -= 10
    console.log('click backward')
}

function handle_forward() {
    js_video.currentTime += 10
    console.log('click forward',js_video.currentTime)
}

const js_progress = document.querySelector('#progress')

js_video.addEventListener('loadedmetadata',handle_loaded)
js_video.addEventListener('timeupdate',handle_timeupdate)

function handle_loaded(){
    js_progress.max=js_video.duration
    //console.log('video cargado',js_video.duration)
}


function handle_timeupdate(){
    js_progress.value=js_video.currentTime
    // console.log('Tiempo actual',js_video.currentTime)
}

js_progress.addEventListener('input', handle_input)

function handle_input(){
    js_video.currentTime=js_progress.value
    // console.log(js_progress.value)
}
