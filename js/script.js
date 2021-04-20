const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
// List of questions
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
    question: "Question 2: The year in which HTML was first proposed _______.",
    choice1: "1990",
    choice2: "1991",
    choice3: "1992",
    choice4: "1993",
    answer: 1,
  },
  {
    question: "Question 3: Fundamental HTML Block is known as ___________.",
    choice1: "HTML Body",
    choice2: "HTML tag",
    choice3: "HTML Attribute",
    choice4: "HTML Element",
    answer: 2,
  },
];
// CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;
// startPlay function
function startPlay() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  // console.log(availableQuestions);
  getNewQuestion();
}
