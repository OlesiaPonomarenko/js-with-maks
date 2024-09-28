/*3) Є 2 змінні isHoliday та isWeekend. 
  Потрібно відповісти на питання, чи треба йти в школу
*/

const length = 20;
const width = 10;
const perimeter = 2 * (length + width);     // *, + математичні оператори -> число

const age = 21;
const isAbleToVote = (age >= 18);           // логічний оператор –> true, false

const fruit = "банан";
const isApple = (fruit === "яблуко");       // 

// Логічний оператор: >, <, &&, ||, <=, >=, !==, ===, !


const dayWeek = 5;
const month = 6;
// 3 місяці літа 1 місяць зими
const isHoliday = (month  === 1) || (month === 6) || (month === 7) || (month === 8);
const isWeekend = (dayWeek === 6) || (dayWeek === 7);

if (isHoliday || isWeekend) {
    console.log("Ураа, в школу йти не треба" );
} else  {
    console.log( "Збирай ранець, топай в школу");
}

// ? "Канікули, ти їх нарешті дочекався" : "Ні, мій милий, школа, школа"
//  ? "Ураа, в школу йти не треба, вихідний ж" : "Збирай ранець, топай в школу"
// console.log(isWeekend); 
// console.log(isHoliday);