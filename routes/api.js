const express = require('express');
const router = new express.Router();

const Band = require('../models/bands.js');

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

router.post('/helpwanted', (req, res)=> {
	const band = new Band({
		artist: req.body.artist,
		description: req.body.description,
		contact: req.body.contact,
		location: req.body.location
	});
	band.save().then(result =>{
		res.status(200).json({
			response: "Posted!",
			artist: req.body.artist + " - ok!",
			description: req.body.description + " - ok!",
			contact: req.body.contact + " - ok!",
			location: req.body.location + " - ok!"
		});
	});
});

router.get('/helpwantedpost', (req, res) => {
	Band.find().then(result => {
		res.status(200).json(result);
	});
});

module.exports = router;
