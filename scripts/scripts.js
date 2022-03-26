const button = document.querySelector('button');
const ball = document.getElementById('ball');
const label = document.getElementById('label');

function random() {
    return Math.floor(Math.random() * 19);
}

function grow() {
    ball.style.width = "22rem";
    ball.style.height = "22rem";
}

function shrink() {
    ball.style.width = "18rem";
    ball.style.height = "18rem";
}

function ask() {     
    ball.style.transform = "translate(100px)";
    setTimeout(function() {
        ball.style.transform = "translate(-100px)";
    }, 500);
    setTimeout(function() {
        ball.style.transform = "translate(100px)";
    }, 1000);
    setTimeout(function() {
        ball.style.transform = "translate(0px)";
    }, 1500);


    var images = [
        'images\\magic8ball_1.png',
        'images\\magic8ball_2.png',
        'images\\magic8ball_3.png',
        'images\\magic8ball_4.png',
        'images\\magic8ball_5.png',
        'images\\magic8ball_6.png',
        'images\\magic8ball_7.png',
        'images\\magic8ball_8.png',
        'images\\magic8ball_9.png',
        'images\\magic8ball_10.png',
        'images\\magic8ball_11.png',
        'images\\magic8ball_12.png',
        'images\\magic8ball_13.png',
        'images\\magic8ball_14.png',
        'images\\magic8ball_15.png',
        'images\\magic8ball_16.png',
        'images\\magic8ball_17.png',
        'images\\magic8ball_18.png',
        'images\\magic8ball_19.png',
        'images\\magic8ball_20.png',
    ]

    setTimeout(function() {
        ball.src = images[random()];
    }, 2500);
    setTimeout(function() {
        grow();
    }, 3000);
    setTimeout(function() {
        shrink();
    },5000);
    setTimeout(function () {
        ball.src = 'images\\magic8ball_start.png';
    }, 6500);
}

button.addEventListener("click",ask);

