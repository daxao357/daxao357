function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;

    var timeElement = document.createElement("div");
    timeElement.className = "current-time";
    timeElement.textContent = timeString;

    var centeredText = document.querySelector(".animated-text");

    var previousTimeElements = document.querySelectorAll(".current-time");
    previousTimeElements.forEach(function (element) {
        element.remove();
    });

    centeredText.appendChild(timeElement);
}

document.addEventListener("DOMContentLoaded", function () {
    var animatedText = document.querySelector(".animated-text");
    animatedText.classList.add("show");

    updateClock();

    setInterval(updateClock, 1000);
});