var express = require('express');
var path = require('path');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');

app.use(session({secret: 'password'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    if (request.session.num == null) {
        request.session.num = 0;
    } else {
        request.session.num++;
    }
    console.log(request.session.num);
    response.render('index', {num: request.session.num});
})

app.listen(8000, function() {
    console.log('listening on port 8000');
});