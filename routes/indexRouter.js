const express = require("express");
const router = express.Router();

const { getRandomNumber } = require("../controller/randomNumber");
const { getFakePerson } = require("../controller/fakePerson");
const { explainString } = require("../controller/explainString");

router.get("/", (req, res) => {
  res.send("Hello, world!");
});

router.get("/get-random-number", (req, res, next) => {
  getRandomNumber(req, res, next);
});

router.post("/fake-person", (req, res, next) => {
  getFakePerson(req, res, next);
});

router.post("/explain-string", (req, res, next) => {
  explainString(req, res, next);
});

module.exports = router;
