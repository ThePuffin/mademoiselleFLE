const db = require(`../models/index.js`);
const validator = require("validator");

/**
 * Class Pages Controller
 */
class UnitsController {
  /**
   * Page Lister les articles
   * @param {*} req
   * @param {*} res
   */
  list(req, res) {
    db.Units.findAll().then(unity => {
      res.render("units/units", { unity });
    });
  }

  createUnit(req, res) {
    // res.send("creation");
    res.render("units/unitCreation");
  }

  enregistrerUnit(req, res) {
    let datas = req.body;
    // res.send(datas);
    db.Units.create(datas).then(unit => res.redirect("/backoffice/units"));
  }

  supprimerUnit(req, res) {
    db.Units.findById(req.params.id).then(unit => {
      unit.destroy();
      res.redirect("/backoffice/units");
    });
  }

  modificationUnit(req, res) {
    db.Units.findById(req.params.id).then(unit => {
      // res.send(unit);
      res.render("units/unitModification", {
        unit
      });
    });
  }

  enregistrerModif(req, res) {
    // res.send(req.params.id)
    //recuperer mes donnes en post
    db.Units.findById(req.params.id)
      .then(unit => unit.update(req.body))
      .then(unit => res.redirect("/backoffice/units"));
  }

  previsualiserUnit(req, res) {
    res.render("units/previsualisation");
    //recuperer mes donnes en post
    // db.Units.findById(req.params.id)
    //   .then(unit => unit.update(req.body))
    //   .then(unit => res.redirect("/backoffice/units"));
  }
}
module.exports = UnitsController;
