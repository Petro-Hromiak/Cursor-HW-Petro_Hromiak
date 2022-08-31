

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// get Pair
const studentsPairsFunction = (students) => {
    const studentsPairs = [];
    const boys = [];
    const girls = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].trim().slice(-1) === "а") {
            girls.push(students[i]);

        } else {
            boys.push(students[i]);
        }
    };
    for (let i = 0; i < boys.length; i++) {
        studentsPairs.push([boys[i], girls[i]])

    }
    return studentsPairs;
};

const studentsPairs = studentsPairsFunction(students)
console.log('Сформовані пари:', studentsPairs);

// get Pair and Themes
const studentsPairsWithThemesFunction = (studentsPairs) => {
    const studentsPairsWithThemes = [];
    for (let i = 0; i < studentsPairs.length; i++) {
        studentsPairsWithThemes.push([studentsPairs[i].join(' і '), themes[i]])
    }
    return studentsPairsWithThemes;
}
const studentsPairsWithThemes = studentsPairsWithThemesFunction(studentsPairs);
console.log('Пари з темами:', studentsPairsWithThemes)

// get Students Mark
const studentsWithMarksFunction = (students, marks) => {
    const studentsWithMarks = [];
    for (let i = 0; i < students.length; i++) {

        studentsWithMarks.push([students[i], marks[i]])
    };
    return studentsWithMarks;
}
const studentsWithMarks = studentsWithMarksFunction(students, marks);
console.log('Журнал оцінок', studentsWithMarks);


// get Random Marks
const randomMarks = () => Math.floor(Math.random() * 5) + 1

// function randomMarks() {
//     return Math.floor(Math.random() * 5) + 1;
// };

// get PAir with Marks
const pairsWithMarksFunction = (studentsPairsWithThemes) => {
    const pairsWithMarks = [];
    for (let i = 0; i < studentsPairsWithThemes.length; i++) {
        pairsWithMarks.push(studentsPairsWithThemes[i].concat(randomMarks()))
    };
    return pairsWithMarks;
}

const pairsWithMarks = pairsWithMarksFunction(studentsPairsWithThemes)
console.log('Оцінки групові за темою', pairsWithMarks);
