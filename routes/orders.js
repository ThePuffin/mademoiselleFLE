const express = require("express");
const router = express.Router();
const axios = require("axios");
const fs = require("fs-extra");

const OrdersController = require("../controllers/OrdersController");
const controller = new OrdersController();

router.get("/", (req, res) => controller.list(req, res));
router.get("/filtrer", (req, res) => controller.filtrerList(req, res));
module.exports = router;
