var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var questionsRightWrong = [[], []];
var quiz = [
  ['What is the capital of Venezuela?', 'caracas'],
  ['Who is the president of the United States of America?', 'obama'],
  ['Is your favorite food sushi?', 'yes']
];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i += 1) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

for (var i = 0; i < quiz.length; i += 1) {
  question = quiz[i][0];
  answer = quiz[i][1];
  response = (prompt(question)).toLowerCase();
  if (response === answer) {
    correctAnswers += 1;
    questionsRightWrong[0].push(question);
  } else {
    questionsRightWrong[1].push(question);
  }
}

html = '<h1>You got ' + correctAnswers + ' out of ' + quiz.length + ' right.</h1>';
html += '<h2>You got these questions right.';
html += buildList(questionsRightWrong[0]);
html += '<h2>You got these questions wrong.';
html += buildList(questionsRightWrong[1]);

print(html);
