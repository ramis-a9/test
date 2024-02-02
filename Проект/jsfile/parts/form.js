function form () {
    // Сейчас мы будем оповещать текстовым спомобом клиента о состоянии сервера

    let message = {
        loading: 'Загрузка....',
        sucsess: 'Спасибо что оставили заявку.... МУДИЛА!',
        failure: 'ЧТо то пошло не так' // мы всегда должны сказать пользователю, что что то не так, если страница зависает
    };
    
    let form = document.querySelector('.main-form'), //нашли главную форму
        input = form.getElementsByTagName('input'), // вывели себе инпуты
        statusMessage = document.createElement('div'); // создали новый объект, чтобы добавить его на страницу, чтобы было сообщение пользователю о статусе нашей страницы

        statusMessage.classList.add('status'); // этот класс уже добавлен в css , чтобы дать стилистики сообщению, которое будет выводиться
    
    // теперь у нас задача - чтобы после нажатия кнопки оставить заявку в форме обратной связи, клиент получал нужное сообщение
    // в любой форме для отправки должна быть или Button или Input для отправки инфомрации

    function sendForm(elem) {
        elem.addEventListener('submit', function(e) {
            e.preventDefault();
                elem.appendChild(statusMessage);
                let formData = new FormData(elem);

                function postData(data) {
                    return new Promise(function(resolve, reject) {
                        
                        let request = new XMLHttpRequest();
                        
                        request.open('POST', 'server.php');  // Метод пост, тк данные, которые вводит пользователь мы хотим отправить на сервер, чтобы они куда то записались, 2ой аргумент - адрес. Запрос закончен
                       
                        request.setRequstHeader ('Content-Type', 'application/x-www-form-urlecoded');
                        
                        request.onreadystatechange = function() {
                            if (request.readyState < 4) {  // Это ты помнишь, статусы ответа
                                resolve() // Это мы задавали выше и вносили на страницу как ДИВ. innerHTML - вроде запись
                            } else if (request.readyState === 4) {
                                if (request.status == 200 && request.status < 3) {
                                    resolve()
                                }
                                else {
                                    reject()
                                }
                            }
                        }   
                        requst.send(data);
                    })
                }; //End Post Data
                
                function clearInput() {
                    for (let i = 0; i < input.length; i++) {
                        input[i].value = ''; // тут мы очистили после нашего submit все наши inputa в этом окне.
                    };
                }

                postData(formData)
                    .then(() => statusMessage.innerHTML = message.loading)
                    .then(() => {
                        thanksModal.style.display = 'block';
                        mainModal.style.display = 'none';
                        statusMessage.innerHTML = '';
                    })
                    .catch(() => statusMessage.innerHTML = message.failure)
                    .then(clearInput)
        })
    };

    sendForm(form);
    // sendForm(formBottom); // эта функция непонятно откуда 
};
modul.exports = form;
