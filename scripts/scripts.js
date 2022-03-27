const button = document.querySelector('button');
const ball = document.getElementById('ball');
const title = document.getElementById('title');
const question_box = document.getElementById('ask');
const label = document.getElementById('label');
const form = document.forms.form;
const running = false;

function random() {
    return Math.floor(Math.random() * 19);
}

function grow() {
    if (window.matchMedia("(max-width: 450px)").matches) {
        ball.style.width = "18rem";
        ball.style.height = "18rem";
    } else {
        ball.style.width = "23rem";
        ball.style.height = "23rem";
        title.style.fontSize = "4rem";
        label.style.fontSize = "2.5rem";
        document.getElementById('question_box').style.fontSize = "2.7rem";
  }
}

function shrink() {
    if (window.matchMedia("(max-width: 450px)").matches) {
        ball.style.width = "15rem";
        ball.style.height = "15rem";
    } else {
        ball.style.width = "20rem";
        ball.style.height = "20rem";
        title.style.fontSize = "4.5rem";
        label.style.fontSize = "3rem";
        document.getElementById('question_box').style.fontSize = "3.5rem";
  }
}

function ask(text) {
    document.body.style.backgroundImage = "url(images/ball_background_blur.jpg)"; 
    question_box.remove();
    const display = document.createElement('div');
    display.innerHTML = "You asked: " + text;
    display.setAttribute("id", "question_box");
    display.style.color = "white";
    display.style.fontFamily = "Didact Gothic";
    display.style.transition = "1s";

    if (window.matchMedia("(max-width: 450px)").matches) {
        display.style.fontSize = "2.5rem";
    } else {
        display.style.fontSize = "3.3rem";
    }

    document.getElementById('label').after(display);

    ball.style.transform = "translate(100px)";
    ball.src = "images\\magic8ball_extra.png";
    setTimeout(function() {
        ball.style.transform = "translate(-100px)";
    }, 500);
    setTimeout(function() {
        ball.style.transform = "translate(100px)";
    }, 1000);
    setTimeout(function() {
        ball.style.transform = "translate(-100px)";
    }, 1500);
    setTimeout(function() {
        ball.style.transform = "translate(100px)";
    }, 2000);
    setTimeout(function() {
        ball.style.transform = "translate(0px)";
    }, 2500);


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
    }, 3000);
    setTimeout(function() {
        grow();
    }, 3500);
    setTimeout(function() {
        shrink();
        document.body.style.backgroundImage = "url(images/ball_background.jpg)"; 
    },5500);
    setTimeout(function() { 
        display.remove();
        document.getElementById('label').after(question_box);
    },7500);
}

form.onsubmit = function(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const text = data.get('text');
    
    if (text == "") {
        alert("You didn't ask a question");
    } else {
        ask(text);
    }
  }