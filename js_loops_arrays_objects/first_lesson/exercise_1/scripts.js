function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

var counter = 0;

while (counter < 10) {
  var randomN = randomNumber(6);
  document.write(randomN + ' ');
  counter += 1;
}
