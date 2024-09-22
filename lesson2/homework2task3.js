/*3) Є 2 змінні isHoliday та isWeekend. 
  Потрібно відповісти на питання, чи треба йти в школу
*/

const dayWeek = 7;
const isHoliday = true;
const isWeekend = dayWeek % 6 && dayWeek % 7 === 0 ? "Ураа, в школу йти не треба, вихідний ж" : "Збирай ранець, топай в школу";

console.log(isWeekend); 
