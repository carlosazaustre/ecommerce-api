const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productsApi = require('./api/products');

const PORT = process.env.PORT || 3000;
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send({ message: 'works!' });
});
app.use('/api/products', productsApi);

app.listen(PORT, () => console.log(`API REST running at http://localhost:${PORT}`));
