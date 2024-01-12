$(document).ready(function(){
    
    $('.main_btna').on('click', function() {
        $('.overlay').fadeToggle('slow').css('display','block')
        $('.modal').css('display','block');
    }); // Выбрать тур

    // $('window').on('click', function() {
    //     if($('.overlay').css('display' == 'block')) {
    //         console.log('1');
    //     }
    // });

    $(".main_btn").on('click', function() {
        console.log('Вы кликнули на получить консультацию');
    }); // Получить консультация

    $('a[href|="#sheldure"]').on('click', function() {    //обращение к href !! очень полезный лайфхак!
        console.log('Вы кликнули на расписание туров');
    }); // Расписание туров



}); //DOMCOntentLoaded 