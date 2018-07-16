const db = require(`../models/index.js`);
const validator = require("validator");

/**
 * Class Pages Controller
 */
class OrdersController {
  /**
   * Page Lister les articles
   * @param {*} req
   * @param {*} res
   */

  list(req, res) {
    async function commandes() {
      const users = await db.Users.findAll({
        include: [{ model: db.Units }]
      }).then(users => users);
      const commandes = await db.Orders.findAll({
        include: [{ model: db.Users }, { model: db.Units }]
      }).then(units => units);
      const units = await db.Units.findAll().then(units => units);
      // res.json(user);
      res.render("orders", { users, units, commandes });
    }
    commandes();
  }

  filtrerList(req, res) {
    const { name, title } = req.query;
    // console.log("====================================");
    // console.log(name, title);
    // console.log("====================================");
    async function filter(parametre) {
      const users = await db.Users.findAll({
        include: [{ model: db.Units }]
      }).then(users => users);
      const commandes = await db.Orders.findAll({
        where: parametre,
        include: [{ model: db.Users }, { model: db.Units }]
      }).then(units => units);
      const units = await db.Units.findAll().then(units => units);
      // res.json(user);
      res.render("orders", { users, units, commandes });
    }
    if (/[0-9]+/.test(name) && /[0-9]+/.test(title))
      filter({ users_id: name, units_id: title });
    else if (/[0-9]+/.test(name)) {
      filter({ users_id: name });
    } else if (/[0-9]+/.test(title))
      filter({
        units_id: title
      });
    else {
      res.redirect("/backoffice/orders");
    }
  }
}
module.exports = OrdersController;
