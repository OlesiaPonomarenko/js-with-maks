// є номер місяця (завжди від 1 до 12) -> програма визначає пору року
// Winter, Spring, Summer, Autumn


           
const month = 5;
let season;  
const winter = (month === 1) || (month === 2) || (month === 12) ; 
const spring = (month === 3) || (month === 4) || (month === 5);
const summer = (month === 6) || (month === 7) || (month === 8);
const autumn = (month === 9) || (month === 10) || (month === 11);
if (winter) {
    season = "Одягайся потепліше, холодно, Зима на дворі.";
} else if (spring) {
    season = ("Весна на дворі, всюди квітнуть квіти, але кофтину не забувай");
} else if (summer) {
    season = ("Літо на дворі, не забуть захист від сонця, але літо є літо, відпочивай");
} else {
    season = ("Осінь на дворі, парасолька і гумові чоботи, то є твої осінні друзі.");
}

console.log(season);