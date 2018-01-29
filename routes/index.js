const path = require("path");
const router = require("express").Router();

const userRoutes = require("./api/user.js");
const bandRoutes = require("./api/bands.js");

// API Routes
router.use("/api/user", userRoutes);
router.use("/api/bands", bandRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
  // res.sendFile(path.join(__dirname, "../client/src/index.html"));
});

module.exports = router;


// NEED TO INTEGRATE THE FOLLOWING 
// FROM VINCENT'S ./routes/html-routes.js . . .

// var path = require("path");

// module.exports = function(passport, app) {

//   app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/register.html"));
//   });
//   app.get("/login", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/login.html"));
//   });
//   app.get("/success", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/success.html"));
//   });
//   app.get("/error", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/error.html"));
//   });




//   // -- Called in Welcome.html
//   app.post('/login',
//     passport.authenticate('local', { 
//                                      successRedirect: '/success',
//                                      failureRedirect: '/error'})
//   );


//   app.get("/logout", destroySession);


//   // -- Passport functions
//   function IsAuthenticated(req, res, next){
//     if(req.isAuthenticated()) {
//       next();
//     }
//     else {
//       res.redirect("/error");
//     }
//   }

//   function destroySession(req, res, next) {
//     req.logOut();
//     req.session.destroy();
//     res.redirect("/");
//   }
// };
