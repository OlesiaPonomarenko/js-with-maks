// HOME WORK
/**
 * Вказуємо к-сть замовлень кожної одиниці товару.
 * Якщо замовили все хоча б 1 раз то буде пончик + кава.
 * Якщо 2 різних одиниці товару, то буде кава.
 * Якщо тільки щось 1, то лише серветки.
 * Якщо нічого, то запропонувати склянку води.
 */
function orderPizza(pizza_number, cola_number, fries_number) {
  // true && true = true
  // false && true = false
  // true && false = false

  // 4 && 1 && 5 = true
  if (pizza_number && cola_number && fries_number) {
    return 'Для вас смачна кава та полуничний пончик у подарунок.';
  } else if (
    (pizza_number && cola_number) ||
    (fries_number && cola_number) ||
    (pizza_number && fries_number)
  ) {
    return 'Для вас смачна кава у подарунок.';
  } else if (pizza_number || cola_number || fries_number) {
    return 'У вас сьогодні тематичні серветки у подарунок.';
  } else {
    return 'Ми все розуміємо, тримайте склянку води з лимоном.';
  }
}
console.log('Перше замовлення.');
console.log(orderPizza(4, 1, 5));
console.log('Друге замовлення.');
console.log(orderPizza(2, 0, 5));
console.log('Третє замовлення.');
console.log(orderPizza(3, 0, 0));
console.log('Четверте замовлення.');
console.log(orderPizza(0, 0, 0));
