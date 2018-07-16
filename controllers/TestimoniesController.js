const db = require(`../models/index.js`);
const validator = require("validator");

/**
 * Class Pages Controller
 */
class TestimoniesController {
  list(req, res) {
    db.Testimonies.findAll({
      include: [{ model: db.Users }]
    }).then(testimonies => {
      res.render("testimonies/temoignages", { testimonies });
    });
  }

  listFilter(req, res) {
    //  res.send('voila voila')
    res.render("testimonies/temoignages");
  }

  listActif(req, res) {
    //  res.send('voila voila')

    db.Testimonies.findAll({
      include: [{ model: db.Users }],
      where: { active: 1 }
    }).then(testimonies => {
      res.render("testimonies/temoignages", { testimonies });
    });
  }

  listDesactive(req, res) {
    //  res.send('desvoila desvoila')

    db.Testimonies.findAll({
      include: [{ model: db.Users }],
      where: { active: 0 }
    }).then(testimonies => {
      res.render("testimonies/temoignages", { testimonies });
    });
  }

  visibleNon(req, res) {
    // res.json(req.params);

    // console.log(req.params.id);
    db.Testimonies.findById(req.params.id).then(testimony => {
      testimony.active = false;
      testimony.save().then(testimony => {
        res.redirect(`/backoffice/temoignages/${req.params.url}`);
      });
    });
  }

  nonVisible(req, res) {
    // res.json(req.params);
    // console.log(req.params.id);
    db.Testimonies.findById(req.params.id).then(testimony => {
      testimony.active = true;
      testimony.save().then(testimony => {
        res.redirect(`/backoffice/temoignages/${req.params.url}`);
      });
    });
  }
}
module.exports = TestimoniesController;
