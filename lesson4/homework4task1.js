// /* віком людини визначити в якій вона категорії:
//  •   немовля (0 - 1)
//  •   малюк (2 - 6)
//  •   дитина (7 - 11)
//  •   підліток (12 - 18)
//  •   дорослий (19 - 59)
//  •   старий (60 - 80)
//  •   дуже старий (80+)
//  */

// let age = 85;

// if (age <= 1) {
//   console.log('Саме сьогодні для вас ми маємо знижки на пустушки');
// } else if (age <= 6) {
//   console.log('Для вас сьогодні знижки на памперси');
// } else if (age <= 11) {
//   console.log(
//     'Сьогодні ваша дитина може вибирати різні іграшки, бо для вас сьогодні знижки'
//   );
// } else if (age <= 18) {
//   console.log(' Ми вас розуміємо, тому сьогодні знижки для вас на заспокіливе');
// } else if (age <= 59) {
//   console.log('Ви дорослі, тому купуйте все без знижок');
// } else if (age <= 80) {
//   console.log(' Для нас знижки на чай і на мед');
// } else {
//   console.log(
//     ' У вас багато вільного часу, для вас знижки на споруддя для походів :)))'
//   );
// }


function checkPassword(password) {
  const correctPassword = "jqueryismyjam";
 return password === correctPassword ?  "Access granted" : "Access denied, wrong password!"

}



console.log(checkPassword("jqueryismyjam"));
console.log(checkPassword("angul4r1sl1f3"));
console.log(checkPassword("r3actsux"));