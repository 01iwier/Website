const button = document.getElementById('audioButton');
const player = document.getElementById('player');

let playing = false;

function handleClick() {
    if (playing) {
        player.pause();
        playing = false;
    } else {
        player.play();
        playing = true;
    }
}

button.addEventListener('click', handleClick);