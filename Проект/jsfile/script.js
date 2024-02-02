window.addEventListener('DOMContentLoaded', function(){

    'use strict';
    let tabs = require('./parts/tabs'),
        timer = require('./parts/timer'),
        modal = require('./parts/modal'),
        form = require('./parts/form'),
        slider = require('./parts/slider'),
        calc = require('./parts/calc');
    
    tabs(); // теперь просто активируем этот модуль на странице. 
    timer();
    modal();
    form();
    slider();
    calc();

}); //DOMContentLoaded