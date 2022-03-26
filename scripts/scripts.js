const button = document.querySelector('button');
const ball = document.getElementById('ball');
const label = document.getElementById('label');

function random() {
    return Math.floor(Math.random() * 19);
}

function grow() {
    if (window.matchMedia("(max-width: 450px)").matches) {
        ball.style.width = "20rem";
        ball.style.height = "20rem";
    } else {
        ball.style.width = "30rem";
        ball.style.height = "30rem";
  }
}

function shrink() {
    if (window.matchMedia("(max-width: 450px)").matches) {
        ball.style.width = "15rem";
        ball.style.height = "15rem";
    } else {
        ball.style.width = "25rem";
        ball.style.height = "25rem";
  }
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
    },7000);
    setTimeout(function () {
        ball.src = 'images\\magic8ball_start.png';
    }, 10000);
}

button.addEventListener("click",ask);

