const express = require("express");
const router = express.Router();
const axios = require("axios");
const fs = require("fs-extra");

const AgendaController = require("../controllers/AgendaController");
const controller = new AgendaController();

router.get("/", (req, res) => controller.agenda(req, res));
router.get("/dispo", (req, res) => controller.dispo(req, res));

module.exports = router;