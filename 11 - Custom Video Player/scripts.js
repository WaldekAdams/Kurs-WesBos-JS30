const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toogle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function tooglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toogle.textContent = icon;
    // console.log(icon)
}

function skip() {
    // console.log('ok')
    const num = this.dataset.skip;
    // console.log(num);
    video.currentTime += parseFloat(num);
}




video.addEventListener('click', tooglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toogle.addEventListener('click', tooglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip))