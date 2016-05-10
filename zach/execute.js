const greeter = require("./lib/greet.js");
var somename = process.argv[2];

console.log(greeter.greet(somename));
