/* віком людини визначити в якій вона категорії:
 •   немовля (0 - 1)
 •   малюк (2 - 6)
 •   дитина (7 - 11)
 •   підліток (12 - 18)
 •   дорослий (19 - 59)
 •   старий (60 - 80)
 •   дуже старий (80+)
 */

let age = 16;
const isInfant = 0 <= age && age <= 1;
const isBaby = 2 <= age && age <= 6;
const isChild = 7 <= age && age <= 11;
const isTeen = 12 <= age && age <= 18;
const isAdult = 19 <= age && age <= 59;
const isOldman = 60 <= age && age <= 80;
 
if (isInfant) {
    console.log("Саме сьогодні для вас ми маємо знижки на пустушки");
} else if (isBaby){
   console.log("Для вас сьогодні знижки на памперси");
} else if (isChild) {
    console.log("Сьогодні ваша дитина може вибирати різні іграшки, бо для вас сьогодні знижки");
} else if (isTeen) {
    console.log(" Ми вас розуміємо, тому сьогодні знижки для вас на заспокіливе");
} else if (isAdult) {
    console.log("Ви дорослі, тому купуйте все без знижок");
} else {
    console.log(" У вас багато вільного часу, для вас знижки на споруддя для походів :)))");
}

