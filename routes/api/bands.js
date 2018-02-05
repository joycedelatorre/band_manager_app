const router = require("express").Router();
const bandsController = require("../../controllers/bandsController");

router.route("/") // full route: /api/bands
	.get(bandsController.findAll)
	.post(bandsController.create);

	// Wont need these because we are doing it by id for now 
// router.route("/:id") // full route: /api/bands/:id
// 	.get(bandsController.findById)
// 	.put(bandsController.update)
// 	.delete(bandsController.remove);

module.exports = router;
