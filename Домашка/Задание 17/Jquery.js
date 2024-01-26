$(document).ready(function(){
    
    // Обращаться к css для добавления dysplay

    $('.main_btna').on('click', function() {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideDown(700);
    }); // Выбрать тур

    $(".main_btn").on('click', function() {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideDown(700);
    }); // Получить консультация

    $('a[href|="#sheldure"]').on('click', function() {    //обращение к href !! очень полезный лайфхак!
        $('.overlay').fadeToggle('slow');
        $('.modal').slideDown(700);
    }); // Расписание туров


    $('span:eq(0)').on('click', function() {
        $('.overlay').fadeToggle('slow')
        $('.modal').slideUp(700);
    });



}); //DOMCOntentLoaded 