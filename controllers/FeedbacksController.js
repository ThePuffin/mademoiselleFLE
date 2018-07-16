const db = require(`../models/index.js`);
const validator = require("validator");

/**
 * Class Pages Controller
 */
class FeedbacksController {
  list(req, res) {
    db.Feedbacks.findAll({
      include: [{ model: db.Users }, { model: db.Units }]
    }).then(feedbacks => {

      // res.json(feedbacks);
      res.render("feedback", { feedbacks });
    });
  }

  listFilter(req, res) {
    db.Feedbacks.findAll({
      include: [{ model: db.Users }, { model: db.Units }],
      where: { units_id: 2 }
    }).then(feedbacks => {
      // res.json(feedbacks);
      res.render("feedback", { feedbacks });
    });
  }
}
module.exports = FeedbacksController;
