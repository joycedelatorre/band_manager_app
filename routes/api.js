const express = require('express');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
	res.status(200).json({
		message: "You're authorized to see this secret message.",
		// user values passed through from auth middleware
		user: req.user
	});
});

router.get('/test', (req, res) => {
	res.status(200).json(
		[
			{
				arg1: "this is a test.",
				arg2: "this is not a test. i'm not sure."
			},
			{
				arg1: "me again.",
				arg2: "ok i checked. not a test."
			},
			{
				arg1: "ok i'll make sure.",
				arg2: "i asked again, they say to stop asking."
			}
		]
	);
});

module.exports = router;
