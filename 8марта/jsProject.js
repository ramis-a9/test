addEventListener('DOMContentLoaded', function() {
    let btnYes = document.querySelector('.yes'),
        btnNo = document.querySelector('.no'),
        h1Text = document.querySelector('.h1_1'),
        h1Text2 = document.querySelector('.h1_2'),
        gif1 = document.querySelector('.gif1_1'),
        text = document.querySelector('.text'),
        gif2 = document.querySelector('.gif2_2');

    let random = (min, max) => {
        let rand = min + Math.random() * (max - min + 1);
        return Math.floor(rand);
    }

    btnNo.addEventListener('mouseover', function () {
        btnNo.style.left = `${random(30, 80)}%`;
        btnNo.style.top = `${random(30, 90)}%`;
    })


    btnYes.addEventListener('click', function() {
        h1Text.style.display = 'none';
        btnNo.style.display = 'none';
        btnYes.style.display = 'none';
        h1Text2.style.display = 'block';
        h1Text2.style.display = 'flex';
        gif1.style.display = 'none';
        gif2.style.display = 'block';
        text.textContent = 'Самая-самая лучшая!!';
    })

}) // DOMContent