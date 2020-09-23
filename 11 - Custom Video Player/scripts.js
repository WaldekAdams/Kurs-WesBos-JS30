const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toogle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
let isHandle;

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

function handleRangeUpdate() {
    video[this.name] = this.value
    if (isHandle == true) {
        // console.log('ok');
        video[this.name] = this.value
    }
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
    // console.log(Math.floor(video.currentTime), video.duration);
}

video.addEventListener('click', tooglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toogle.addEventListener('click', tooglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousedown', () => {
    isHandle = true;
}));
ranges.forEach(range => range.addEventListener('mouseup', () => {
    isHandle = false
}));