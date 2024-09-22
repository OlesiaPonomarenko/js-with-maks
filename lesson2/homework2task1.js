
/*
Домашнє завдання:
1) Є 3 робітники, які працюєть по черзі: Вася, Коля, Арсен.
   Щоб виконати всю роботу потрібно зарагалом 100 днів.
   Відомий номер дня (15 день). Програма повинна написати, 
   хто сьогодні буде працювати.
*/

const workerOne = "Вася";
const workerTwo = "Коля";
const workerThree = "Арсен";
const totalDayForWork = 100;
const dayToday = 7;
const dayWork = dayToday % 3;

console.log(`На виконання робіт потрібно ${totalDayForWork} днів`);

console.log(`Відповідальні робітники ${workerOne}, ${workerTwo}, ${workerThree}`);
console.log(`Вже ${dayToday} день проекту`);

if (dayWork === 0) {
   console.log(`'Сьогодні працює ${workerThree}.'`);
} else if (dayWork === 1) {
   console.log(`'Сьогодні працює ${workerOne}.'`);
} else {
      console.log(`'Сьогодні працює ${workerTwo}.'`);
   }
   

