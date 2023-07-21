'use strict';

let money = prompt("Ваш бюджет на месяц"," Пример: 30000");
let time = prompt("Введите дату в формате YYYY-MM-DD","Пример: 1996-05-08");

let exp1 = prompt("Введите обязательную статью расходов в этом месяце через запятую");
let exp2 = prompt("Во сколько обойдется?","Пример: 20000");
let expensens = {
    whatMust:exp1,
    howMach:exp2
};

let appData = {
    cash:money,
    timeData:time,
    expensess:expensens,
    optionalExpenses:"",
    income:"",
    savings:false
};

alert("После покупки" + " " + expensens.whatMust + " " + "свободных денег у тебя останется" + " " + (money-exp2));
console.log("Существует типы - строка, число, логическое выражение, undefind, null, объект и символ - всего 7");
console.log("|| - или, && - И .  операторы сравнения, логические выражения.");
