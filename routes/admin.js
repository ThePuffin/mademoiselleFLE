const express = require("express");
const router = express.Router();
const axios = require("axios");
const fs = require("fs-extra");

const AdminController = require("../controllers/AdminController");
const controller = new AdminController();

router.get("/:id", (req, res) => controller.admin(req, res));
router.post("/:id", (req, res) => controller.modification(req, res));

module.exports = router;
