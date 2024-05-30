const express = require("express")
const controller = require("../Controller/Product")
const cache = require("../Middleware/Cache")
const upload = require("../Middleware/Upload")
const validate = require("../Middleware/Validate")
const Route = express.Router()

Route.get("/", validate(), cache, controller.all)
Route.post("/", validate("admin"), upload.single("image"), controller.add)
Route.put("/", validate("admin", "staff"), controller.edit)
Route.delete("/delete/:id", validate("admin"), controller.delete)
Route.get("/search", validate(), controller.search)
Route.get("/filter", validate(), controller.filter)
Route.get("/details/:id", validate(), controller.detail)
module.exports = Route