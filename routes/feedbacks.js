const express = require("express");
const router = express.Router();
const axios = require("axios");
const fs = require("fs-extra");

const FeedbacksController = require("../controllers/FeedbacksController");
const controller = new FeedbacksController();

router.get("/", (req, res) => controller.list(req, res));
router.get("/trier", (req, res) => controller.listFilter(req, res));

module.exports = router;

