// У цьому завданні вам необхідно створити клас Student та розробляти методи всередині цього класу.

// У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).
// Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", 
// метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
// Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
// Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, 
// геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
// Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
// Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та 
// отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)
// Створіть метод this.recover, який дозволить поновити студента

// Advanced

// Створіть новий клас BudgetStudent, який повністю наслідує клас Student
// Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship. Отримання стипендії 
// супроводжується виведенням інформації в консоль: Ви отримали 1400 грн. стипендії
// Метод отримання стипендії автоматично викликається кожні 30 секунд післе створення об'єкту. Підказка: викликайте його в constructor
// Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0
// Якщо студента виключено, він не отримує стипендію (думаю це було і так очевидно :) )

class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.dismissed = false;
    }
    getinfo() {
        return (`Студент ${this.course} курсу ${this.university}, ${this.fullName}`)
    }

    get getMarks() {
        if (this.dismissed === true) {
            return null;
        }
        return this.marks;
    }

    set addMark(mark) {
        if (this.dismissed === false) {
            return this.getMarks.push(mark);
        }

    }

    getAverageMark() {
        return this.marks.reduce((acc, el) => acc + el) / this.marks.length;
    }

    dismiss() {
        this.dismissed = true;
    }

    recover() {
        this.dismissed = false;

    }


}

const student = new Student(
    'NYLP',
    '2',
    'Petro Hromiak',
    [5, 4, 4, 5]
)


student.dismiss();
console.log(student)
student.recover();
student.addMark = 5;
console.log(student)
