var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.get("/:operation/:first/:second", function(req, res) {
  var operation = req.params.operation;
  var first = parseInt(req.params.first);
  var second = parseInt(req.params.second);

  var result;

  switch (operation) {
  case "add":
    result = first + second;
    break;

  case "subtract":
    result = first - second;
    break;
    
  case "multiply":
    result = first * second;
    break;
    
  case "divide":
    result = first / second;
    break;
    
  default:
    result = "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  res.send(result.toString());

});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});