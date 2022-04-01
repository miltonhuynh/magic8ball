const button = document.querySelector('button');
const ball = document.getElementById('ball');
const title = document.getElementById('title');
const question_box = document.getElementById('ask');
const label = document.getElementById('label');
const form = document.forms.form;

// Returns random number between 0 to 19, used to randomly access 1 image in array of images.
function random() {
    return Math.floor(Math.random() * 19);
}

// ANIMATION: Ball increases in size during animation for this step
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

// ANIMATION: Ball decreases in size during animation for this step
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
    // Removes 'Ask' button until animation is complete so user can't interrupt
    button.remove();
    // Blurs background image during animation
    document.body.style.backgroundImage = "url(images/ball_background_blur.jpg)"; 

    // Removes question box in form
    question_box.remove();

    // Displays question user asked using parameter 'text' passed into this function
    const display = document.createElement('div');
    display.innerHTML = "You asked: " + text;
    display.setAttribute("id", "question_box");
    display.style.color = "white";
    display.style.fontFamily = "Didact Gothic";
    display.style.transition = "1s";
    
    // Sets size of question user asked depending on size of user's window
    if (window.matchMedia("(max-width: 450px)").matches) {
        display.style.fontSize = "2.5rem";
    } else {
        display.style.fontSize = "3.3rem";
    }

    // Inserts question that user asked into document
    document.getElementById('label').after(display);

    // Changes image of ball to blank while animation is running
    ball.src = "images\\magic8ball_extra.png";

    // ANIMATION: Movement of ball left and right, moves less on a smaller screen
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
        // Sets image of ball to a random image, calls random number generation function
        ball.src = images[random()];
    }, 3000);
    setTimeout(function() {
        // Calls function that increases size of ball to display to user
        grow();
    }, 3500);
    setTimeout(function() {
        // Reduces the size of the ball after animation is complete
        shrink();
        // Returns image of ball to default, starting image
        document.body.style.backgroundImage = "url(images/ball_background.jpg)"; 
    },5500);
    setTimeout(function() { 
        // Removes question user asked
        display.remove();
        // Places back the input question box on the forms
        document.getElementById('label').after(question_box);
        question_box.after(button);
    },7500);
}

// When user clicks 'Ask' button, will grab input data and pass to function ask()
form.onsubmit = function(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const text = data.get('text');
    
    // Checks if input is blank, if blank will alert, if not will call ask function
    if (text == "") {
        alert("You didn't ask a question");
    } else {
        ask(text);
    }
  }