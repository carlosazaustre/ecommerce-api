const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const promise = require('bluebird');
const productsApi = require('./api/products');

const PORT = process.env.PORT || 3000;
const DB = process.env.MONGODB_URI || 'mongodb://localhost/ecommerce-db';
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send({ message: 'works!' });
});
app.use('/api/products', productsApi);

mongoose.Promise = promise;
mongoose.connect(DB).then(() => {
  console.log('DB connected');
  app.listen(PORT, () => console.log(`API REST running at http://localhost:${PORT}`));
});
