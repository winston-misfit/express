
var express = require('../../');

var app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(process.env.PORT || 3000);
console.log('Express started on port %d', process.env.PORT || 3000);
