// 3. Є nuts горішків, які потрібно поділити порівну між people людьми.
//  По скільки горішків отримає кожна людина.

const nuts = 137;
const people = 13;
// залишок;
const nutsLeft = nuts % people;
// для рівної кількості
const nutsPeople = nuts - nutsLeft;
// всім порівну
// nuts per person
const nutsPerPerson = nutsPeople / people;

console.log(`Залишиться ${nutsLeft} горішків`);
console.log(`Загальна кількість ${nutsPeople} горішків для людей`);
console.log(`По ${nutsPerPerson} горішків кожній людині`);
