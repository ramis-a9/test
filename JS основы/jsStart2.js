'use strict';

// if (4*2 == 7) {   //Условие в круглых скобках. Значение в скобках превращается в тип данных Boolean (логическое)
//     console.log("Верно"); //Выполнение опр действия 
// } else {          //Если то не верно, ТО делаем это
//     console.log("Неверно");
// }

let num = 50;

if (num < 49) {
    console.log('НЕверно!')
} else if (num > 100) {
    console.log ('Много!')
} else {
    console.log('Верно!')
} //Если num неменьше 49 и небольше 100, то выйдет надпись "Верно!"

(num == 50) ? console.log('Верно!') : console.log('НЕверно!'); //Это был тернарный оператор, 
// т.к. тут уаствуют 3 аргумента, Если было бы 2 - то бинарный назывался бы. А если 1 - то унарный.  

switch (num) {    //Здесь вбиваем то, что будем проверять
    case num < 49:          // case - это замена if
        console.log('НЕверно!');   // то действие, что выполнится
        break;   //обязательно нужно, чтобы процесс остановился, если все ОК
    case num > 100:
        console.log ('Много!');
        break;
    case num > 80:
        console.log ('Много!');
        break;
    case 50: //нельзя писать num == 50, это будет ОШИБКОЙ, пишет вот так!!!
        console.log('Верно!');
        break;
    default:   //если не выполнится ниодно из условий, пойдет это
        console.log("Что то пошло не так!");
        break;
}

console.log("!!!!!!!!!!!!!!!!!!!!!!!!!");

let red = 'Стой', yellow = 'Подготовься, но стой', green = 'Иди';

let light = green;
if (light == red) {
    console.log('Стой');
} else if (light == yellow) {
    console.log('Подготовься, но стой');
} else {
    console.log(green);
}

switch(light) {
    case red:
        console.log(red);
        break;
    case yellow:
        conslole.log(yellow);
        break;
    default:
        console.log(green);
        break;
}

light = green ? console.log(green) : console.log("Стой");