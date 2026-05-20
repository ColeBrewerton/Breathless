let music = new Audio("ambientmain_0.ogg");
music.loop = true;
music.volume = 0.5;

let started = false;

function startMusic() {
    if (started) return;
    started = true;

    music.play();
}

// expose globally
window.startMusic = startMusic;