/*За номером визначити назву дня тижня. Приклад: 3 -> Wednesday*/

const dayWeek = 5;
const isMonday = 1;
const isTuesday = 2;
const isWednesday = 3;
const isThursday = 4;
const isFriday = 5;
const isSaturday = 6;

if (dayWeek === isMonday) {
    console.log("Monday - день тяжкий, але це початок неділі, а початок завжди добре.");
} else if (dayWeek === isTuesday) {
    console.log("Tuesday - другий день робочої неділі, сил щє багато, але сильно не витрачай.");
} else if (dayWeek === isWednesday) {
    console.log("Wendnesday - для когось середина неділі, головне балансуй між роботою та відпочинком.");
} else if (dayWeek === isThursday) {
    console.log("Thursday - четвертий день, таки не погано, якщо читаєш це.");
} else if (dayWeek === isFriday) {
    console.log("Friday - ну що п'ятий день, для когось це кінець робочої неділі, але не для тебе:))))");
} else if (dayWeek === isSaturday) {
    console.log("Saturday - гарний день, щоб сходити на роботу, візьми смаколик, щоб не було так важко.");
} else  {
    console.log("Sunday - я люблю свою роботу, я прийду сюди в суботу, і в неділю я тут теж, ну як і ти?:))))");
}