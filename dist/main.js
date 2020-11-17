const findRecipes = $("#find-recipes");
const ingredient = $("#put-ingredient");
const container = $("#recipes-container")
const render = new Renderer();

const fetchRecipes = function () {
	$.get(`/recipes/${ingredient.val()}`, function (data) {
		render.render({data: data}, "recipes", "recipes" )
	});
};

container.on("click", ".img", function(){
	const ingredients = $(this).closest(".container").find("ul")[0]
	const firstIngredient = $(ingredients).text()
	alert(`we can start with this ingredient: ${firstIngredient.trim()}`)
})
// i belive that i have a better way 

findRecipes.on("click", fetchRecipes);
