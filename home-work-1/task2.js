// // 2. Оголосити число n, дати йому будь-яке значення
//     а) Перевірити, чи це число є парним чи непарним
//     б) Знайти останню цифру числа.

const roses = 70;
// digit
const lastDigit = roses % 10; //     Знайти останню цифру числа.
// even - парне, odd - непа
const isEven = roses % 2 === 0; // n % 2 = 1
// логічні оператора: ===, !==, >, <, >=, <=, &&, ||, !
const isSunny = "Похмуро";

console.log("isSunny =", isSunny);

console.log("Завдання а)");
console.log(lastDigit);
console.log();

console.log("Завдання б)");
console.log("isEven =", isEven);
// if (isEven) {
//   console.log("even");
// } else {
//   console.log("odd");
// }
