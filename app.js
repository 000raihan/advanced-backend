const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/indexRouter');

const app = express();

app.use(bodyParser.json());

const port = 4000;

app.use("/", indexRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});