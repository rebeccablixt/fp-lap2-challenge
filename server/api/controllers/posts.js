const express = require('express');
const router = express.Router();

const Post = require('../models/post');

// post show route
router.get('/:id', async (req, res) => {
	try {
		const post = await Post.findById(parseInt(req.params.id));
		res.json(post);
	} catch (err) {
		res.status(404).json({ err });
	}
});

// Create post route
router.post('/', async (req, res) => {
	try {
		const post = await Post.create(
			req.body.username,
			req.body.story,
			req.body.title
		);
		res.json(post);
	} catch (err) {
		res.status(404).json({ err });
	}
});

module.exports = router;
