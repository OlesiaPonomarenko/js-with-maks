/*
Задача 1

Датчик дверей: відчинені чи ні.
Датчик вікна: відчинене чи ні.
Датчик руху: так, ні. 
Датчик спрацювання тривоги: так, ні.

З цих 4 умов можна отримати висновок про сигналізацію.
Двері або вікно відчинені та є рух всередині будинку.
або
Датчик тривоги активований.

---------------
Задача 2
Уяви, що ти розробляєш систему інтелектуального освітлення для будинку, яка автоматично вмикає або вимикає світло в залежності від різних умов:

Датчик руху: Визначає, чи є рух у кімнаті.

Датчик часу доби: Визначає, чи настала ніч (темний час доби).

Вимикач світла: Встановлюється вручну для включення або вимикання світла.

Датчик наявності людей у будинку: Визначає, чи є хтось у будинку.

Світло повинно вмикатися при виконанні таких умов:

Є рух у кімнаті і настала ніч.

Вимикач світла увімкнений.

Наявність людей у будинку і ніч (навіть якщо датчик руху не фіксує рух).

Напиши булевий вираз, який описує логіку роботи системи інтелектуального освітлення.


*/
const isOpenDoor = true;
const isOpenWindow = true;
const isMove = true;
const _isSignal = true;

function callPolice(isOpenDoor, isOpenWindow, isMove, _isSignal) {
    if (isOpenDoor & isOpenWindow & isMove) {
        return `Ау-ау викликайте полісію`;
    } else (_isSignal){
    return `Не хвилютесь, просто злодії придивляються:)`
    }
}

console.log(callPolice(1, 1, ));

const isMovE = true;
const isLightOn = true;
const isDayOrNight = true;
const isPeopleHome = true;

function move ()