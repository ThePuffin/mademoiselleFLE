const express = require("express");
const router = express.Router();
const axios = require("axios");
const fs = require("fs-extra");

const UsersController = require("../controllers/UsersController");
const controller = new UsersController();

router.get("/", (req, res) => controller.users(req, res));
router.get("/user/:id", (req, res) => controller.userDetail(req, res));
router.get("/active/:id", (req, res) => controller.oneActive(req, res));
router.get("/desactive/:id", (req, res) => controller.oneDesactive(req, res));
router.get("/actif", (req, res) => controller.usersActif(req, res));
router.get("/off", (req, res) => controller.usersDesactive(req, res));
router.get("/activeList/:id", (req, res) => controller.listActive(req, res));
router.get("/desactiveList/:id", (req, res) => controller.listDesactive(req, res));


module.exports = router;

