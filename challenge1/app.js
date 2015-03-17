// Load module dependencies
var http = require('http'),
    fs   = require('fs'),
    path = require('path');

http.createServer(function(request, response) {

    dataFilepath = path.join(__dirname, 'data.csv');
    // readFile: The ASYNCHRONOUS, NON-BLOCKING API for reading in a file.
    fs.readFile(dataFilepath, 'utf-8', function(err, data) {
        var responseData = {};

        // Basic JS: Work with the data in the file, and create the response
        var lines = data.split('\n');

        // Note the native forEach support in Arrays in node.js!
        lines.forEach(function(line) {
            var parts = line.split(',');
            responseData[parts[0]] = parts[1];
        });

        // Set the content type we're sending back as JSON
        response.writeHead(200, {
            'Content-Type':'application/json'
        });

        // Serialize responseData to a JSON string using stringify
        response.end(JSON.stringify(responseData));

    });

}).listen(3000);

console.log('node server running on port 3000');

