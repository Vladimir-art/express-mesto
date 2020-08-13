const cards = require('express').Router();

const cardsJson = require('../data/cards.json');

cards.get('/cards', (req, res) => {
  res.send(cardsJson);
});

module.exports = { cards };
