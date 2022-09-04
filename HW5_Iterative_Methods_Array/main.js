// масив випадкових чисел
const getRandomArray = (length, min, max) => {
    const randomArray = [];
    min = Math.ceil(min);
    max = Math.floor(max);
    while (randomArray.length < length) {
        randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    return randomArray;
}
console.log('Масив випадкових цілих чисел:', getRandomArray(10, 1, 100));

// середнє арифметичне
const getAverage = (...numbers) => {
    const arr = numbers.filter(el => Number.isInteger(el));
    return (arr.reduce((sum, el) => sum + el, 0)) / arr.length;
}
console.log('Середнє арифметичне всіх аргументів:', getAverage(10, 1, 0.2, 100, 0.5));

// медіана
const getMedian = (...numbers) => {
    const arr = numbers.filter(el => Number.isInteger(el)).sort((a, b) => a - b);
    return arr.length % 2 ? arr[Math.floor(arr.length / 2)] : (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2;
}
console.log('Медіана цілих чисел:', getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log('Медіана цілих чисел:', getMedian(1, 2, 3, 4));
console.log('Медіана цілих чисел:', getMedian(1, 2, 3, 4, 5));

// фільт парних чисел
const filterEvenNumbers = (...numbers) => numbers.filter(el => el % 2);
console.log('Фільтр парних чисел:', filterEvenNumbers(1, 2, 3, 4, 5, 6));

// кількість позитивних чисел
const countPositiveNumbers = (...numbers) => {
    const arr = numbers.filter(el => el > 0);
    return arr.length;
}
console.log('Кількість чисел більших 0:', countPositiveNumbers(1, -2, 3, -4, -5, 6));

// фільт чисел які діляться на 5
const getDividedByFive = (...numbers) => numbers.filter(el => !(el % 5));
console.log('Фільтр чисел, які діляться на ціло на 5:', getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// погані слова
const replaceBadWords = (string) => {
    const badWord = ["fuck", "shit"];
    const replacedArr = string.split(' ').map((el => {
        for (let i = 0; i < badWord.length; i++) {
            if (el.includes(badWord[i])) {
                return el.replaceAll(badWord[i], '*'.repeat(badWord[i].length));
            }
        }
        return el;
    })).join(' ');
    return replacedArr;
}
console.log('Замінить погані слова *:', replaceBadWords("It's bullshit!"));
console.log('Замінить погані слова *:', replaceBadWords("Are you fucking kidding?"));

// склад на 3 букви
const divideByThree = (word) => {
    const string = word.replaceAll(' ', '').toLowerCase();
    const divideArr = [];
    if (string.length >= 3) {
        for (let i = 0; i < string.length; i += 3) {
            divideArr.push(string.slice(i, i + 3));
        }
        return divideArr;
    }
    return string;
}
console.log('Розібє слово на склади по три букви:', divideByThree("Commander"));
console.log('Розібє слово на склади по три букви:', divideByThree("live"));

// Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові.
// Для тестів не передавайте слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10 буквами.
// Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam", "nma"] Приклад: generateCombinations("ol") -> ["ol", "lo"]

// Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2