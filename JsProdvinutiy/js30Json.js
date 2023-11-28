'use strict';

// Современный стандарт передачи данных Json и Асинхронные действия на страницы. Те, что выполняются без перезагрузки страницы

// Json - javascript object Notation и является текстовым форматом обмена данных
// Исп почти везде сейчас. json - это набор пар ключ-значение и главным правилом будет то, что все строки обязательно должны быть в двойных кавычках
// В качестве значенией может быть много что, объекты, цифры, буквы, лог значения, даже Null

// let options = {
//     width: 1366,
//     hight: 768,
//     background: 'red',
//     font: {  //будет еще настройка шрифта, отрыли объект в объекте 
//         size: '16px',
//         color: '#fff'
//     }
// };
// // Этот объект мы хоти отправить на сервер, нам нужно его преобразовать в json формат. Тк, никакие данные в обычном формате серве просто не воспримет.

// console.log(JSON.stringify(options)); // чтобы преобразовать бере встроенны объект json и его метод stringify
// // Теперь там одна строка, ключ-значение и ДВойные кавычки!


// // А теперь обратная операция - parse 
// console.log(JSON.parse(JSON.stringify(options))); // это обратная операция - только parse. чтобы пример был

// !!!!!!!!!!!!!!!!!!!!!!!!!!!

// Клиентская часть - то что видит пользователь!
// Серверная часть - то что пользователь никогда не увидит (там лежат данные, они там обрабатываются и тд)

// Браузер всегда получает или отправляет данные с сервера с перезагрузкой страницы 
// Сейчас например в инернет магазинах страницы уже полностью не перезагружаются как раньше при введении фильтра. 
// Все это реализованно с помощью технологии Ajax - Айжакс.
// плюсы - экономия трафика, времени и просто красиво, тк не нужно полностью обновлять всю страницу
// минусы - должен быть включен у пользователя javascript , и с плохим инетом - могут быть баги
// Ajax - Asynchronous Javascript and XML.
// Для того, чтобы иметь возможность из ЖС делать http запросы к серверу без перезагрузки  страницы, нам понадобится встроенный объект XML http request

// Сейчас будет пример и мы будем имитировать Сервер создав JSON файл

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => { // навесили обработчик инпут - чтобы была реакция на введение в строчку
    let request = new XMLHttpRequest(); // XMLhttpRequset - главынй объект для работы с реали запросами и у него есть свои методы свойства и события. requst - перевод - запрос. А далее используют конструктор. Далее используют большой объект XML..
    // методы
    // request.open(method, url, async, login, pass); может принимать 5 аргументов. - метод - метод общения клиента с сервером (get и пост - получение и отправка). 2) путь 3) Асихронность - по умолчанию - Тру стоит, но если фолсе поставим, то просто будем ждать ответ. 4) Логин 5) Пароль  для доступа к файлу!!
    request.open('GET', 'current.json'); //Он производит настройку нашего запроса. здесь мы сделали запрос на сервер, чтобы получить доступ к файлу json
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // Метода настройки http запросов. А внутри указали какой контент у нас там. Укзаали что там Джисон и кодировке utf=8. ЗАметь без запятой 
    request.send(); // Send - Он открывает соединение и отправляет запрос на сервер. http запросы состоят из заголовков и тела. Это бади - тело запроса, но тело бывает только тогда, когда мы берем инфу с клиентской части и отправляет ее на сервер. Например форма обратной связи на сайте. Здесь у нас идет Get запрос, получается body нам не нужно (я его убираю тут из скобок). Если проще -мы просто запустили наш запрос и он ушел за ответом к серверу.
    // тут получается, что мы запускаем наш запрос и он идет за ответом к серверу.
    // В общем тут по всей системе - мы решили пойти в магазин и создали новый объект. Решили пойти в магазин и думаем, что мы там будем делать, что возьмем с собой и тд. (это мы сделали в начале , определили только то, что нам нужно - метод ОПЕНЫ.) Потом идет блок с настройкой, где мы говорим, что мы хотим купить в магазине - метод  реквестХедер. И далее направляемся в магазин   

    //  А теперь свойства 
    // Сервер может нам отвечать по разному, присылать коды ответа, ответы и вообще просто свое состояние.
    // status - даст код состояния сервера 404 , 204 и тд
    // statusText - ответ текстовый Ок или NotFound
    // responseText  или response - текст ответа сервера, то что бэкЭнд разраб хочет мне послать со своего рабочего окружения. -  
    // readyState - содержит текущее состояние запроса. КОгда запрос ушел на сервак, он содержит несколько этапов - 0) Нулевой - когда объект создается, а метод Опен еще не вызывался. 1) Когда метод опен вызвался и запрос начинает работать 2) Когда метод уже был вызван и доступны те заголовки, которые мы настраивали 3) КОгда идет загрузка - запрос идет к серверву и загружается 4) Done - всег готово

    request.addEventListener('readystatechange', function() {  // Это событе более гибче, чем просто событие - load, поэтому исп его ! Это событие, которое проверят статус readyState. Теперь при каждом изменение состояния, мы можем отследить, что нам отвечает сервер, и как он там себя чувсвует
        if (request.readyState === 4 && request.status == 200) { // Тут мы поймем, что все прошло отлично у нас. 200 -статус сервера, то все прошло хорошо
            let data = JSON.parse(request.response); // response - ответ от нашего сервера, то есть все данные, которые мы получаем
            
            inputUsd.value = inputRub / data.usd; // У нас есть переменная дата, которую мы получили от сервера, а .usd - тут мы получили число, что там лежало в объекте.  Теперь , когда пользователь записывает рубли, отправляется запрос на сервер и делится на цифру на сервере. 
            // но если запрос потерялся, мы получим ошибку, в таких случаях нужно оповещать пользователя об ошибке
        } else {
            inputUsd.value = "Что то пошло не так";
        }
    });  
});  // мы сейчас настраиваем наш запрос на получение json данных 
//  Здесь мы только разобрали методы XmlHttpRequest 

