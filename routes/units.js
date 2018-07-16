const express = require("express");
const router = express.Router();
const axios = require("axios");
const fs = require("fs-extra");

const UnitsController = require("../controllers/UnitsController");
const controller = new UnitsController();

router.get("/", (req, res) => controller.list(req, res));

//creation d'une unit
router.get("/creationUnits", (req, res) => controller.createUnit(req, res));
router.post("/enregistrer", (req, res) => controller.enregistrerUnit(req, res));
router.get("/previsualiser", (req, res) =>
  controller.previsualiserUnit(req, res)
);

//suppression d'une unit
router.get("/supprimerUnit/:id", (req, res) =>
  controller.supprimerUnit(req, res)
);

//modifier une unit
router.get("/modificationUnit/:id", (req, res) =>
  controller.modificationUnit(req, res)
);
router.post("/enregistrerModif/:id", (req, res) =>
  controller.enregistrerModif(req, res)
);

module.exports = router;
