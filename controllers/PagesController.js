const db = require(`../models/index.js`);
const validator = require("validator");

/**
 * Class Pages Controller
 */
class PagesController {
  /**
   * Page Lister les articles
   * @param {*} req
   * @param {*} res
   */
  overview(req, res) {
    const admin = req.user;
    // res.json(req.session);
    res.render("accueil", { admin });
  }
}
module.exports = PagesController;
