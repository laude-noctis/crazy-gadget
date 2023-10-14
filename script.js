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
    }
];
let quizQuestion = document.getElementById('question')
let quizAnswer = document.getElementsByClassName('btn')
var questionIndex = 0

showQuestion() {
    let currentQuestion = questions[questionIndex];
    questions.innerHTML = currentQuestion.question;
}

showQuestion()
