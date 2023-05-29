const express = require('express');
const router = express.Router();
const { calculateBMI } = require('../controllers/bmi');

router.post('/', async (req, res, next) => {
  try {
    await calculateBMI(req, res);
  } catch (error) {
    next(error);
  }
});


router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = router;
