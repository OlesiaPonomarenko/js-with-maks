// є номер місяця (завжди від 1 до 12) -> програма визначає пору року
// Winter, Spring, Summer, Autumn


           
const month = 1;
let season;  
// const isWinter = (month === 1) || (month === 2) || (month === 12) ; 
const isSpring = 3 <= month && month <= 5;                            
const isSummer = 6 <= month && month <= 8;
const isAutumn = 9 <= month && month <= 11;
if (isAutumn) {
    season = ("Осінь на дворі, парасолька і гумові чоботи, то є твої осінні друзі.");
} else if (isSpring) {
    season = ("Весна на дворі, всюди квітнуть квіти, але кофтину не забувай");
} else if (isSummer) {
    season = ("Літо на дворі, не забуть захист від сонця, але літо є літо, відпочивай");
} else {
    season = "Одягайся потепліше, холодно, Зима на дворі.";
}

console.log(season);