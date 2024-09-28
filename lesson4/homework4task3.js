// 2) Перевірка на високосний рік.
// ..., але якщо ділиться на 100, то не високосний, але якщо ділиться на 400, то точно високосний

const nowYears = 2024;
const leapYearNew = 0 <= nowYears <= 1900;
const leapYearOld = (nowYears % 400) === 0 && (nowYears % 100) === 0 ;
// 1901 & 2099 підходить старе правило
// 1700 

if ((0 <= nowYears && nowYears <= 1900 ) === leapYearOld ){
    console.log(`${nowYears}  високосний рік, так що рік буде цікавим.`);
} else {
     console.log(`${nowYears} не високосний рік, можете розслабитися.`);
}


