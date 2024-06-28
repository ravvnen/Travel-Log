const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();
app.use(morgan('common'));

const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


