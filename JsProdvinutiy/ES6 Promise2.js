let drink = 1;

function shoot (arrow) {  // 3 аргумента, первое типа чем стреляли, второе - поподание, 3 - промах. Но под promise аргументы последние 2 уже не нужны, они ниже в конструкторе
    console.log('Вы сделали выстрел...');

    let promise = new Promise(function(resolve, reject) {   
        // resolve - когда обещание выполнилось. reject - когда обещание не выполнилось
        setTimeout(function() { // Установим таймаут, типа стрела летит 3 сек. 
            //  Сейчас случайным образом получим велечину и уже будем отталкиваться, попали или нет
                Math.random() > .5 ? resolve({}) : reject('Вы промахнулись'); // Тут я пишу, если наш рандом выдаст более 50 процентов то мы возовим функцию попадания. Внутрь передадим пустой объект - нам сейчас это неважно. В противном случае вызовем функцию fail (но уже поменял под promise аргументы!)
        }, 3000) 
    }) // вот так создается новое общеание
    
    return promise; // Тут у нас выполняется функция Шут. Консолько, далее новое обещание, которое содержит в себе 2 аргумента- состояния.  А после мы возвращаем наш промис.
}; 

function win() {
    console.log("Вы победили");
    (drink == 1) ? byBeer() : giveMoney();   // тут мы сейчас воспользовались тернарным оператором. Если равна 1, то вызываем одну функцию, если нет, то вторую
};

function byBeer() {
    console.log('Вам купили пиво');
};

function giveMoney() {
    console.log("Вам дали деньги");
}

function loose () {
    console.log("Вы проиграли");
};

shoot({})
        .then(mark => console.log('Вы попали в цель'))
        .then(win) // в случае resolve нам выходит это. Then можно пистаь в одну строчку!
        .catch(loose) // ЭТО ВСЕ МЕТОДЫ, здесь не надо ставтиь точку с запятой. Это уже для reject

// Если прописать then после catch, то он выполнится все равно, неважно что мы получаем от promise


