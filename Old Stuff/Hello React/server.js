var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(3001, () => {
    console.log("Server running at port 3001");
});