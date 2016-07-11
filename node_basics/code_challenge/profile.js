// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use node.js to connect to Treehouse's api to get profile information to print out

// Require New Printer file to handle the printing functions
var printer = require('./printer.js');

// Connect to to API URL (http://teamtreehouse.com/username.json)
var https = require('https');
var http = require('http');


function getProfile(topic, username){
  var request = https.get('https://teamtreehouse.com/'+ username +'.json', function(response){
    var body = '';
    // Read the data
    response.on('data', function(chunk){
      body += chunk;
      // console.log(body);
    });
    response.on('end', function(){
      // console.log(response.statusCode);
      if (response.statusCode === 200) {
        try {
          // Parse the data
          var profile = JSON.parse(body);
          // Print the data
          printer.printMessage(topic, username, profile.badges.length, profile.points[topic]);
        } catch(error) {
          // Parse Error
          printer.printError({message: 'There was a problem getting the username: ' + username + '. ' + 'Status Code:' + http.STATUS_CODES[response.statusCode] + '.' });
        }
      } else {
        // Status Code Error
        printer.printError({message: 'There was an error getting ' + username + ' username. ' + http.STATUS_CODES[response.statusCode] + '.' });
      }
    });
  });
  // Connection Error
  request.on('error', printer.printError.bind(null, {message: 'There was a connection error. Please try again later.'}));
}

module.exports.getProfile = getProfile;
