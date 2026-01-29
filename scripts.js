const maxNoClicks = 4;
let noClickCount = 0;

const yesButton = document.getElementById('yes-btn');
const noButton = document.getElementById('no-btn');
const yoshi = document.getElementById('yoshi');
const mainImg = document.getElementById("main-img");
const message = document.getElementById("message");
const yippee = document.getElementById('yippee');
const bishwo = document.getElementById('bishwo');

const mainImages = [
    "assets/pochaco-flower.gif",
    "assets/pochacobruh.jpg",
    "assets/pochaco-done.gif",
    "assets/pochaco-sad.jpg",
    "assets/pochaco-music.gif"
];

const messages = [
    "Will you be my valentine?",
    "Okay Sydney Lee you are too predictable.",
    "Are we for serious?",
    "I hope I coded enough of these...",
    "You really think I'm gonna let you say no?"
];

let noScale = 1;
let yesScale = 1;

yesButton.addEventListener('click', () => {
    mainImg.style.display = 'none';
    message.style.display = 'none';
    yesButton.style.display = 'none';
    noButton.style.display = 'none';

    yippee.style.display = 'block';
    bishwo.pause();
    bishwo.currentTime = 0;
    const music = document.getElementById('end-music');
    music.currentTime = 121.5;
    music.volume = 0.5;
    music.play();

});

noButton.addEventListener('click', () => {
    noClickCount++;

    const imgIndex = Math.min(noClickCount, mainImages.length - 1);
    mainImg.src = mainImages[imgIndex];

    const msgIndex = Math.min(noClickCount, messages.length - 1);
    message.textContent = messages[msgIndex];

    if (noClickCount < maxNoClicks) {
        noScale -= 0.1;
        noButton.style.transform = `scale(${noScale})`;

        yesScale += 0.1;
        yesButton.style.transform = `scale(${yesScale})`;

    } else {
        yoshiStealsButton();
    }
});

function yoshiStealsButton() {
    bishwo.volume = 0.7;
    bishwo.currentTime = 17;
    bishwo.play();
    const btnRect = noButton.getBoundingClientRect();
    const yoshiTop = btnRect.top + (btnRect.height / 2) - 80;

    yoshi.style.display = "block";
    yoshi.style.top = `${yoshiTop}px`;
    yoshi.style.left = "-200px";

    yoshi.getBoundingClientRect();

    yoshi.style.left = `${btnRect.left - 60}px`;

    setTimeout(() => {
        noButton.style.display = "none";

        yoshi.style.left = "110vw";
    }, 1000);
}