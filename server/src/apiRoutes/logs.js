const express = require('express');

const router = express.Router();

const LogEntry = require('../models/LogEntry');

router.get('/', async (req, res, next) => {
  try {
    const logList = await LogEntry.find({});
    res.json(logList);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const logEntry = new LogEntry(req.body);
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(422);
    }
    next(err);
  }
});

module.exports = router;
