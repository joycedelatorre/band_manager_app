// THIS WAS VINCENT'S ./routes/api-routes.js file . . .
// modified ../models import to point to sequelize.js

var db = require("../../models/sequelize.js");

module.exports = function(app) {
	// -- POST resquest in register.js to add new users
	app.post("/api/users", function(req, res) {
		db.Users.findOne({ where: { username: req.body.username } }).then(function(user) {
			console.log(user);
			if(!user) {
				db.Users.create(req.body).then(function(dbPost) {
					res.json(dbPost);
				});
			}
			else {
				res.send(false);
			}
		});
	});






	// -- API routes for results.js to display results
	app.get("/api/thisUser", function(req, res) {
		db.Users.update(
			{ online: 1 },
			{ where: { id: req.user.id } }
		).then(function(dbResponse) {
			db.Users.findOne(
				{ where: { id: req.user.id } }
			).then(function(dbPost) {
				res.json(dbPost);
			});
		});
	});

	

	app.put("/api/users/logout", function(req, res) {
		db.Users.update(
			{ online: 0 },
			{ where: { id: req.user.id } }
		).then(function(dbPost) {
			res.json(dbPost);
		});
	});
};