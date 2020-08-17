const cards = require('express').Router();
const path = require('path');
const fs = require('fs');

const cardsJson = path.join(__dirname, '..', 'data', 'cards.json'); // импортируем данные для роутинга

cards.get('/', (req, res) => {
  fs.readFile(cardsJson, (err, data) => {
    if (err) {
      return res.status(500).send({ Error: err.message });
    }
    return res.status(200).send(JSON.parse(data));
  });
});

module.exports = { cards };
