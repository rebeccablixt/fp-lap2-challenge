const db = require('../dbConfig');

class Post {
	constructor(data) {
		this.id = data.id;
		this.username = data.username;
		this.story = data.story;
		this.title = data.title;
	}

	static findById(id) {
		return new Promise(async (resolve, reject) => {
			try {
				let postData = await db.query(`SELECT * FROM UserPost WHERE id = $1;`, [
					id,
				]);
				let post = new Post(postData.rows[0]);
				resolve(post);
			} catch (err) {
				reject('Post not found');
			}
		});
	}

	static create(username, story, title) {
		return new Promise(async (resolve, reject) => {
			try {
				let postData = await db.query(
					`INSERT INTO UserPost (username, story, title) VALUES ($1, $2) RETURNING *;`,
					[username, story, title]
				);
				let newPost = new Post(postData.rows[0]);
				resolve(newPost);
			} catch (err) {
				reject('Error creating post');
			}
		});
	}
}

module.exports = Post;
