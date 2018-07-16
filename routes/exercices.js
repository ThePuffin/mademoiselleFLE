const express = require("express");
const router = express.Router();
const axios = require("axios");
const fs = require("fs-extra");

const ExercicesController = require("../controllers/ExercicesController");
const controller = new ExercicesController();


router.get("/", (req, res) => controller.list(req, res));

router.get("/listeCheckbox", (req, res) => controller.listeCheckbox(req, res));
router.get("/creationCheckbox", (req, res) =>
  controller.createCheckbox(req, res)
);
router.get("/listeRepeat", (req, res) => controller.listeRepeat(req, res));
router.get("/creationRepeat", (req, res) => controller.createRepeat(req, res));

module.exports = router;
