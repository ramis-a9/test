'use strict';


// let alertt = prompt('Введите Ваше имя?','Поле для ввода');
// let alertt2 = prompt('Повторите ввод!');
// console.log(alertt);
// console.log(alertt2);
// let hello = "Привет!";
// alert(hello + " " + alertt);


// console.log(5+3);
// console.log(5-3);
// console.log(5*3);
// console.log(5/3);
// console.log(5%3);
console.log(3%5);
console.log(5+'3');
console.log('5'-3);
console.log(75+'кг');
console.log(typeof('9'/3));
console.log(typeof('number'+1+3));
console.log(typeof(1+3+'number'));
console.log(typeof('4px'-3));

function reternNumber (n) {
n = n + "";
return n.split('').reverse().join('');
}
console.log(reternNumber(2281488));

function checkPolindron (text) {
    let x = text;
    text = text + "";
    if (text.split('').reverse().join('') == x) {
        return text;
    } else {
        return text + " " + "не Палиндром";
    }
}
console.log(checkPolindron("level"));
console.log(checkPolindron('topot'));
console.log(checkPolindron("that"));

function alphabet_order(str) {
    str = str + "";
    return str.sort;
}
console.log(alphabet_order("dfdaasca")); НЕ РАБОТАЕТ ОН!
