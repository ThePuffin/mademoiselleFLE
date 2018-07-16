/**
 *
 * exports.formValidation= function(datas)=> {ma classe}
 * supprimer l'export à la fin
 */

const validator = require("validator");
class Validate {
  /**
   *
   * @param {*} datas: req.body: données du formulaire
   */
  constructor(datas = {}) {
    this.datas = datas;
    this.errors = {};
    this.test = 0;
    /*
        [
            {field: "email", message: "Invalid Email"}
        ]
    */
  }
  verifTitle() {
    //pas de vérif pour présence du titre dans la BDD
    let regexMoreFive = /[A-Z \.\,]{5,}/i;
    /**
     * Verif du titre de l'article avec validator
     */
    if (validator.equals(this.datas.title, this.datas.description)) {
      /**
       * On ajoute la clef title qui contient un objet à l'objet errors
       */
      this.errors.title = {
        message: "Le titre doit être différent de la description",
        old: this.datas.title
      };
      /**
       * Incrémentation d'un compteur pour vérification finale
       */
      this.test++;
    } else if (regexMoreFive.test(this.datas.title) === false) {
      this.errors.title = {
        message: "Le titre doit avoir au moins 5 caractères",
        old: this.datas.title
      };
      this.test++;
    }
  }
  /**
   * Verif de la description avec regex
   */
  verifDescription() {
    let regexMoreTen = /[A-Z \.\,]{10,}/i;
    if (regexMoreTen.test(this.datas.description) === false) {
      this.errors.description = {
        message: "La description doit avoir au moins 10 caractères",
        old: this.datas.title
      };
      this.test++;
    }
  }
  /**
   * Vérif de la note avec regex
   */
  verifNote() {
    let regexNote = /[0-9]/;
    if (regexNote.test(this.datas.note) === false) {
      this.errors.note = {
        message: "Vous devez attribuer une note entre 1 et 5",
        old: this.datas.note
      };
      this.test++;
    }
  }
  /**
   * Vérif si le req.body ne contient pas de photo
   */
  verifImg() {
    if (this.datas.photo) {
    } else {
      this.errors.photo = {
        message: "Vous devez ajouter une photo"
      };
      this.test++;
    }
  }

  /**
   * Valider tout un fourmulaire
   * Si this.test != 0 il y a une erreur
   *    validate retourne false
   */
  validate() {
    this.verifTitle();
    this.verifDescription();
    this.verifNote();
    this.verifImg();
    console.log(this.errors);
    console.log(this.test);
    if (this.test !== 0) {
      return false;
    }
    return true;
  }
}
/* 
 * const test = new Validate(req.body)
 * test.validate
 * lancer le module monModule.formValidation.test.validate()
 */

module.exports = Validate;
