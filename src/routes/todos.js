const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('handling GET all todos request...');
  res.send('<h2>Aom</h2>');
});

router.post('/', (req, res) => {
  console.log('5930213024');
  res.end();
});

router.get('/about', (req, res) => {
  console.log('handling GET all todos request...');
  res.send('<h1>This is todos about page</h1>');
});

module.exports =  router;