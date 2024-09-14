// data types
const name = "Katya";
let age = 15;
const is_male = false;
const children = [name, age, is_male];

const nameType = typeof name;
const age_type = typeof age;
const is_male_type = typeof is_male;
const children_type = typeof children;

// console.log(nameType);
// console.log(age_type);
// console.log(is_male_type);
// console.log(children_type);

// numbers operations: / * + - %
// Перевірити, чи в людини ювілей
age = 70;
const roundAge = age % 10; // Якою може бути остача від ділення на 10?
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

const balloons = 23;
const guests = 5;
const leftBalloons = balloons % guests;
const giftBalloons = balloons - leftBalloons;
const guestBalloons = giftBalloons / guests;

console.log(leftBalloons);
console.log(giftBalloons);
console.log(guestBalloons);

/*
1. Створити по 3 змінних до кожного типу даних
2. Оголосити число n, дати йому будь-яке значення
    а) Перевірити, чи це число є парним чи непарним
    б) Знайти останню цифру числа.
3. Є nuts горішків, які потрібно поділити порівну між people людьми.
   По скільки горішків отримає кожна людина.
*/

const cars = "BMW";
const speed = 75;
const isAccident = true; // префікс is
const storeCars = [cars, speed, isAccident];

console.log(typeof cars);
console.log(typeof speed);
console.log(typeof isAccident);
console.log(typeof storeCars);

let fruits = "apple";
let countFruit = 75;
let isFresh = true;
let storeFruits = [fruits, countFruit, isFresh];

console.log(typeof fruits);
console.log(typeof countFruit);
console.log(typeof isFresh);
console.log(typeof storeFruits);

fruits = "Ananas";
countFruit = 80;
isFresh = false;
storeFruits = [fruits, countFruit, isFresh];

console.log(typeof fruits);
console.log(typeof countFruit);
console.log(typeof isFresh);
console.log(typeof storeFruits);

// // 2. Оголосити число n, дати йому будь-яке значення
//     а) Перевірити, чи це число є парним чи непарним
//     б) Знайти останню цифру числа.

const roses = 71;
const countRoses = roses % 10; //     Знайти останню цифру числа.

console.log(countRoses);

// 3. Є nuts горішків, які потрібно поділити порівну між people людьми.
//  По скільки горішків отримає кожна людина.

const nuts = 137;
const people = 13;
// залишок;
const countNuts = nuts % people;
// для рівної кількості
const nutsPeople = nuts - countNuts;
// всім порівну
const sameNuts = nutsPeople / people;

console.log(countNuts);
console.log(nutsPeople);
console.log(sameNuts);
