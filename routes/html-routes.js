var path = require("path");

module.exports = function(passport, app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/register.html"));
  });
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  app.get("/success", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/success.html"));
  });
  app.get("/error", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/error.html"));
  });




  // -- Called in Welcome.html
  app.post('/login',
    passport.authenticate('local', { 
                                     successRedirect: '/success',
                                     failureRedirect: '/error'})
  );


  app.get("/logout", destroySession);


  // -- Passport functions
  function IsAuthenticated(req, res, next){
    if(req.isAuthenticated()) {
      next();
    }
    else {
      res.redirect("/error");
    }
  }

  function destroySession(req, res, next) {
    req.logOut();
    req.session.destroy();
    res.redirect("/");
  }
};
