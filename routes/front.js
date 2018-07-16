const express = require("express");
const router = express.Router();

const FrontController = require("../controllers/FrontController");
const controller = new FrontController();

router.get("/", (req, res) => controller.accueil(req, res));
router.get("/avis", (req, res) => controller.avis(req, res));
router.get("/apropos", (req, res) => controller.apropos(req, res));
router.get("/monprofil", (req, res) => controller.monprofil(req, res));
router.get("/contact", (req, res) => controller.contact(req, res));
router.get("/signin", (req, res) => controller.signin(req, res));
router.post("/signin", (req, res) => controller.creation(req, res));
router.get("/niveaux", (req, res) => controller.niveaux(req, res));
router.get("/infoscours", (req, res) => controller.infoscours(req, res));

router.get("/seances", (req, res) => controller.seances(req, res))
router.get("/cours", (req, res) => controller.cours(req, res))
router.get("/badges", (req, res) => controller.badges(req, res))
router.get("/panier", (req, res) => controller.panier(res, res))
router.get("/exercices", (req, res) => controller.exercices(req, res))
router.get("/exercicevideo", (req, res) => controller.exercicevideo(req, res))

module.exports = router;
