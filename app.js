const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

const app = express();

const productRoute = require('./routes/product');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Handling Product routes
app.use('/product', productRoute);

sequelize
  .sync()
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
