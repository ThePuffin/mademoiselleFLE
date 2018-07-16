const db = require(`../models/index.js`);
/**
 * Class AuthAdminController
 */
class AuthAdminController {
  /**
   * Page authAdmin
   * @param {*} req
   * @param {*} res
   */
  login(req, res) {
    res.render("authAdmin", { message: req.flash("error") });
  }

  logout(req, res) {
    req.logout(); //supression de la session en cours
    res.redirect("/admin/login");
  }
}
module.exports = AuthAdminController;
