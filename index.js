const express = require('express');
const app = express();

const path=require('path');

const morgan = require('morgan');

app.use(morgan('[:date[clf] "UserAgent=:user-agent" ":method :url" Status=:status'));

app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(requete,reponse){
    reponse.render('accueil.ejs');
});

app.get('/geo', function(requete,reponse){
    reponse.render('geographie.ejs');
});

app.get('/hist', function(requete,reponse){
    reponse.render('histoire.ejs');
});

app.get('/cult', function(requete,reponse){
    reponse.render('culture.ejs');
});

app.get('/gal', function(requete,reponse){
    reponse.render('galerie.ejs');
});

app.get('/form', function(requete,reponse){
    reponse.render('contact.ejs');
});

app.get('/link', function(requete,reponse){
    reponse.render('liens.ejs');
});

app.use(function(requete,reponse,next){
    reponse.status(404).render('page-404.ejs');
});

app.listen(8080);
console.log("Express démarré...");