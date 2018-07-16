const express = require("express");
const router = express.Router();


const PagesController = require("../controllers/PagesController");
const controller = new PagesController();

router.get("/", (req, res) => controller.overview(req, res));

module.exports = router;
