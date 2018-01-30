const router = require("express").Router();
const bandsController = require("../../controllers/bandsController");

router.route("/") // full route: /api/bands
	.get(bandsController.findAll)
	.post(bandsController.create);

router.route("/:id") // full route: /api/bands/:id
	.get(bandsController.findById)
	.put(bandsController.update)
	.delete(bandsController.remove);

module.exports = router;
