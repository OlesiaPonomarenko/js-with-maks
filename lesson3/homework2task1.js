
/*1. Навести приклади використання усіх логічних операторів: >, <, &&, ||, <=, >=, !==, ===, !*/

/*

*/
const apple = 17;
const banana = 9;

if (apple > banana) {
    console.log("Яблук більше, залиш банани на завтра.")
} else {
    console.log("Бананів більше ніж яблук, можно спекти кекс.")
}

const cake = "Citrinukas";
const cakeTwo = "Choco-Mocco";
// let order = (cake && cakeTwo) || (cake || cakeTwo ) ? "Фруктовий чай йде в подарунок" : "Кипяток безкоштовно:)))";
// параметри функції 
function order(cake, cakeTwo) {
    /*
    Якщо замовили 2 торти, то буде ще фруктовий чай.
    У всіх інших випадках буде кипʼяток.
    */

    if (cake === undefined || cakeTwo === undefined) {
        return "Кипяток безкоштовно:)))"
    } else {
        return "Фруктовий чай йде в подарунок";
    }
}


console.log(order("Citrinukas", "Choco-Mocco" ));