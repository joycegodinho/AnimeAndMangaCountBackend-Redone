// modulos externos
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// modulos internos
require('./config/db');
const animeController = require('./controllers/anime');
const mangaController = require('./controllers/manga');
const homeController = require('./controllers/home');
const wishController = require('./controllers/wish');

const port = process.env.PORT || 4000;
const app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
  });
//controllers

// home
app.get('/', homeController.all); 

// wish
app.get('/wish', wishController.allWish);
app.delete('/wish/:id', wishController.deleteWish);
app.post('/wish/new', wishController.newWish);

// animes
app.get('/animes', animeController.allAnimes);

// animes/mangas

app.get('/get/:id',  animeController.singleAnime);
app.delete('/delete/:id', animeController.deleteAnime);
app.put('/edit/:id', animeController.updateAnime);
app.post('/new', animeController.newAnime);

// mangas
app.get('/mangas', mangaController.allMangas);

// auth
app.post('/auth/signup', authController.signUp);
app.post('/auth/signin', authController.signIn);

module.exports = app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
