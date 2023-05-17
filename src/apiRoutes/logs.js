const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const LogEntry = require("../models/LogEntry");
const limiter = require("../middlewares/limiter");

router.get("/", async (req, res, next) => {
  try {
    const logList = await LogEntry.find({});
    res.json(logList);
  } catch (err) {
    next(err);
  }
});

router.post("/", limiter, async (req, res, next) => {
  try {
    if (req.get("X-APIKEY") !== keys.LOG_APIKEY) {
      res.status(401);
      throw new Error("Unauthorized");
    }
    const logEntry = new LogEntry(req.body);
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(422);
    }
    next(err);
  }
});

module.exports = router;
