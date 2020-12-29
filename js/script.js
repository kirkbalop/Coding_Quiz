var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

const myQuestions = [
    {
        question: "Who invented Javascript?",
        answers: {
            a: "Douglas Crockford",
            b: "Brandon Eich",
            c: "Billy Eichner",
            d: "J. Ava Script"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following is a Javascript package manager?",
        answers: {
            a: "Node.js",
            b: "Typescript",
            c: "npm",
            d: "Moment.js"
        },
        correctAnswer: "c"
    },
    {
        question: "What does HTML stand for?",
        answers: {
            a: "Heiroglyphics, to machines legible",
            b: "Hypertext Markup Language",
            c: "Helpful Text Made Linear",
            d: "None of the Above"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the term for looking over code to locate errors?",
        answers: {
            a: "delousing",
            b: "protracting",
            c: "debugging",
            d: "factoring"
        },
        correctAnswer: "c"
    },
]

function buildQuiz(){
    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestions.answers){
                answers.push(
                    <label>
                        <input type="radio" name="question${questionNumber}" value="${letter}"></input>
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>
                );
            }
            output.push(
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>
            );
        }
    );
    quizContainer.innerHTML = output.join('');
}

function showResults(){}

buildQuiz();

submitButton.addEventListener('click', showResults);