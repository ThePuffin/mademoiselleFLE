const db = require(`../models/index.js`);

class FrontController {
  /**
   * Page Lister les articles
   * @param {*} req
   * @param {*} res
   */
  accueil(req, res) {

    res.render("accueil");
  }

  avis(req, res) {
    res.render("avis");
  }
  apropos(req, res) {
    res.render("apropos")
  }
  //gestion de la création de compte

  signin(req, res) {
    res.render("signin")
  }

  creation(req, res) {
    db
      .Users
      .create(req.body)
      .then(res.redirect("/"))
  }

  contact(req, res) {
    res.render("contact")
  }

  seances(req, res) {
    res.render("seanceIndividuelle")
  }

  cours(req, res) {
    res.render("cours")
  }
  badges(req, res) {
    res.render("badges")
  }
  panier(req, res) {
    res.render("panier")
  }
  exercicevideo(req, res) {
    res.render("exercicevideo")
  }
  exercices(req, res) {
    res.render("exercices")
  }
}
module.exports = FrontController;
