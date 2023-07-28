'use strict';


let money = prompt("Ваш бюджет на месяц"," Пример: 30000").replace(/[^\d]/g, '');
    while (money == false) {
    money = prompt("Ваш бюджет на месяц"," Пример: 30000").replace(/[^\d]/g, '');
};

let time = prompt("Введите дату в формате YYYY-MM-DD","Пример: 1996-05-08");

let appData = {
    cash:money,
    timeData:time,
    expensens:{},
    optionalExpenses:{},
    income:{},
    savings:false
};

for (let iexp = 0; iexp < 2; iexp++) {
        let exp1 = prompt("Введите обязательную статью расходов в этом месяце через запятую");
            while (exp1 == false || exp1 == null) {
                exp1 = prompt("Введите обязательную статью расходов в этом месяце через запятую");
            };
        let exp2 = prompt("Во сколько обойдется?","Пример: 20000").replace(/[^\d]/g, '');
             while (exp2 == false) {
             exp2 = prompt("Во сколько обойдется?","Пример: 20000").replace(/[^\d]/g, '');
             };
        appData.expensens = {
            a: exp1,
            b: exp2
        };
};
console.log(appData.expensens); 
// let exp1 = prompt("Введите обязательную статью расходов в этом месяце через запятую");
//     while (exp1 == false || exp1 == null) {
//     exp1 = prompt("Введите обязательную статью расходов в этом месяце через запятую");
// };

// let exp2 = prompt("Во сколько обойдется?","Пример: 20000").replace(/[^\d]/g, '');
//     while (exp2 == false) {
//     exp2 = prompt("Во сколько обойдется?","Пример: 20000").replace(/[^\d]/g, '');
//     };
// let expensens = {
//     whatMust:exp1,
//     howMach:exp2
// };

let noMust1;
let noMust2;
let noMust3;
function chooseOptExpenses () {
    noMust1 = prompt("Введите необзательный расход 1 из 3","Пример: Кальнка");
    noMust2 = prompt("Введите необзательный расход 2 из 3","Пример: Клуб");
    noMust3 = prompt("Введите необзательный расход 3 из 3","Пример: Новая шапка Мономаха");
};
chooseOptExpenses ();

let optionalExpenses = {
    1 : noMust1,
    2 : noMust2,
    3 : noMust3
};
console.log(optionalExpenses);

let chooseIncome = prompt("Ведите дополнительне источники дохода","Пример: Преподавание танцев, продажа домашних пирожков и т.д.");
    while (chooseIncome == false || chooseIncome == null) {
    chooseIncome = prompt("Обязательно ведите дополнительне источники дохода","Пример: Преподавание танцев, продажа домашних пирожков и т.д.");
};

chooseIncome.split(",").forEach(function(item, i, massChooseIncome) {
    console.log("Спобосбы доп заработка " + (i+1) + ": " + item);
});


for (let key in appData) {
    console.log("Наша программа включает в себя такие данные, как: " + appData[key]);
};


function detectDayBudget () {
    let freeMonthMoney = "После покупки" + " " + expensens.whatMust + ", " + "свободных денег у тебя останется" + ": " + (money-exp2) + " руб";
    let moneyInDay = ((money-exp2)/30).toFixed(0);
    let freeDayMoney = "А в день свободных денег у тебя: " + moneyInDay + " руб";
    alert (freeMonthMoney);
    alert (freeDayMoney);
}
detectDayBudget();

function detectLevel () {
    if (money <= 10000) {
        alert ("Так как Ваш бюджет меньше " + money + "вы относитесь к населению с низким уровнем дохода");
    } else {
        if (money >= 100000) {
            alert ("Так как Ваш бюджет больше " + money + "вы относитесь к населению с высоким уровнем дохода");
        } else {
            alert ("Так как Ваш бюджет до 100 000 руб, вы относитесь к населению со средним уровнем дохода");
        }
    }
    };
detectLevel();



console.log("Существует типы - строка, число, логическое выражение, undefind, null, объект и символ - всего 7");
console.log("|| - или, && - И .  операторы сравнения, логические выражения.");
console.log('Перебрать свойства объекта можно через метод for in');





