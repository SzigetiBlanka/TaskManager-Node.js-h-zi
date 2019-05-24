var express = require('express');
var session = require('express-session')
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

const bodyParser = require('body-parser');
app.set('views engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


app.use(express.static('views'));

app.use(session({secret: 'secret'}));

// Load routing
require('./route/index')(app);

app.use((err,req,res,next)=>{
    res.end('Problem...');
    console.log(err);
})

app.listen(3000, function () {
    console.log('Hello :3000');
});