let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');
        
inputRub.addEventListener('input', function() {
    return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        request.open('GET', 'current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        request.addEventListener('readystatechange', function() {
            if (request.readyState < 5) {
                let data = JSON.parse(request.response);
                resolve(data)
            } else {
                let data = JSON.parse(request.response);
                reject()
            }
        })
    })
    .then((data) => {
        inputUsd.value = inputRub.value/data.usd;
    })
    .catch(() => {
        inputUsd.value = 'Ошибка';
    })
    
});

// function json() {
//     let request = new XMLHttpRequest();
//         request.open('GET', 'current.json');
//         request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//         request.send();

//         request.addEventListener('readystatechange', function() {
//             let data = JSON.parse(request.response);
//             if (request.readyState <= 5) {
//                 console.log(data);
//             }
//         })
// };
// json();
    

    





//     function inputPromise () {
    
//     return new Promise(function(resolve, reject) {

//     inputRub.addEventListener('input', () => {

//         console.log('stage 1');

//             let request = new XMLHttpRequest();

//             request.open('GET', 'current.json');
//             request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//             request.send();
       
//             request.addEventListener('readystatechange', function() {
//                 let data = JSON.parse(request.response);
//                 if (request.readyState === 4 && request.status == 200) {
//                     console.log(data.usd);
//                     console.log('stage 2');
//                     resolve()
//                     } else if (request.readyState < 4) {
//                         resolve()
//                     } else {
//                         console.log('stage 3')
//                         reject()
//                     }
//             })
//     })
//     })
// };

// inputPromise()
//     .then(() => {
//         console.log(data.usd+'Типа да');
//     })
//     .catch(() => {
//         console.log('НИХУЯ НЕ РАБОТАЕТ');
//     })

    



    // .then(() => {
    //     console.log(data.usd);
    // })
    // .catch(() => {
    //     inputUsd.value = 'Что-то пошло не так';
    // })

    // console.log('stage5');



//     let request = new XMLHttpRequest();

//     request.open('GET', 'current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();
    
//     request.addEventListener('readystatechange', function() {
//         if (request.readyState === 4 && request.status == 200) {
//             let data = JSON.parse(request.response);

//             inputUsd.value = inputRub.value / data.usd;
//         } else {
//             inputUsd.value = "Что-то пошло не так!";
//         }
//     });

// });