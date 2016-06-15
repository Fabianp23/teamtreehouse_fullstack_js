var message = '';
var student;
var response;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport(student) {
  var report = '<h2>Student Name: ' + students[i].name + '</h2>';
  report += '<h3>Track: ' + students[i].track + '</h3>';
  report += '<h3>Achievemetns: ' + students[i].achievements + '</h3>';
  report += '<h3>Points: ' + students[i].points + '</h3>';
  return report;
}

while (true) {
  response = prompt("Search for a student by name 'Fabian' or to exit write 'quit'");
  if (response === null || response.toLowerCase() === 'quit') {
    break;
  }
  for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    if (student.name === response) {
      message = getStudentReport(student);
      print(message);
    }
  }
}
