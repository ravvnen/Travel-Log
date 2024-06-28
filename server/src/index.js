const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const middlewares = require('./middlewares');

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000'
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

//404 Not found - Error Handling
app.use(middlewares.NotFound);

//General Error Handling
app.use(middlewares.ErrorHandler);





