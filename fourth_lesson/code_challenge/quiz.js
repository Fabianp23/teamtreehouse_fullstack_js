var score = 0;

var questionOne = prompt('What is 10 x 10?');
if ( parseInt(questionOne) === 100 ) {
  score += 1;
}

var questionTwo = prompt('How many planets are there in our Solar System?');
if ( parseInt(questionTwo) === 8 ) {
  score += 1;
}

var questionThree = prompt('Is Pluto a planet?');
if ( questionThree.toUpperCase() === 'NO' ) {
  score += 1;
}

var questionFour = prompt('What is the first name of the scientist that downgraded pluto to a Dwarf Planet?');
if ( questionFour.toUpperCase() === 'Neil' ) {
  score += 1;
}

var questionFive = prompt('Is the bird the word?');
if ( questionFive.toUpperCase() === 'YES') {
  score += 1;
}

document.write('<h1>Your score was ' + score '</h1>')
if ( score > 4 ) {
  document.write('<2>Congratulations you earned the Gold Crown!</h2>');
} else if ( score > 2 ) {
  document.write('<h3>Congratulations you earned the Silver Crown!<h3>');
} else if ( score > 0 ){
  document.write('<h4>Congratulations you earned the Bronze Crown!<h4>');
} else {
  document.write('<h5>No Crown for you :/</h5>');
}
