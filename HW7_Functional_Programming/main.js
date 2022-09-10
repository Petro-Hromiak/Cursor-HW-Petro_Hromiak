
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
    // const number = this.tax * salary;
    return this.tax * salary;
}
document.writeln(`Сума податку в Україні складає:`, getMyTaxes.call(ukraine, 1000), `<br>`);
document.writeln(`Сума податку в Латвії складає:`, getMyTaxes.call(latvia, 1000), `<br>`);
document.writeln(`Сума податку в Литві складає:`, getMyTaxes.call(litva, 1000), `<br>`);



function getMiddleTaxes() {
    // const middleTax = this.tax * this.middleSalary;
    return this.tax * this.middleSalary;
}
document.writeln(`Середня сума податку в Україні складає:`, getMiddleTaxes.call(ukraine), `<br>`);
document.writeln(`Середня сума податку в Латвії складає:`, getMiddleTaxes.call(latvia), `<br>`);
document.writeln(`Середня сума податку в Литві складає:`, getMiddleTaxes.call(litva), `<br>`);

function getTotalTaxes() {
    // const generalTax = this.tax * this.middleSalary * this.vacancies;
    return this.tax * this.middleSalary * this.vacancies;
}
document.writeln(`Загальна сума податку в Україні складає:`, getTotalTaxes.call(ukraine), `<br>`);
document.writeln(`Загальна сума податку в Латвії складає:`, getTotalTaxes.call(latvia), `<br>`);
document.writeln(`Загальна сума податку в Литві складає:`, getTotalTaxes.call(litva), `<br>`);

function getMySalary() {
    let salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
    let taxes = (this.tax * salary).toFixed(1);
    let profit = salary - taxes;
    let obj = {
        salary,
        taxes,
        profit
    }
    return obj;
}

setInterval(() => console.log(`Мій заробіток в Україні складає:`, getMySalary.call(ukraine)), 10000);
setInterval(() => console.log(`Мій заробіток в Латвії складає:`, getMySalary.call(latvia)), 10000);
setInterval(() => console.log(`Мій заробіток в Литві складає:`, getMySalary.call(litva)), 10000);


