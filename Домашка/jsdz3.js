'use strict';

let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++
} 
while (num < 53);

console.log("!1111111111111111");

for (let i = 30; i < 34; i++) {
    console.log(i);
}

for (let i = 40; i <50; i=i+1) {
    if (i == 43) {
        break;
    }
    console.log(i);
};

for (let x = 101; x < 105; x++) {
    if (x == 102) {
        continue;
    } if (x == 103) {
        continue
    }
    console.log(x);
};

let mass = [1, 2, 3, 4, 5];
for (let i = 1; i < mass.length; i++) {
    console.log(i);
};
// Существует 3 вида циклов 
// while – Проверяет условие перед каждой итерацией.
// do..while – Проверяет условие после каждой итерации.
// for (;;) – Проверяет условие перед каждой итерацией, есть возможность задать дополнительные настройки.

let appData = {
    cash:{},
    timeData:{},
    expensens:{},
    optionalExpenses:{},
    income:{},
    savings:true
};

(appData.savings = confirm("da net"));
console.log(appData.savings);
