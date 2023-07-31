'use strict';

let money, time;

function start () {
    money = +prompt("Ваш бюджет на месяц"," Пример: 30000").replace(/[^\d]/g, '');
        while (isNaN(money) || money == "" || money == null || money == NaN) {
        money = +prompt("Ваш бюджет на месяц"," Пример: 30000").replace(/[^\d]/g, '');
};
    time = prompt("Введите дату в формате YYYY-MM-DD","Пример: 2023-31-07");
};
start();

let appData = {
    cash:money,
    timeData:time,
    expensens:{},
    optionalExpenses:{},
    income:[],
    savings:true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let exp1 = prompt("Введите обязательную статью расходов в этом месяце через запятую");
            let exp2 = +prompt("Во сколько обойдется?","Пример: 20000").replace(/[^\d]/g, '');
            if ( (typeof(exp1)) === "string" && (typeof(exp1)) != null && (typeof(exp2)) != null
                && exp1 != "" && exp2 != "" && exp1.length < 50) {
                console.log('Done');
                appData.expensens[exp1] = exp2; 
            } else {
                i--;
            }
        }
        
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.cash / 30).toFixed(); //он округлит до целого, если вписать в скобки число, то до этого числа после запятой. НО он в любом случае даст строковое значение!
        alert("Ежедневный бюджет " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (money <= 10000) {
            alert ("Так как Ваш бюджет меньше " + money + "вы относитесь к населению с низким уровнем дохода");
        } else {
            if (money >= 100000) {
            alert ("Так как Ваш бюджет больше " + money + "вы относитесь к населению с высоким уровнем дохода");
            } else {
            alert ("Так как Ваш бюджет до 100 000 руб, вы относитесь к населению со средним уровнем дохода");
            }
        }
    },
    checkSavings: function (){
        appData.savings = confirm("Eсть ли у Вас накопления в банке под процент?");
        if (appData.savings == true) {
            let save = +prompt("Какова Сумма накоплений"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = (save/100/12*percent).toFixed;
            alert("Доход в месяц с Вашего депозита " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (i = 1; i < 3; i++) {
            let opt = prompt("Введите статья необязательных расходов","Пример: Одежда, отдых, гуляш мясной");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncomeFunc: function () {
        let chooseIncome = prompt("Ведите дополнительне источники дохода","Пример: Преподавание танцев, продажа домашних пирожков и т.д.");
        while (chooseIncome == false || chooseIncome == null || chooseIncome == "") {
            chooseIncome = prompt("Обязательно ведите дополнительне источники дохода","Пример: Преподавание танцев, продажа домашних пирожков и т.д.");
        }
    appData.income = chooseIncome.split(",");
    appData.income.push(prompt("Может что-то еще?"));
    appData.income.sort();
        chooseIncome.split(",").forEach(function(item, i, massChooseIncome) {
            console.log("Спобосбы дополнительного заработка " + (i+1) + ": " + item);
        })
    }
};


for (let key in appData) {
    console.log("Наша программа включает в себя такие данные, как: " + appData[key]);
};

console.log("Существует типы - строка, число, логическое выражение, undefind, null, объект и символ - всего 7");
console.log("|| - или, && - И .  операторы сравнения, логические выражения.");
console.log('Перебрать свойства объекта можно через метод for in');





