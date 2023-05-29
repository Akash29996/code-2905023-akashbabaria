const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;
const bmiRouter = require('./routes/bmi');

app.use(bodyParser.json({ limit: '10mb' }));

app.use(express.json());

app.use('/api/bmiCalculator', bmiRouter);


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
