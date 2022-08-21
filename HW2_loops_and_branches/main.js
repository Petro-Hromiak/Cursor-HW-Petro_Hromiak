let numberN = +prompt('Введіть початкове значення');
let numberM = +prompt('Введіть кінцеве значення');
let evenOrOdd = confirm('Чи бажаєте пропускати парні числа', true);
let sum = 0;

while (!Number.isInteger(numberN) || numberN == '') {
    numberN = +prompt(`Початкове значення не є числом або не є цілим числом, будь-ласка введіть ціле число`);
}
while (!Number.isInteger(numberM) || numberM == '') {
    numberM = +prompt(`Початкове значення не є числом або не є цілим числом, будь-ласка введіть ціле число`);
}
while (numberN >= numberM) {
    numberN = +prompt(`Початкове значення є більшим або рівним кінцевому, введіть початкове значення`);
    numberM = +prompt(`Кінцеве значення є меншим або рівним початковому, введіть кінцеве значення`);

}
for (let i = numberN; i <= numberM; i++) {
    if (evenOrOdd && i % 2 == 0) {
        continue
    }
    else {
        sum += i;
    }
}
if (evenOrOdd) {
    document.writeln(`Сума непарних чисел в проміжку від ${numberN} до ${numberM} рівна ${sum}`)
}
else {
    document.writeln(`Сума чисел в проміжку від ${numberN} до ${numberM} рівна ${sum}`)

}