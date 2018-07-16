const db = require(`../models/index.js`);
const validator = require("validator");

/**
 * Class Pages Controller
 */
class AdminController {
  /**
   * Page Lister les articles
   * @param {*} req
   * @param {*} res
   */
  admin(req, res) {
    db.Admin.findById(req.params.id).then(admin => {
      res.render("admin", { admin });
    });
  }

  modification(req, res) {
    db.Admin.update(req.body, { where: { id: req.params.id } }).then(admin => {
      req.flash("update", "Votre profil a bien été mis à jour");
      res.render("admin", {
        admin,
        messages: req.flash()
      });
    }); //bracket fermant le update
  } //bracket fermant modification
} //bracket fermant la class AdminController
module.exports = AdminController;
