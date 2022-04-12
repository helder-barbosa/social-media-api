const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const port = process.env.PORT || 3001;

mongoose.connect(`${process.env.MONGO_URL}`, () => {
  console.log('[DATABASE] Connected to MongoDB !');
});

app.listen(port, () => {
  console.log('[SERVER] Server Running...');
});
