function randomValue(lower, upper) {
  if ( isNaN(lower) || isNaN(upper) ) {
  throw new  Error('one or both arguments are invalid!');
  }
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

console.log(randomValue(10, 100));
console.log(randomValue(15, 150));
console.log(randomValue(50, 500));
console.log(randomValue('poop', 100));
console.log(randomValue(10, 'caca'));
console.log(randomValue('poop', 'caca'));
