
const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

// Список предметів
const getSubjects = (students) => {
  let arr = Object.keys(students.subjects)
  let sub = []
  for (let i = 0; i < arr.length; i++) {
    sub.push((arr[i].charAt(0).toUpperCase() + arr[i].slice(1)).replaceAll("_", " "));
  }
  return sub

}
console.log(`Список предметів ${students[0].name}:`, getSubjects(students[0]));

;

// Середня оцінка
const getAverageMark = (students) => {
  const arr = (Object.values(students.subjects)).join(",").split(",");
  return (arr.reduce((sum, el) => sum + Number(el), 0) / arr.length).toFixed(2);
}
console.log(`Середня оцінка ${students[0].name}:`, getAverageMark(students[0]));

// Інформація про студента
const getStudentInfo = (students) => {
  return console.log('Інформація про студента:' + '\n' + 'course:', students.course, ',' + '\n'
    + 'name:', students.name, ',' + '\n'
  + 'averageMark:', getAverageMark(students))
}
getStudentInfo(students[0]);


//імена студентів у алфавітному порядку.
const getStudentsNames = (students) => {
  let arr = [];
  for (const key in students) {
    arr.push(students[key].name.split(',').join(','));
  }
  return arr.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  })
}
console.log('Імена студентів в алфавітному порядку:', getStudentsNames(students));

// повертає кращого студента зі списку по показнику середньої оцінки.
const getBestStudent = (students) => {
  let markMax = getAverageMark(students[0]);
  let name = students[0].name;
  for (let i = 0; i < students.length; i++) {
    while (getAverageMark(students[i]) > markMax) {
      markMax = getAverageMark(students[i]);
      name = students[i].name
    }
  }
  return name
}
console.log('Кращий студент:', getBestStudent(students));


// функція calculateWordLetters("тест") 
const calculateWordLetters = (string) => {
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    !obj.hasOwnProperty(string[i]) ? obj[string[i]] = 1 : obj[string[i]] += 1;
  }
  return obj
}
console.log('Ключі букви, значення-кількість їх повторень:', calculateWordLetters('test'));
