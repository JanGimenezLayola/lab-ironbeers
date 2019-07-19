'use strict';

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/beers', (req, res, next) => {
  punkAPI.getBeers()
    .then(beers => {
      res.render('beers', { beers });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/random-beer', (req, res, next) => {
  const randomNum = Math.floor(Math.random() * 25);
  console.log(randomNum);
  punkAPI.getBeers()
    .then(beers => {
      console.log('aquí va la random beer', beers[randomNum]);
      const randomBeer = beers[randomNum];
      res.render('random-beers', randomBeer);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/*', (req, res, next) => {
  res.render('page-not-found');
});
