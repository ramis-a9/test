'use strict';

let path = require('path'); // Переменная, которая нужна для работы 
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  mode: 'development',  // тут мы можем указать в каком режиме будем работать. По умолчанию стоит метотд Продакшен, работает чуть медленно, но вкл в себя все методы оптимизации кода. Деволопмент - режим работает чуть быстрее, но не такой функциональный. Есть еще режим none - там он просто в модули собирает. В разных режимах разные плагины.
  entry: './src/js/script.js',  // это точка входа, откуда начнем нашу работу. Именно там находятся наши зависимости которые я вписыва, но если несколько файлов, их нужно записать в объект
  output: {  // задается в виде объекта !! куда выйдет конечный файл
    filename: 'bundle.js',
    path: __dirname + '/dist/js'  // а это вписываем, если мы хотим куда в определенное место закинуть!
  },
  watch: true, // параметр - вебпэк будем отслеживать состояние наших файлов и в автоматическом режиме собирать наш проект. Проверяет файлы - на изменения в режиме онлайн

  devtool: "source-map", // сурс мэп - хранит инфомрацию об исходниках и местоположении кода. Актулально, если мы хотим что то изменить и тд
// даже в браузере там будет видно источники в разделе sourse 
  module: {  // далее идут свойства модулей
    rules: [ // правила
      {
        test: /\.js$/, // тут проверяем, что у нас будут именно ЖС файлы
        exclude: /(node_modules|bower_components)/,
        use: { //далее мы прописываем правила использования 
          loader: 'babel-loader?optional[]=runtime', // работать будет при помощи Бэбеля . Нужно при помощи npm правильно всё настроить и прописать в терминали 
          options: { 
            presets: [ //вва 
              ["@babel/env", {  // самая популярная настройкаа 
                targets: {
                  edge: "17",
                  firefox: "60",
                  chrome: "67",
                  safari: "11.1",
                  ie: "11"
                },
                useBuiltIns: "usage"
              }]
            ]
          }
        }
      }
    ]
  },
  plugins: [ // а сюда мы будем помещать массив наших планиров которые мы будем исп в работе. ES6 может помочь сформировать новые модули при помощи нашего синтаксиса
    new UglifyJsPlugin()
  ]
};
