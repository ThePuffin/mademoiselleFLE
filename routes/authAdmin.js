const express = require("express");
const router = express.Router();
const passport = require("passport");

const AuthAdminController = require("../controllers/AuthAdminController");
const controller = new AuthAdminController();

router.get("/login", (req, res) => controller.login(req, res));
router.get("/logout", (req, res) => controller.logout(req, res));

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/backoffice",
    failureRedirect: "/admin/login",
    badRequestMessage:
      "Votre email et votre mot de passe doivent être renseignés",
    failureFlash: true,
    successFlash: true
  })
);

module.exports = router;
