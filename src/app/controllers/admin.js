const fs = require ('fs')
const data = require ("../../../data.json")


//PAGE ADMIN APRESENTATION MENU
exports.index = function(req, res){
    return res.render("admin/index", {item: data.recipes})
}

//PAGE ADMIN CREATE
exports.create = function(req, res){
    const recipeId = req.params.id;

    const recipe = data.recipes.find(function(recipe){
        return recipeId == recipe.id
    })

    return res.render("admin/create", { recipe })
}

exports.post = function(req, res){
    const keys = Object.keys(req.body)

    for (key of keys){
        if(req.body[key] == ""){
            return res.send("Please, fill all fields")
        }
    }

    let id = 1 

    const lastRecipe = data.recipes[data.recipes.length - 1]

    if(lastRecipe){
        id = lastRecipe.id + 1
    }

    data.recipes.push({
        id,
        ...req.body
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write file error")

        return res.redirect("/admin/recipes")
    })


}

//PAGE ADMIN APRESENTATION RECIPE ONE
exports.edit = function(req, res){
    const recipeId = req.params.id;

    const recipe = data.recipes.find(function(recipe){
        return recipeId == recipe.id
    })

    return res.render("admin/edit", { recipe })
}

//PAGE ADMIN EDIT
exports.put = function(req, res){
    const { id } = req.body

    console.log(id)

    let index = 0

    const foundRecipe = data.recipes.find(function(recipes, foundIndex){
        
        if(recipes.id == id){
            index = foundIndex
            return true
        } 
    })

    if(!foundRecipe) return res.send(`Recipe not found!${id}`)

    const recipe = {
        ...foundRecipe,
        ...req.body,
        id: Number(req.body.id)
    }

    data.recipes[index] = recipe

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) res.send("Write error!")

        return res.redirect(`/admin/recipes/${id}`)
    })
}

exports.delete = function(req, res){
    const {id} = req.body

    const filterRecipe = data.recipes.filter(function(recipe){
        return recipe.id != id
    })

    data.recipes = filterRecipe

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write file error")

        return res.redirect('/admin/recipes')
    })
}