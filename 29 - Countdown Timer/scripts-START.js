let countdown;
const timerDisplay = document.querySelector('.display__time-left');

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
        console.log('ok')

    }, 1000)
}

function displayTimeLeft(seconds) {
    // console.log(seconds);
    const minutes = Math.floor(seconds / 60);
    const remeinderSeconds = seconds % 60;
    const display = `${minutes}:${remeinderSeconds < 10 ? '0':''} ${remeinderSeconds}`;
    timerDisplay.textContent = display;
    document.title = display;

}