var greeter = require("./lib/greet.js");

(function() {
  console.log(greeter.greet(process.argv.slice(2)));
})
