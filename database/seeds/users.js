const hashedPassword = "5f4dcc3b5aa765d61d8327deb882cf99"

exports.seed = async function(knex) {
	await knex("users").insert([
		{ id: 2, username: "new", password: hashedPassword },
		{ id: 3, username: "john", password: hashedPassword },
	])
}
