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


// Створіть генератор, який буде регулювати розміри шрифту для вашого сайту. 
// (Можна допрацювати, щоб реально змінював шрифт, але це не є обов'язковою умовою)
// Працювати генератор буде наступним чином:
// const fontGenerator = newFontGenerator(14); // 14 – стартове значення
// fontGenerator.next("up").value -> 14
// fontGenerator.next("up").value -> 16
// fontGenerator.next("up").value -> 18
// fontGenerator.next().value -> 18
// fontGenerator.next("down").value -> 16


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
