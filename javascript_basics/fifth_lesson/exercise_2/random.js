function getRandomNumber(upper) {
  var randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
}

//console.log(getRandomNumber(6));
//console.log(getRandomNumber(60));
//console.log(getRandomNumber(600));
//console.log(getRandomNumber(6000));

function getArea(length, width, unit) {
  var area = length * width;
  return area + ' ' + unit;
}

console.log(getArea(2, 4, 'sq ft'));
