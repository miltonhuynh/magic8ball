const button = document.querySelector('button');
const ball = document.getElementById('ball');
const title = document.getElementById('title');
const question_box = document.getElementById('ask');
const label = document.getElementById('label');
const form = document.forms.form;

function random() {
    return Math.floor(Math.random() * 19);
}

function grow() {
    if (window.matchMedia("(max-width: 450px)").matches) {
        ball.style.width = "18rem";
        ball.style.height = "18rem";
    } else {
        ball.style.width = "27rem";
        ball.style.height = "27rem";
        title.style.fontSize = "3rem";
        label.style.fontSize = "2rem";
        document.getElementById('question_box').style.fontSize = "2rem";
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
    button.remove();
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

    // Changes image of ball to blank while animation is running
    ball.src = "images\\magic8ball_extra.png";

    // Animation for movement of ball, moves less on a smaller screen
    if (window.matchMedia("(max-width: 450px)").matches) {
        ball.style.transform = "translate(75px)";
        setTimeout(function() {
            ball.style.transform = "translate(-75px)";
        }, 500);
        setTimeout(function() {
            ball.style.transform = "translate(75px)";
        }, 1000);
        setTimeout(function() {
            ball.style.transform = "translate(-75px)";
        }, 1500);
        setTimeout(function() {
            ball.style.transform = "translate(75px)";
        }, 2000);
        setTimeout(function() {
            ball.style.transform = "translate(0px)";
        }, 2500);
    } else {
        ball.style.transform = "translate(250px)";
        setTimeout(function() {
            ball.style.transform = "translate(-250px)";
        }, 500);
        setTimeout(function() {
            ball.style.transform = "translate(250px)";
        }, 1000);
        setTimeout(function() {
            ball.style.transform = "translate(-250px)";
        }, 1500);
        setTimeout(function() {
            ball.style.transform = "translate(250px)";
        }, 2000);
        setTimeout(function() {
            ball.style.transform = "translate(0px)";
        }, 2500);
    }

    // This array holds all the possible answers "images", will be randomly selected.
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
        question_box.after(button);
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