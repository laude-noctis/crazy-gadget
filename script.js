const questions = [
    {
        question: "Where in the HTML tags do you add the script tag?",
        answers: [
            { text: "header", correct: false },
            { text: "main", correct: false },
            { text: "body", correct: true },
            { text: "head", correct: false }
        ]
    },
    {
        question: "JavaScript is a ____-side programming language?",
        answers: [
            { text: "Client", correct: false },
            { text: "Server", correct: false },
            { text: "Neither", correct: false },
            { text: "Client and Server", correct: true }
        ]
    },
    {
        question: "How do you open a confirm window in JavaScript?",
        answers: [
            { text: "confirm()", correct: true },
            { text: "open.confirm()", correct: false },
            { text: "confirm.open()", correct: false },
            { text: "openconfirm()", correct: false }
        ]
    },
    {
        question: "Which of the following is used for assigning a value to a variable?",
        answers: [
            { text: "*", correct: false },
            { text: "+", correct: false },
            { text: "=", correct: true },
            { text: "-", correct: false }
        ]
    },
    {
        question: "Which symbol is use to target everything in a CSS stylesheet?",
        answers: [
            { text: "~", correct: false },
            { text: "*", correct: true },
            { text: "&", correct: false },
            { text: "_", correct: false }
        ]
    },
];
let quizQuestion = document.getElementById('question');
let quizAnswer = document.getElementById('answers');
let seconds = 60;
let score = 0;
let questionIndex = 0;
let response = document.querySelector(".response")
let viewbtn = document.querySelector(".view");
let nameRecord = [];
let names = document.getElementById("inputtext").value;
const timerElement = document.getElementById('timer');
const quizSection = document.getElementsByClassName("quiz");
const finalScoreSection = document.getElementsByClassName("final-score");
const highScoreSection = document.getElementsByClassName("high-score");
const startSection = document.getElementsByClassName("start");
const displayScore = document.getElementById("score")

// functions to hide each section of the page
function hideQuiz() {
    for (let i = 0; i < quizSection.length; ++i) {
        quizSection[i].style.display = "none";
    };
    // hides the quiz section
};
function hideFinalScore() {
    for (let i = 0; i < finalScoreSection.length; ++i) {
        finalScoreSection[i].style.display = "none";
    };
    // hides the final-score section
};
function hideHighScore() {
    for (let i = 0; i < highScoreSection.length; ++i) {
        highScoreSection[i].style.display = "none";
    };
};
function hideStart() {
    for (let i = 0; i < startSection.length; ++i) {
        startSection[i].style.display = "none";
    };
    // hides the start menu
}

// function that displays the next question with answers and keeps track if answered correctly
function nextQuestion() {
    const btns = document.getElementsByClassName('btn');
    for (let i = 0; i < btns.length; ++i) {
        btns[i].addEventListener('click', function () {
            const currentQuestion = questions[questionIndex];
            const selectedAnswer = currentQuestion.answers[i];
            if (selectedAnswer.correct) {
                ++score;
                response.innerHTML = ("Correct!");
            } else {
                response.innerHTML = ("Wrong!");
                seconds -= 7;
            }
            questionIndex++;
            if (questionIndex < questions.length) {
                showQuestions();
            } else {
                showFinalScore()
            }
        }
        )
    };
}

// removes the htmlpage added buttons
function removeBtns() {
    while (quizAnswer.firstChild) {
        quizAnswer.removeChild(quizAnswer.firstChild)
    }
}

// displays the question
function showQuestions() {
    let currentQuestion = questions[questionIndex];
    quizQuestion.innerHTML = currentQuestion.question;

    removeBtns();
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        quizAnswer.appendChild(button);
    });
    nextQuestion();
}

// function if time runs out
function gameOver() {
    hideQuiz();
    hideHighScore();
    hideStart();
    showFinalScore();
}

// function to gather score (the time that is left) 
function getScore() {
    var remainingTime = seconds;
    score = remainingTime;
    return remainingTime;
}

// function to display score (time left) on the final score section
function showScore() {
    let remainingTime = getScore();
    displayScore.innerHTML = ("Your Score: " + remainingTime)
}

// function to gather the user input name and score into localStorage
function gatherToStorage() {
    let name = document.getElementById("inputtext").value;
    let remainingTime = getScore();
  
    localStorage.setItem(name, remainingTime);
    console.log(name);
}

// function to start timer when you begin the game
function startTimer() {
    const countdownTimer = setInterval(() => {
        seconds--;
        timerElement.textContent = "Timer: " + seconds;

        if (seconds === 0) {
            clearInterval(countdownTimer);
            console.log("Countdown finished");
            gameOver();
        }

        if (questionIndex >= questions.length) {
            clearInterval(countdownTimer);
            getScore();
        }
    }, 1000);
};

// function that adds start button feature
function startButton() {
    const startBtn = document.getElementById("start-button");
    startBtn.addEventListener("click", function () {
        const quizSection = document.getElementsByClassName("quiz");
        for (let i = 0; i < quizSection.length; ++i) {
            quizSection[i].style.display = "block";
        };
        hideStart();
        startTimer();
        showQuestions();
        viewbtn.disabled = true;
    });
}

// displays the high score section
function showHighScore() {
    for (let i = 0; i < highScoreSection.length; ++i) {
        highScoreSection[i].style.display = "block";
    };
    hideFinalScore();
};

// tbd
function scoreList() {
    const scoreListElement = document.getElementById("listScore");

    for (let i = 0; i < scoreListElement.length; ++i) {
        const highScoreRecords = scoreListElement[i];
        const li = document.createElement("li");
        li.textContent = highScoreRecords;
        scoreListElement.appendChild(li);
    }
}

// displays the final score section
function showFinalScore() {
    for (let i = 0; i < finalScoreSection.length; ++i) {
        finalScoreSection[i].style.display = "block";
    };

    viewbtn.disabled = false;
    hideQuiz();

    let formId = document.getElementById("scoretracker");
    formId.addEventListener("submit", function (event) {
        event.preventDefault();
        scoreList();
        showHighScore();
        gatherToStorage();
    });
    showScore();
    
}

// displays the high score section
function viewHighScore() {
    viewbtn.addEventListener("click", function () {
        hideQuiz();
        hideFinalScore();
        hideStart();
        showHighScore();
    })
}

// displays the start section
function showStart() {
    for (let i = 0; i < startSection.length; ++i) {
        startSection[i].style.display = "flex";
    };
}

// nct
function returnBtn() {
    let returnbtn = document.querySelector(".return");
    returnbtn.addEventListener("click", function () {
        location.reload();
    })
}

hideQuiz()
hideFinalScore();
hideHighScore();

viewHighScore();
returnBtn();
startButton();