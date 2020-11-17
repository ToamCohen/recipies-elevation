const express = require("express");
const urllib = require("urllib");
const router = express.Router();

const urlRecipes = function (ingredient) {
	return `https://recipes-goodness.herokuapp.com/recipes/${ingredient}`;
};

const releventDataFunction = function (r) {
	return {
		ingredients: r.ingredients,
		title: r.title,
		thumbnail: r.thumbnail,
		href: r.href,
	};
};

router.get("/recipes/:ingredient", function (req, res) {
	const ingredient = req.params.ingredient;
	urllib.request(urlRecipes(ingredient), function (err, data) {
		try {
			data = JSON.parse(data);
			const releventData = data.results.map((r) => releventDataFunction(r));
			res.status(200).json(releventData);
		} catch (err) {
			res.status(404).json(err);
		}
	});
});

module.exports = router;
