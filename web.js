var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

tempStr = fs.readFile('./index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
	return data;
});

app.get('/', function(request, response, tempStr) {
  response.send(tempStr.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
