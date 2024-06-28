const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

const middlewares = require('./middlewares');

require('dotenv').config();


const app = express();


mongoose.connect(process.env.DATABASE_URL)

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));

const port = 1337 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  });
}
);

//API Routes
app.use('/api/logs', require('./api/logs'));

//404 Not found - Error Handling
app.use(middlewares.NotFound);

//General Error Handling
app.use(middlewares.ErrorHandler);





