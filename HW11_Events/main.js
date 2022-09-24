const keyS = document.querySelector("[data-keyS]");
const keyO = document.querySelector("[data-keyO]");
const keyU = document.querySelector("[data-keyU]");
const keyN = document.querySelector("[data-keyN]");
const keyD = document.querySelector("[data-keyD]");
const audio = new Audio();

keyS.addEventListener('click', () => getKeyS());
keyO.addEventListener('click', () => getKeyO());
keyU.addEventListener('click', () => getKeyU());
keyN.addEventListener('click', () => getKeyN());
keyD.addEventListener('click', () => getKeyD());

document.body.addEventListener('keydown', function (e) {
    if (e.code === "KeyS") {
        getKeyS();
    }
    if (e.code === "KeyO") {
        getKeyO();
    }
    if (e.code === "KeyU") {
        getKeyU()
    }
    if (e.code === "KeyN") {
        getKeyN()
    }
    if (e.code === "KeyD") {
        getKeyD()
    }
});

function getKeyS() {
    audio.src = './sound/campfire.mp3';
    audio.autoplay = true;
    removeActive();
    keyS.classList.add('active');
}

function getKeyO() {
    audio.src = './sound/rain.mp3';
    audio.autoplay = true;
    removeActive();
    keyO.classList.add('active');
}

function getKeyU() {
    audio.src = './sound/tree.mp3';
    audio.autoplay = true;
    removeActive();
    keyU.classList.add('active');
}

function getKeyN() {
    audio.src = './sound/waterfall.mp3';
    audio.autoplay = true;
    removeActive();
    keyN.classList.add('active');
}

function getKeyD() {
    audio.src = './sound/wind.mp3';
    audio.autoplay = true;
    removeActive();
    keyD.classList.add('active');
}

function removeActive() {
    document.querySelectorAll('div').forEach(div => div.classList.remove("active"));
};

audio.addEventListener('ended', () => removeActive());
