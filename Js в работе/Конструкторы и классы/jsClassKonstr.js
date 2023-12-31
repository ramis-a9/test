

// ЭТО СТАНДАРТ ES5 
// User - писать не обязательно, может быть любое название, но , с большой буквы
// function User(name, id) { // функция относится к объектам и в нее можно записать и методы и свойства
//     this.name = name;    // Сейчас мы пытаемся дать имена и идентификаторы разным пользователем, которые зашли на сайт
//     this.id = id;   // Наша функция стала конструктором, и мы можем создавать новых пользователей.
//     this.humen = true;
//     this.hello = function() {
//         console('Hello! ' + this.name);
//     };
// };

// User.prototype.exit = function(name) { //exit просто название, можно любое поставить. Мы здесь сделали prototype, а после просто создали новую функцию, которая будет привязываться к имени.
//     console.log('Пользователь ' + this.name + " ушел");
// };


// // Функцию, как и многое другое, можно создать через оператор new
// // Оператор (операторная функция) new создаёт экземпляр объекта, встроенного или определённого пользователем, имеющего конструктор.
// let ivan = new User('Ivan', 25),  // в этих переменных, которые мы создали, лежат объекты, а не функции.
//     alex = new User('Alex', 20); // Когда мы вызвали функцию и передали ей вот эти данные в переменных, она стала функцие конструктором

// console.log(ivan);
// console.log(alex);

// ivan.exit();
// При помощи функции User , мы создали 2 новых объекта, именно поэтому, такие функции называются функциями конструкторами.
// return в таких функциях не нужно указывать

// Кроме свойств, мы можем также прописывать и методы в таких конструкциях

// везде где есть шаблонизация, мы можем использовать конструкторы.

// Контектс вызова -  this - это что окружает функцию, в каких условиях она вызывается
// Контекст вызова - когда что то работает в определенном месте, блоке или иными словами доме - ну буквально типа квартире и тд

// функции можно вызвать 4 способоми и каждый раз контекст вызова будет разный 

//   .....................................................................



// function showThis1 () {
//     console.log(this);
// };
// showThis1(); //и сейчас мы увидим, что является контектом вызова для этой функции
// // и в данном случае это будет объект Window. То есть функция ни к чему не привязана, она как бомж и выполняет себя в объекте window 

// function showThis2(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return this.a + this.b;
//     }
//     console.log(sum());
// };
// showThis2(4, 5); // Мы получили 2 Window. Функция внутри функции все равно своим контектом считает Window !! Во всех подобных случаях контекст не меняется
// showThis2(5, 5); // Типа если у Бомжа есть Котик, то он будет привязан к бомжу без опр. места жительства, у них контекст исполнения будет window 
//Чтобы 2ая функция работала, нужно убрать замыкание ее. Она тут написала нам на сумму - NaN. Функция как только внутри себя не нашла данные, она будет их искать вне себя
//То есть, когда мы написали this.a + this.b мы сказали функции - ищи эти параметры здесь, но здесь их нет, они уровнем выше. Если убрать this, то все будет работать!
// НООО если все это выполнять в новом формате используя строгий режим 'use strict', везде будет написано undefinde
// в новом формате ES6 ввели, если функция видит себя только в window, то будет это писать, т.к они не могут найти свой контекст вызова
 
// 1) Это был просто вызов функции и мы получаем или Window или undefined

// Методы объектов - это тоже функции, тк объекты что то умеют делать

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function(){
//         console.log(this); // в данном случае контектс вызова - Object будет
//         function shout () {
//             console.log(this);
//         }
//         shout(); // А уже эта функция получила контекст вызова Window !! Она потеряла свой контекст, тк была вызвана не как метод объекта
//     }
// };
// obj.sum(); 

// 2) Метод объекта - this = объект. 
// 3) Если посмотреть выше на конструктор, каждый раз, когда мы создавали нового пользователя, мы создавали новый объект, this - ссылался на новый объект.
// или другими словами  - Конструктор (new) - this = новый созданный объект

// и последний способо - ручное присваивание this любой функции 

// let user = {
//     name: "john",
// };

// function sayName(surname) { // Если без переменной, то работает оба метода снизу одинакого
//     console.log(this);
//     console.log(this.name + surname);
// };
// // А след методами привязываем нужный контектс вызова
// sayName.call(user, 'Smith'); // но разница в методах - тут я могу передать только строку
// sayName.apply(user, ['Snow']); // а здесь уже массив
// // Если нужно передать несколько каких то аргументов - исп apply , тк можно передать массив с кучей данных

function count (number) {
    return this * number; //сейчас без привязки, наш this будет ссылаться на window.Поэтому мы должны this к чему то приязать
};

let double = count.bind(2); // Теперь, мы через новый мето bind привязали this к 2. То есть контекстом вызова стала 2ойка. 
// Если сказать совсем просто, то что мы передаем в аргумент функции, всегда заменит значение this

console.log(double(3));
console.log(double(10)); // В общем, мы контекст вызова жестко привязали к нашей функции

// 4) Указание конкретного контекста - call, apply, bind  сверху было

// 5) Если мы пытаемся вывзвать контекст вызова из под addEventListner, то конекстом вызова будет сам элемент
// Как можно использовать
let btn = document.querySelector('button');
btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red'; //здесь, т.к. у нас this ссылается на сам элемент button, то это позволяет нам использовать this для изменения стиля, как например используя Таргет
    function showThis228() {
        console.log(this);
    }
    showThis228(); //Здесь у нас опять буде window. Тк контекст вызова для функции внутри функции window !!
});

