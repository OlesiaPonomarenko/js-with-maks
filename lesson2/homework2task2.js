// 2) Перевірка на високосний рік.


const nowYears = 1975;
const leapYear = nowYears % 4;

if (leapYear === 0) {
    console.log(`${nowYears}  високосний рік, так рік шо буде цікавим`);
} else {
     console.log(`${nowYears} не високосний рік, можете розслабитися `);
}