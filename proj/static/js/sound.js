var audio = document.getElementById('audio');
var audioControl = document.getElementById('audioControl');
var logo = document.querySelector('.logo');


audio.volume = 0.05;
logo.addEventListener('click', function () {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});
