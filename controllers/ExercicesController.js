const db = require(`../models/index.js`);
const validator = require("validator");

/**
 * Class Pages Controller
 */
class ExercicesController {
  /**
   * Page Lister les articles
   * @param {*} req
   * @param {*} res
   */
  list(req, res) {
    res.render("exercices");
  }

  createCheckbox(req, res) {
    // recupération de tous les chapitres créés
    db.Units.findAll().then(unity => {
      res.render("checkbox/checkboxCreation", { unity });
    });
  }

  listeCheckbox(req, res) {
    res.render("checkbox/checkboxListe");
    // recupération de tous les chapitres créés
    // db.checkbox.findAll().then(unity => {
    //   res.render("back/checkbox/checkboxListe", { unity });
    // });
  }

  createRepeat(req, res) {
    // recupération de tous les chapitres créés
    db.Units.findAll().then(unity => {
      res.render("repeat/repeatCreation", { unity });
    });
  }

  listeRepeat(req, res) {
    res.render("repeat/repeatListe");
    // recupération de tous les chapitres créés
    // db.checkbox.findAll().then(unity => {
    //   res.render("back/repeat/repeatListe", { unity });
    // });
  }
}
module.exports = ExercicesController;
