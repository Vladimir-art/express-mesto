const cards = require('express').Router();
const path = require('path');
const fs = require('fs');

const cardsJson = path.join(__dirname, '..', 'data', 'cards.json'); // импортируем данные для роутинга

cards.get('/', (req, res) => {
  fs.readFile(cardsJson, (err, data) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    try {
      const json = JSON.parse(data);
      res.status(200).send(json);
    } catch (e) {
      res.status(500).send({ message: `${e.name}: ${e.message}` }); // воспроизвел ошибку при парсинге
    }
  });
});

module.exports = { cards };
