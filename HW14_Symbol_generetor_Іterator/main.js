function* createIdGenerator() {
    let id = 0;
    while (true) {
        yield id++
    }
}

const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

const btnUp = document.getElementById('up');
const btnDown = document.getElementById('down');
const text = document.getElementById('text');

function* newFontGenerator(font) {
    let newFont = yield;
    while (true) {
        if (newFont === "up") {
            font += 2;
        } else if (newFont === "down") {
            font -= 2;
        }
        newFont = yield font;
    }
}

const fontGenerator = newFontGenerator(18);
fontGenerator.next();

btnUp.addEventListener('click', () => {
    text.style.fontSize = `${fontGenerator.next("up").value}px`
});

btnDown.addEventListener('click', () => {
    text.style.fontSize = `${fontGenerator.next("down").value}px`
})
