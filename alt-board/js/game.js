// One hundred dollar questions
const oneQuestions = [
  {
    value: 100,
    question: "This is category 1's $100 question.",
    answers: {
      a: "This is choice a!",
      b: "This is choice b!",
      c: "This is choice c!",
      d: "This is choice d!"
    },
    correctAnswer: "c"
  },
  {
    value: 100,
    question: "This is category 2's $100 question.",
    answers: {
      a: "This is choice a!",
      b: "This is choice b!",
      c: "This is choice c!",
      d: "This is choice d!"
    },
    correctAnswer: "a"
  },
  {
    value: 100,
    question: "This is category 3's $100 question.",
    answers: {
      a: "This is choice a!",
      b: "This is choice b!",
      c: "This is choice c!",
      d: "This is choice d!"
    },
    correctAnswer: "d"
  },
  {
    value: 100,
    question: "This is category 4's $100 question.",
    answers: {
      a: "This is choice a!",
      b: "This is choice b!",
      c: "This is choice c!",
      d: "This is choice d!"
    },
    correctAnswer: "c"
  },
  {
    value: 100,
    question: "This is category 5's $100 question.",
    answers: {
      a: "This is choice a!",
      b: "This is choice b!",
      c: "This is choice c!",
      d: "This is choice d!"
    },
    correctAnswer: "d"
  }
];

const buildGame = () => {
  const onehundred = document.getElementById("oneHundred");
  // store the html
  const output = [];

  // for each question
  oneQuestions.forEach((currentQuestion, questionNumber) => {
    // store a list of answer choices
    const answers = [];

    // for each available answer
    for (letter in currentQuestion.answers) {
      // add html for answers
      answers.push(
        `
            <input type="hidden" name="question${questionNumber}" value="${letter}">
              <div class="btn-group">
                <div class="btn">${letter}: ${currentQuestion.answers[letter]}</div>
              </div>
            </input>
        `
      );
    }

    // Add question and its answers to the output
    output.push(
      `
        <div class="tile" data-toggle="modal" data-target="#questionModal">
            <div class="value">$${currentQuestion.value}</div>
        </div>

        <div class="modal fade" id="questionModal">
          <div class="modal-dialog">
            <div class="modal-content">
              
              <div class="modal-header">
                <div class="questions">${currentQuestion.question}</div>
              </div>
              <div class="modal-body text-center">${answers.join("")}</div>
            </div>
          </div>
        </div>
      `
    );
  });

  // combine output list into one string of html and add it to the page
  onehundred.innerHTML = output.join("");
};

buildGame();
