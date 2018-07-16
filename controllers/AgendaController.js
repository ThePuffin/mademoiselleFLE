const db = require(`../models/index.js`);
const validator = require("validator");

/**
 * Class Agenda Controller
 */
class AgendaController {
    /**
     *
     * @param {*} req
     * @param {*} res
     */
    agenda(req, res) {
        db.Organizers.findAll().then(agenda => {
            res.render("agenda", { agenda: agenda });
        })

    }
    dispo(req, res) {
        res.render("dispo", );


    }

}
module.exports = AgendaController;