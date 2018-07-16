const express = require("express");
const router = express.Router();
const axios = require("axios");
const fs = require("fs-extra");

const TestimoniesController = require("../controllers/TestimoniesController");
const controller = new TestimoniesController();

router.get("/", (req, res) => controller.list(req, res));
router.get("/all", (req, res) => controller.list(req, res));
router.get("/actif", (req, res) => controller.listActif(req, res));
router.get("/desactive", (req, res) => controller.listDesactive(req, res));
router.get("/changeVisible/:id/:url", (req, res) =>
  controller.visibleNon(req, res)
);
router.get("/changeNonVisible/:id/:url", (req, res) =>
  controller.nonVisible(req, res)
);

module.exports = router;
