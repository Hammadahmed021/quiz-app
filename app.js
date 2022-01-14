const quizDb = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "javascript",
    b: "js",
    c: "script",
    d: "head",
    ans: "ans3",
  },
  {
    question: `What is the correct JavaScript syntax to change the content of the HTML element below?<br />
        <p id="demo">This is a demonstration.</p>`,
    a: "getByname",
    b: "getById",
    c: "getByClassName",
    d: "getByTag",
    ans: "ans2",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    a: "header",
    b: "footer",
    c: "head",
    d: "body",
    ans: "ans4",
  },
  {
    question: `What is the correct syntax for referring to an external script called "xxx.js"?`,
    a: "link",
    b: "href",
    c: "name",
    d: "src",
    ans: "ans4",
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    a: "true",
    b: "false",
    c: "undefined",
    d: "boolean",
    ans: "ans1",
  },
  {
    question: "The external css file must contain the <style> tag.",
    a: "true",
    b: "false",
    c: "undefined",
    d: "boolean",
    ans: "ans1",
  }
];

const question = document.querySelector(".question");
const Option1 = document.querySelector("#option1");
const Option2 = document.querySelector("#option2");
const Option3 = document.querySelector("#option3");
const Option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");
// const radioButtons = document.querySelectorAll('input[name="answer"]');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDb[questionCount];

  question.innerHTML = questionList.question;

  Option1.innerHTML = questionList.a;
  Option2.innerHTML = questionList.b;
  Option3.innerHTML = questionList.c;
  Option4.innerHTML = questionList.d;
};

loadQuestion();

const getAnswerCheck = () => {
  let answer;

  answers.forEach((curValue) => {
    if (curValue.checked) {
       answer = curValue.id;
    }    
    
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((curValue) => (curValue.checked = false));
};


submit.addEventListener("click", () => {
  const checkedAnswer = getAnswerCheck();

  if (checkedAnswer === quizDb[questionCount].ans) {
    score++;
  }

  questionCount++;
  deselectAll();
  

  if (questionCount < quizDb.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
            <h3>Your score is ${score}/${quizDb.length}</h3>
            <button class="btn" onclick="location.reload()">Play again</button>
        `;

    showScore.classList.remove("scoreArea");
  }
});


