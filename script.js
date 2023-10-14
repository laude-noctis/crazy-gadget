const questions = [
    {
        question: "Where in the HTML tags do you add <script>?",
        answers: [
            { text: "<header>", correct: false},
            { text: "<main>", correct: false},
            { text: "<body>", correct: true},
            { text: "<head>", correct: false}
        ]
    },
    {
        question: "JavaScript is a ____-side programming language?",
        answers: [
            { text: "Client", correct: false},
            { text: "Server", correct: false},
            { text: "Neither", correct: false},
            { text: "Client and Server", correct: true}
        ]
    },
    {
        question: "How do you open a confirm window in JavaScript?",
        answers: [
            { text: "confirm()", correct: true},
            { text: "open.confirm()", correct: false},
            { text: "confirm.open()", correct: false},
            { text: "openconfirm()", correct: false}
        ]
    },
    {
        question: "Which of the following is used for assigning a value to a variable?",
        answers: [
            { text: "*", correct: false},
            { text: "+", correct: false},
            { text: "=", correct: true},
            { text: "-", correct: false}
        ]
    },
    {
        question: "Which symbol is use to target everything in a CSS stylesheet?",
        answers: [
            { text: "~", correct: false},
            { text: "*", correct: true},
            { text: "&", correct: false},
            { text: "_", correct: false}
        ]
    },
];
let quizQuestion = document.getElementById('question');
let quizAnswer = document.getElementsByClassName('btn');
const quizSection = document.getElementsByClassName("quiz");
const finalScoreSection = document.getElementsByClassName("final-score");
const highScoreSection = document.getElementsByClassName("high-score");
const startSection = document.getElementsByClassName("start");
let seconds = 90;
const timerElement = document.getElementById('timer');

function hideQuiz () {
    for (let i = 0; i < quizSection.length; ++i) {
        quizSection[i].style.display = "none";
    };
    // hides the quiz section
};
function hideFinalScore () {
    for (let i = 0; i < finalScoreSection.length; ++i) {
        finalScoreSection[i].style.display = "none";
    };
    // hides the final-score section
};
function hideHighScore () {
    for (let i = 0; i < highScoreSection.length; ++i) {
        highScoreSection[i].style.display = "none";
    };
    // hides the high-score section 
};
function hideStart () {
    for (let i = 0; i < startSection.length; ++i) {
        startSection[i].style.display = "none";
    };
    // hides the start menu
}

function startTimer() {
  const countdownTimer = setInterval(() => {
    seconds--;
    timerElement.textContent = "Timer: " + seconds;
    if (countdownTimer === 0) {
        clearInterval(countdownTimer);
        console.log("Countdown finished");
    };
  }, 1000);
};

const startBtn = document.getElementById("start-button");
startBtn.addEventListener("click", function() {
    const quizSection = document.getElementsByClassName("quiz");
    for (let i = 0; i < quizSection.length; ++i) {
        quizSection[i].style.display = "block";
    };
    hideStart();
    startTimer();
});

hideQuiz();
hideFinalScore();
hideHighScore();