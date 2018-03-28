// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

    switch (path) {
        case "/home":
            return fs.readFile(__dirname + "/home.html", function(err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
        });

        case "/food":
        return fs.readFile(__dirname + "/food.html", function(err, data) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
        
        case "/movies":
        return fs.readFile(__dirname + "/movies.html", function(err, data) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });

        case "/faveCSS":
        return fs.readFile(__dirname + "/faveCSS.html", function(err, data) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }
}
// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});