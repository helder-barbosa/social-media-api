const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const port = process.env.PORT || 3001;
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
require('dotenv').config();

mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => console.log('[DATABASE] Connected to MongoDB !'))
  .catch((e) => console.log(e));

app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

app.listen(port, () => {
  console.log('[SERVER] Server Running...');
});
