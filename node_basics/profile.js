// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use node.js to connect to Treehouse's api to get profile information to print out

// Connect to to API URL (http://teamtreehouse.com/username.json)
var https = require('https');
var http = require('http');


function getProfile(username){
  var request = https.get('https://teamtreehouse.com/'+ username +'.json', function(response){
    var body = '';
    // Read the data
    response.on('data', function(chunk){
      body += chunk;
    });
    response.on('end', function(){
      if (response.statusCode === 200) {
        try {
          // Parse the data
          var profile = JSON.parse(body);
          // Print the data
          printMessage(username, profile.badges.length, profile.points.JavaScript);
        } catch(error) {
          // Parse Error
          printError(error);
        }
      } else {
        // Status Code Error
        printError({message: 'There was an error getting ' + username + '\'s. ' + http.STATUS_CODES[response.statusCode] + ' .' });
      }
    });
  });
  // Connection Error
  request.on('error', printError);
}


// Print out error message
function printError(error){
  console.error(error.message);
}


// Print out message
function printMessage(username, badgeCount, points){
  var message = username + ' has ' + badgeCount + ' badge(s) and ' + points + ' JavaScript points in Team Treehouse';
  console.log(message);
}

module.exports.getProfile = getProfile;
