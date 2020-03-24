const express = require ("express")
const routes = express.Router()
const recipe = require("./app/controllers/recipes")
const admin = require("./app/controllers/admin")

routes.get("/", function(req, res){
    return res.render("users/home")
})

routes.get("/recipes", recipe.index)
routes.get("/recipes/:id", recipe.show )
routes.get("/about", recipe.about)

routes.get("/admin/recipes", admin.index)
routes.get("/admin/recipes/create", admin.create)
routes.get("/admin/recipes/:id", admin.edit)
routes.put("/admin/recipes/", admin.put)
routes.post("/admin/recipes", admin.post)
routes.delete("/admin/recipes", admin.delete)


module.exports = routes