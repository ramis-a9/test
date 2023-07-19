'use strict';

console.log([ ] + false - null + true); // здесь будет NaN - пустое число, бессмылсенная операция
let y = 1; 
let x = y; 
y=3;
console.log(x);
console.log(y); // y = 3, а вот х = 1 !! Тут нет зависимости в режиме кода! Х не изменился!

let p = [ ] + 1 + 2;
console.log(p); // Здесь будет ответ 12 ! Тип Стринг!! Квадратные скобки сказываются на типе!

let p1 = "1"[0];
console.log(p1); // выведет - 1 Тип - стринг

let p2 = 2 && 1 && null && 0 && undefined;
console.log(p2); // Ответ будет null 

let g = true;
let h = true;
console.log(!!(g && h)); //Здесь два знака "!". Первый знак ставит Не -отрицанине, второй опять ставит НЕ - отрицаение (что дает +), и тд
console.log(g && h); // Это одинаковые выражения

console.log( null || 2 && 3 || 4 ); // выведет 3 - а ПОЧЕМУ ???

let a = [1, 2, 3]; 
let b = [1, 2, 3];
console.log(a == b); //массивы не будут равны!! Это 2 объекта, а объекты не равны !

let p3 = +"Infinity"; 
console.log(p3); // Выведет только Infinity - а тип будет - number

console.log("ёжик" > "яблоко"); //здесь будет true  ПОЧЕМУ ??
console.log(0 || "" || 2 || undefined || true || falsе); // ответ - 2. ПОЧЕМУ ??


