function modal () {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block'; //В данном случае мы получили все кнопки в js , далее сделали так, чтобы по кнопке more - overlay показал себя. Идет работа с css стилями
        this.classList.add('more-splash'); // мы исп. this, чтобы сделать ссылку именно на эту кнопку - без ивента. И потом добавили анимацию опть же из css стилей. Добавили новый класс
        document.body.style.overflow = 'hidden'; // Запретим прокручивать сайт, когда включено модальное окно
    });

    close.addEventListener('click', function() { //Здесь мы просто делаем обратные операции
        overlay.style.display = 'none'; 
        more.classList.remove('more-splash');
        document.body.style.overflow = ''; // опять включаем прокрутку страницы при закрытие окна
    });
};

modul.exports = modal;