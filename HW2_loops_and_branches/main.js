let numberN = +prompt('Введіть початкове значення');
let numberM = +prompt('Введіть кінцеве значення');


while (!Number.isInteger(numberN) || numberN == '' || numberN < 0) {
    numberN = +prompt(`Початкове значення не є числом або цілим чи додатнім, будь-ласка введіть ціле додатнє число`);
}
while (!Number.isInteger(numberM) || numberM == '' || numberM < 0) {
    numberM = +prompt(`Початкове значення не є числом або цілим чи додатнім, будь-ласка введіть ціле додатнє число`);
}
while (numberN >= numberM) {
    numberN = +prompt(`Початкове значення є більшим або рівним кінцевому, введіть початкове значення`);
    numberM = +prompt(`Кінцеве значення є меншим або рівним початковому, введіть кінцеве значення`);

}
let evenOrOdd = confirm('Чи бажаєте пропускати парні числа', true);

let sum = 0;

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