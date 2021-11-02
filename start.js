var express = require('express');
var app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/homework_foodblog.html');//html is in the same directory as this script
    
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});