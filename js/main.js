let question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
let questionCounterText = document.getElementById("question-counter-text");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [
  {
    question: "Question 1: HTML is what type of language ?",
    choice1: "Scripting Language",
    choice2: "Markup Language",
    choice3: "Programming Language",
    choice4: "Network Protocol",
    answer: 2,
  },
  {
    question:
      "Question 2: Which of the following is true about variable naming conventions in JavaScript?",
    choice1:
      "JavaScript variable names must begin with a letter or the underscore character",
    choice2: " JavaScript variable names are case sensitive",
    choice3: "Both A and B",
    choice4: "None of the Above",
    answer: 3,
  },
  {
    question:
      "Question 3: How can you get the type of arguments passed to a function?",
    choice1: "using typeof operator",
    choice2: "using getType function",
    choice3: "Both of the above",
    choice4: "None of the Above",
    answer: 1,
  },
  {
    question: "Question 4: The year in which HTML was first proposed _______.",
    choice1: "1990",
    choice2: "1991",
    choice3: "1992",
    choice4: "1993",
    answer: 1,
  },
  {
    question: "Question 5: Fundamental HTML Block is known as ___________.",
    choice1: "HTML Body",
    choice2: "HTML tag",
    choice3: "HTML Attribute",
    choice4: "HTML Element",
    answer: 2,
  },
];
// CONSTANTS
const CORRECT_BONUS = 20;
const MAX_QUESTIONS = questions.length;
// startPlay function
function startPlay() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  // console.log(availableQuestions);
  getNewQuestion();
}
// getNewQuestions function - Move to another question
function getNewQuestion() {
  if (availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS) {
    // Go to the end of the page
    return window.location.assign("./end.html");
  }
  questionCounter++;
  // Update question counter text
  questionCounterText.innerText = `${questionCounter} / ${MAX_QUESTIONS}`;
  let questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  // for each choices
  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
  // slice out available question array
  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
}
// add event listener to forEach choice
choices.forEach((choice) => {
  choice.addEventListener("click", function (evt) {
    if (!acceptingAnswers) {
      return;
    }
    acceptingAnswers = false;
    const selectedChoice = evt.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    //   Apply class to correct or wrong answer
    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    //   calling increamentScore function
    if (classToApply === "correct") {
      increamentScore(CORRECT_BONUS);
    }
    selectedChoice.parentElement.classList.add(classToApply);
    //   setTimeOut function to remove classToApply class
    setTimeout(function () {
      selectedChoice.parentElement.classList.remove(classToApply);
      // Move to new question
      getNewQuestion();
    }, 1000);
    // getNewQuestion();
  });
});
// Increament score function
function increamentScore(number) {
  score += number;
  scoreText.innerText = score;
}

// calling startPlay function
startPlay();

// variable declaration for save score
let userName = document.getElementById("user-name");
let saveScore = document.getElementById("save-score");
// user name key up
// userName.addEventListener("keyup", function () {
//   saveScore.disabled = !userName.value;
// });
// saveHighScore function
function saveHighScore(evt) {
  console.log("click");
  e.preventDefault();
}
