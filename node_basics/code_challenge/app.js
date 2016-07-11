// Friendlier errors on connection-fails - DONE
// Friendlier errors on parse-error - DONE
// Search points by course - DONE
// Extract printing functions to it's own module - DONE

var profile = require('./profile.js');
var topic = process.argv[2];
var users = process.argv.slice(3);

for (var i = 0; i < users.length; i++) {
  profile.getProfile(topic, users[i]);
}
