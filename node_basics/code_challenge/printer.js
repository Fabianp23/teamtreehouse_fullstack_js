// Print out error message
function printError(error){
  console.error(error.message);
}


// Print out message
function printMessage(topic, username, badgeCount, points){
  var message = username + ' has ' + badgeCount + ' total badge(s) and ' + points + ' ' + topic + ' points in Team Treehouse';
  console.log(message);
}

module.exports.printError = printError;
module.exports.printMessage = printMessage;
