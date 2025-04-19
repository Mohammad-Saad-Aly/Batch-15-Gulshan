var questions = [
  {
    question: "What does HTML stand for?",
    option1: "Hyperlinks and Text Markup Language",
    option2: "Hypertext Markup Language",
    option3: "Home Tool Markup Language",
    correctOption: "Hypertext Markup Language",
  },
  {
    question: "Who is making the Web standards?",
    option1: "Google",
    option2: "The World Wide Web Consortium",
    option3: "Microsoft",
    correctOption: "The World Wide Web Consortium",
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    option1: "<heading>",
    option2: "<h6>",
    option3: "<h1>",
    correctOption: "<h1>",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    option1: "<linebreak>",
    option2: "<br>",
    option3: "<break>",
    correctOption: "<br>",
  },
  {
    question: "What is the correct HTML for adding a background color?",
    option1: '<body bg="yellow">',
    option2: "<background>yellow</background>",
    option3: '<body style="background-color:yellow;">',
    correctOption: '<body style="background-color:yellow;">',
  },
  {
    question: "Choose the correct HTML element to define important text:",
    option1: "<strong>",
    option2: "<b>",
    option3: "<i>",
    correctOption: "<strong>",
  },
  {
    question: "Choose the correct HTML element to define emphasized text:",
    option1: "<italic>",
    option2: "<i>",
    option3: "<em>",
    correctOption: "<em>",
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    option1: "<a>http://www.w3schools.com</a>",
    option2: '<a href="http://www.w3schools.com">W3Schools</a>',
    option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
    correctOption: '<a href="http://www.w3schools.com">W3Schools</a>',
  },
];

var getQues = document.getElementById("ques");
var getOption1 = document.getElementById("opt1");
var getOption2 = document.getElementById("opt2");
var getOption3 = document.getElementById("opt3");
var index = 0;
var getBtn = document.getElementById("btn");
var score = 0

function next() {
  var getInputs = document.getElementsByTagName("input");
  for (var i = 0; i < getInputs.length; i++) {
    getInputs[i].checked = false;
  }
  if (index > questions.length - 1) {
    Swal.fire({
      title: "Questions end",
      text: "Ghr jaao",
      icon: "success",
    });
  } else {
    getQues.innerText = questions[index].question;
    getOption1.innerText = questions[index].option1;
    getOption2.innerText = questions[index].option2;
    getOption3.innerText = questions[index].option3;
    index++;
    getBtn.disabled = true
  }
}

next();

function enableNext() {
  getBtn.disabled = false;
}
