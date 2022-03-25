const button = document.querySelector('button');
const ball = document.getElementById('ball');
const label = document.getElementById('label');

function random() {
    return Math.floor(Math.random() * 19);
}

function ask(){
    
    ball.style.width = "22rem";
    ball.style.height = "22rem";

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

    ball.src = images[random()];

    setTimeout(function() {
        ball.style.width = "20rem";
        ball.style.height = "20rem";
        ball.src = 'images\\magic8ball_start.png';
    },1200);
}

button.addEventListener("click",ask);

