// THIS STARTED AS VINCENT'S ./routes/api-routes.js file . . .
// moved db functions to ../../controllers/userController.js
// router.route(...) functions make calls to Vince's functions

const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/")						// full route: /api/users
	.post(usersController.login)		// VINCENT api route: app.post("/api/users", function(req, res) { . . .
	.get(usersController.find)			// VINCENT api route: app.get("/api/thisUser", function(req, res) { . . .
	.put(usersController.logout)		// VINCENT api route: app.put("/api/users/logout", function(req, res) { . . .

module.exports = router;