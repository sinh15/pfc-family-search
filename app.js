var express = require('express'),
    app = express(),
    path = require('path'),
    mustacheExpress = require('mustache-express'),
    cookieParser = require('cookie-parser');

var projectProposals = require("./assets/js/projectProposals.js");
var projectProposalsIns = new projectProposals();

// =================================================== //
// SET VIEWS AND FOLDERS
// =================================================== //
// Set Views folder as normal path route + view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view_engine', 'html');
app.engine('html', mustacheExpress("views/globals", ".html"));

// Set folders + things to be used
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/images', express.static(path.join(__dirname, 'images')));



// =================================================== //
// SET ROUTER PROPERTIES
// =================================================== //
app.use(cookieParser());

// Serve index page
app.get('/', function(req, res){
  res.render('index.html');
});

// Tryout page
app.get('/home', isAuthenticated, function(req, res) {
    var products = [{"name" : "paco"}, {"name" : "porras"}, {"name" : "name3"}];
    res.render('home.html', {
        product : products
    });
});

// Search example page
app.get('/search', isAuthenticated, function(req, res) {
    res.render('search.html');
});

app.get('/proposals', isAuthenticated, function(req, res) {
    res.render('proposals.html');
});

// Get projectProposals page
app.get('/proposals/:project', isAuthenticated, function(req, res) {

    var caption1 = projectProposalsIns.getExample(req.params.project);
    var name = caption1[0];
    var title = caption1[1];
    var subtitle = caption1[2];
    var goal = caption1[3];
    var requirements = caption1[4];
    var description = caption1[5];
    var background = caption1[6];
    var complexity = caption1[7];
    var complexityCSS = "width: " + complexity + "%";
    var complexityProgressBar = ""

    if(complexity < 30) {complexity = "Low Complexity"; complexityProgressBar = "progress-bar progress-bar-info";}
    else if(complexity < 70) {complexity = "Medium Complexity"; complexityProgressBar = "progress-bar progress-bar-warning";}
    else {complexity = "High Complexity"; complexityProgressBar = "progress-bar progress-bar-danger";}

    res.render('proposalsTemplate.html', {
        name : '/images/exampleBackgroundSearch.jpg',
        title : title,
        subtitle : subtitle,
        goal: goal,
        requirements : requirements,
        description : description,
        background : background,
        complexity : complexity,
        complexityCSS : complexityCSS,
        complexityProgressBar : complexityProgressBar
    });
});

function isAuthenticated(req, res, next) {
    if(!req.cookies.FS_ACCESS_TOKEN_1) res.redirect('/');
    else next();
}



// =================================================== //
// SET SERVER PROPERTIES
// =================================================== //
var server = app.listen(process.env.PORT || 8080, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('listening at http://%s:%s', host, port);
});
