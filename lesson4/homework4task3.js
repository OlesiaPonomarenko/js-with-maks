// 2) Перевірка на високосний рік.
// ..., але якщо ділиться на 100, то не високосний, але якщо ділиться на 400, то точно високосний

const nowYears = 1600;
// // 1901 & 2099 підходить старе правило
// // 1700

const oldYears = 0 <= nowYears && nowYears <= 1900;
const newYears = 1901 <= nowYears && nowYears <= 2099;

if ((0 <= nowYears && nowYears <= 1900) === ((nowYears % 400) === 0) ){
    console.log(`${nowYears}  високосний рік, так що рік буде цікавим.`);
} else {
    console.log(`${nowYears} не високосний рік, можете розслабитися.`)
}

