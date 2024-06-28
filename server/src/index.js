const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

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

//Error Handling
app.use((req, res,   next) => {
  const error = new Error('Not Found - ${req.originalUrl}');
  res.status(404);
  next(error);
}); 

//Custom Error Handling - JSON response
app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack,
  });
}
);





