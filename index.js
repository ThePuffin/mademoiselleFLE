/*********************************************************************************************************************************************
 * *************************************************************************
 * *************************************************************************
 *  Configuration of Framework Express
 * *************************************************************************
 * *************************************************************************
 ******************************************************************************************************************************************/

const express = require("express");
const path = require("path");
const app = express();
const port = 4000;
const debug = require("debug")("http"); // Module for Debug
const logger = require("morgan"); // Module for Log
const bodyParser = require("body-parser"); // Module for POST/GET datas
const cookieParser = require("cookie-parser"); // Module for cookie in Session
const sassMiddleware = require("node-sass-middleware");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt-nodejs");
const colors = require("colors/safe");
const db = require(`./models/index.js`);
const loggedIn = require("./middlewares/logged");
// const flash = require("req-flash");
const flash = require("express-flash");
const fileUpload = require("express-fileupload");
const validator = require("validator");

//gestion de date avec moment
const moment = require("moment");
moment.locale("fr");

app.use(express.static(__dirname + "/public")); // all statics files in /public
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(fileUpload());

app.use(logger("dev"));
app.use(bodyParser.json()); // API response en JSON
app.use(
// donnée en get post non encodé par l'URL
bodyParser.urlencoded({extended: false}));

/**
 * Configuration of Session
 */
app.use(session({
  secret: "*****JeSuisLaClefSecrèteWild2018*****",
  saveUninitialized: true,
  resave: true,
  cookie: {
    maxAge: 100 * 60 * 60 * 24 * 30
  } // lifetime of cookie = 30 days
}));

// passport.use(   // configuration du login (champ = contenu du champ)   new
// LocalStrategy(     {       usernameField: "email",       passwordField:
// "password",       passReqToCallback: true // allows us to pass back the
// entire request to the callback     },     (req, email, password, done) => {
//   db.Users.findOne({         where: {           email: email         }  })
//      .then(user => {           if (!user) {             return done(null,
// false, { message: "password invalid..." });           } else {         if
// (user.password != password) {               return done(null, false, {
// message: "password invalid..." });             }           }   return
// done(null, user);         })         .catch(err => { return done(err, false);
//         });     }   ) ); // Serialize and Unserialize an User
// passport.serializeUser((user, done) => done(null, user.id)); // saved to
// session req.session.passport.user = {id:'..'} passport.deserializeUser((id,
// done) => {   db.Users.findOne({     // Using sequelize model functoin
// where: {       id: id     }   }).then(user => {    if (user == null) {
// done(new Error("Wrong user id."));     } done(null, user); // Standerd
// deserailize callback   }); }); // user object attaches to the request as
// req.user Initialize Passport Module app.use(passport.initialize());
// app.use(passport.session());

passport.use(new LocalStrategy({
  usernameField: "email",
  passwordFiled: "password",
  passReqToCallback: true
}, (req, email, password, next) => {
  db
    .Admin
    .findOne({
      where: {
        email: email
      }
    })
    .then(admin => {
      if (!admin) {
        return next(null, false, {message: "L'email que vous avez renseigné est incorrect"});
      }
      return next(null, admin);
      // bcrypt.compare(password, admin.password, (err, resultat) => {   if (resultat
      // === false) {     return next(null, false, {       message: "Le mot de passe
      // que vous avez renseigné est incorrect"     });   } else { return next(null,
      // admin);   } });
    });
}));

// Serialize and Unserialize an User
passport.serializeUser((admin, done) => done(null, admin.id));
// saved to session req.session.passport.user = {id:'..'}
passport.deserializeUser((id, done) => {
  db
    .Admin
    .findOne({
      where: {
        id: id
      }
    })
    .then(admin => {
      if (admin === null) {
        done(new Error("Wrong admin id."));
      }
      done(null, admin);
    });
});

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

/**
 * Store in global variables
 */
app.use((req, res, next) => {
  res.locals.session = req.session;
  res.locals.admin = req.admin; // this line
  next();
});

/**
 * middleware perso
 *
 */

/*********************************************************************************************************************************************
 * *************************************************************************
 * *************************************************************************
 *  Routing
 * *************************************************************************
 * *************************************************************************
 ******************************************************************************************************************************************/

/**
 * Routing
 */
const pages = require("./routes/pages");
// const auth = require("./Back/routes/auth");
const exercices = require("./routes/exercices");
const orders = require("./routes/orders");
const units = require("./routes/units");
const users = require("./routes/users");
const feedbacks = require("./routes/feedbacks");
const admin = require("./routes/admin");
const authAdmin = require("./routes/authAdmin");
const testimonies = require("./routes/testimonies");
const agenda = require("./routes/agenda");
const dispo = require("./routes/agenda");
const front = require("./routes/front");

// app.get("/", (req, res) => res.render("accueil")); app.get("/avis", (req,
// res) => res.render("avis")); app.get("/apropos", (req, res) =>
// res.render("apropos")); app.get("/monprofil", (req, res) =>
// res.render("monprofil")); app.get("/contact", (req, res) =>
// res.render("contact")); app.get("/niveaux", (req, res) =>
// res.render("niveaux")); app.get("/infoscours", (req, res) =>
// res.render("infoscours")); app.get("/panier", (req, res) =>
// res.render("panier")); //Jeu de route login app.use("/auth", auth); //Jeu de
// route login
app.use("/", front);
// // gestion des routes des pages
app.use("/backoffice", pages);
// // Gestion des routes des unités
app.use("/backoffice/units", units);
// Gestion des routes des commandes
app.use("/backoffice/orders", orders);
// //Gestion des routes des exercices
app.use("/backoffice/exercices", exercices);
//Gestion des utilisateurs
app.use("/backoffice/users", users);
//Gestion des feedbacks
app.use("/backoffice/feedbacks", feedbacks);
// //Gestion des routes du compte admin
app.use("/backoffice/admin", admin);
//Gestion des routes de l'authentification admin
app.use("/admin", authAdmin);
//Gestion des temoignages
app.use("/backoffice/temoignages", testimonies);
//Gestion Agenda
app.use("/backoffice/agenda", agenda);
app.use("/backoffice/dispo", dispo);

// Handle 404
app.use((req, res) => {
  res.status(404);
  res.render("errors/404");
});

// Handle 500
app.use((error, req, res, next) => {
  res.status(500);
  console.error(colors.bold.red.underline(error.stack));
  res.render("errors/500", {
    message: error.message,
    stack: error.stack,
    error: error
  });
});

/*********************************************************************************************************************************************
 * *************************************************************************
 * *************************************************************************
 *  Running Server
 * *************************************************************************
 * *************************************************************************
 ******************************************************************************************************************************************/

app.listen(port, err => {
  console.clear();
  if (!err) 
    console.log(colors.rainbow("Site is live... Go ahead"));
  else 
    console.log(colors.rainbow(err));
  console.log("🤓");
});
