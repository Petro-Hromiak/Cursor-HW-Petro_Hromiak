
// function 1
function getMaxDigit(num) {
    return Math.max(...(String(num).split('')))
}
// const getMaxDigit = num => Math.max(...(String(num).split('')));
// console.log(getMaxDigit(1236));

// function 2
function calcDegree(num, pow) {
    let degree = 1;
    for (let i = 0; i < pow; i++) {
        degree *= num;
    }
    return degree
};
// console.log(calcDegree(2, 3));


// function 3
function getFirstLetterUpperCase(name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
// console.log(getFirstLetterUpperCase('PeTro'));



// function 4
function tax(salary) {
    const taxSum = 19.5;
    return salary * ((100 - taxSum) / 100);
}
// console.log(tax(1000));


// function 5 
function getRandomNumber(N, M) {
    return Math.floor(Math.random() * (M - N) + N);
}
// console.log(getRandomNumber(1, 10));


// function 6
function countLetter(letter, word) {
    let counter = 0;
    const wordLowerCase = word.toLowerCase();
    const letterLowerCase = letter.toLowerCase();
    for (let i = 0; i < wordLowerCase.length; i++) {
        if (letterLowerCase == wordLowerCase[i]) {
            counter += 1;
        }
    }
    return counter;
}
// console.log(countLetter("А", "Асталавіста"));


// function 7

function convertCurrency(sum) {
    let result;
    if (!sum.includes("$") || !sum.toLowerCase().includes("uah")) {
        result = 'така валюта не конвертується'
    }
    if (sum.includes("$")) {
        result = sum.replace("$", "") * 25 + "грн";
    }
    if (sum.toLowerCase().includes("uah")) {
        result = sum.toLowerCase().replace("uah", "") / 25 + "$";
    }
    return result;
}
// console.log(convertCurrency(`100$`));


// function 8
function getRandomPassword(lengthPass = 8) {
    password = '';
    for (let i = 0; i < lengthPass; i++) {
        password += Math.floor(Math.random() * 10).toString()
    }
    return password;
}
// console.log(getRandomPassword(4));



//  function 9
function deleteLetter(letter, word) {
    let newWord="";
    const wordLowerCase = word.toLowerCase();
    const letterLowerCase = letter.toLowerCase();
    for (let i = 0; i < wordLowerCase.length; i++) {
        if (letterLowerCase !== wordLowerCase[i]) {
            newWord +=wordLowerCase[i];
        }
    }
    return newWord;
}
// console.log(deleteLetter('a', "blablabla"));



// function 10
function isPalyndrom(str) {
    let lowerStr = str.replaceAll(' ','').toLowerCase();
    let reverseStr = lowerStr.split('').reverse().join('');
    return reverseStr === lowerStr;
}
// console.log(isPalyndrom("Я несу гусеня"));


// function 11
function deleteDuplicateLetter(sentence) {
    let newSentence = "";
    sentence = sentence.toLowerCase();
    for (let i = 0; i < sentence.length; i++) {
        if (sentence.lastIndexOf(sentence[i]) === sentence.indexOf(sentence[i])) {
            newSentence += sentence[i]
        }
        else {
            newSentence;
        }
    }
    return newSentence;
}
// console.log(deleteDuplicateLetter("Бісквіт був дуже ніжним"));

document.writeln(`Функція 1. ${getMaxDigit(1236)} <br>`);
document.writeln(`Функція 2. ${calcDegree(2, 3)} <br>`);
document.writeln(`Функція 3. ${getFirstLetterUpperCase('PeTro')} <br>`);
document.writeln(`Функція 4. ${tax(1000)} <br>`);
document.writeln(`Функція 5. ${getRandomNumber(1, 10)} <br>`);
document.writeln(`Функція 6. ${countLetter("А", "Асталавіста")} <br>`);
document.writeln(`Функція 7. ${convertCurrency(`100$`)} <br>`);
document.writeln(`Функція 8. ${getRandomPassword(4)} <br>`);
document.writeln(`Функція 9. ${deleteLetter('a', "blablabla")} <br>`);
document.writeln(`Функція 10. ${isPalyndrom("Я несу гусеня")} <br>`);
document.writeln(`Функція 11. ${deleteDuplicateLetter("Бісквіт був дуже ніжним")} <br>`);


