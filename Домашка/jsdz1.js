'use strict';

let money = prompt("Ваш бюджет на месяц","30 000");
let time = prompt("Введите дату в формате YYYY-MM-DD","1996-05-08");
console.log(money, time);

let exp1 = prompt("Введите обязательную статью расходов в этом месяце");
let exp2 = prompt("Во сколько обойдется?");
let expensens = {
    whatMust(prompt("Введите обязательную статью расходов в этом месяце")):howMach(prompt("Во сколько обойдется?"))
},

let appData = {
    cash:money,
    timeData:time,
    
    optionalExpenses:"empty",
    income:"arr",
    savings:false
};
console.log(appData)

