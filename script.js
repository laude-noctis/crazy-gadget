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
        question: "Where in the HTML tags do you add <script>?",
        answers: [
            { text: "<header>", correct: false},
            { text: "<main>", correct: false},
            { text: "<body>", correct: true},
            { text: "<head>", correct: false}
        ]
    },
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
        question: "Where in the HTML tags do you add <script>?",
        answers: [
            { text: "<header>", correct: false},
            { text: "<main>", correct: false},
            { text: "<body>", correct: true},
            { text: "<head>", correct: false}
        ]
    },
    {
        question: "Where in the HTML tags do you add <script>?",
        answers: [
            { text: "<header>", correct: false},
            { text: "<main>", correct: false},
            { text: "<body>", correct: true},
            { text: "<head>", correct: false}
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