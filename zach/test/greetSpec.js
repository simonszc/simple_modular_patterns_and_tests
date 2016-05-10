//tester
var expect = require("chai").expect;
var greeter = require("../lib/greet.js")

describe("Greeter", function(){
  it("should return 'hello' + name", function(){
    var results = greeter.greet("example name");
    var expected = "hello example name";

    expect(results).to.deep.equal(expected);
  });
})
