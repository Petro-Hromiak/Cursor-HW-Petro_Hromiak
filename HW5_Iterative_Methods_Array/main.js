// У цьому домашньому завданні вам необхідно зробити мінімум 6 функцій (на вибір)

// Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 
// У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. 
// Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

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

// Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

// Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

const getAverage = (...numbers) => {
    const arr = numbers.filter(el => Number.isInteger(el));
    return (arr.reduce((sum, el) => sum + el, 0)) / arr.length;
}
console.log('Середнє арифметичне всіх аргументів:', getAverage(10, 1, 0.2, 100, 0.5));

// Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 Приклад: getMedian(1, 2, 3, 4) –> 2.5
// Приклад: getMedian(1, 2, 3, 4, 5) –> 3

const getMedian = (...numbers) => {
    const arr = numbers.filter(el => Number.isInteger(el)).sort((a, b) => a - b);
    return arr.length % 2 ? arr[Math.floor(arr.length / 2)] : (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2;
}
console.log('Медіана цілих чисел:', getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log('Медіана цілих чисел:', getMedian(1, 2, 3, 4));
console.log('Медіана цілих чисел:', getMedian(1, 2, 3, 4, 5));

// Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

const filterEvenNumbers = (...numbers) => numbers.filter(el => el % 2);
console.log('Фільтр парних чисел:', filterEvenNumbers(1, 2, 3, 4, 5, 6));

// Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

const countPositiveNumbers = (...numbers) => {
    const arr = numbers.filter(el => el > 0);
    return arr.length;
}
console.log('Кількість чисел більших 0:', countPositiveNumbers(1, -2, 3, -4, -5, 6));

// Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
// Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

const getDividedByFive = (...numbers) => numbers.filter(el => !(el % 5));
console.log('Фільтр чисел, які діляться на ціло на 5:', getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*).
// При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "),
// після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
// Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?"
// Приклад: replaceBadWords("Holy shit!") -> "Holy ****!" Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

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


// Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.
// Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру.
// Приклад: divideByThree("Commander) -> ["com", "man", "der"]
// Приклад: divideByThree("live") -> ["liv", "e"]



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