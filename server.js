var express = require('express');
var app = express();



app.use(express.static('client/build'));


app.listen(3000, function(){
  console.log("App runnning on port 3000");
})
