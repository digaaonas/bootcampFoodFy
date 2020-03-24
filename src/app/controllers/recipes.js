const data = require("../../../data.json")


//PAGE APRESENTATION MENU
exports.index = function(req, res){
    return res.render("users/recipes", {item: data.recipes})
}

//PAGE APRESENTATION RECIPE ONE
exports.show = function(req, res){
    const recipeId = req.params.id;

    const recipe = data.recipes.find(function(recipe){
        return recipeId == recipe.id
    })

    return res.render("users/description", { recipe })
}

//PAGE ABOUT
exports.about = function(req, res){
    return res.render("users/about")
}