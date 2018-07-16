const db = require(`../models/index.js`);
const validator = require("validator");

/**
 * Class Pages Controller
 */
class UsersController {
  /**
   * Page Lister les articles
   * @param {*} req
   * @param {*} res
   */
  users(req, res) {
    db.Users.findAll().then(user => {
      res.render("users/users", { users: user });
    });
  }

  userDetail(req, res) {
    db.Users.findById(req.params.id).then(users => {
      res.render("users/oneUser", { users });
    });
  }
  oneActive(req, res) {
    console.log(req.params.id);
    db.Users.findById(req.params.id).then(users => {
      users.active = true;
      users.save().then(users => {
        res.render("users/oneUser", { users });
      });
    });
  }
  oneDesactive(req, res) {
    console.log(req.params.id);
    db.Users.findById(req.params.id).then(users => {
      users.active = false;
      users.save().then(users => {
        res.render("users/oneUser", { users });
      });
    });
  }

  usersActif(req, res) {
    // res.send('voila voila')

    db.Users.findAll({
      where: { active: 1 }
    }).then(users => {
      res.render("users/users", { users });
    });
  }

  usersDesactive(req, res) {
    // res.send('desvoila desvoila')

    db.Users.findAll({
      where: { active: 0 }
    }).then(users => {
      res.render("users/users", { users });
    });
  }

  listActive(req, res) {
    console.log(req.params.id);
    db.Users.findById(req.params.id).then(users => {
      users.active = true;
      users.save();
    });
    res.redirect("/backoffice/users");
  }
  listDesactive(req, res) {
    console.log(req.params.id);
    db.Users.findById(req.params.id).then(user => {
      user.active = false;
      user.save();
    });
    res.redirect("/backoffice/users");
  }
}
module.exports = UsersController;
