const button = document.getElementById('audioButton');
const player = document.getElementById('player');

let playing = false;

player.addEventListener('ended', handleTrackEnd);

function handleTrackEnd() {
    playing = false;
}

function handleClick() {
    if (playing) {
        player.pause();
        player.currentTime = 0;
        playing = false;
    } else {
        player.play();
        playing = true;
    }
}

button.addEventListener('click', handleClick);