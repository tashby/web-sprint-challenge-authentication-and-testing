exports.seed = async function(knex) {
	await knex("users").insert([
		{ id: 2, username: "new", password: pass123 },
		{ id: 3, username: "john", password: pass123 },
	])
}
