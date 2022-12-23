const { Router } = require('express')

const dbController = require("../controllers/database.js")

const router = Router()

router
    .get("/posts", dbController.getAllData)
    .post("/posts", dbController.createNewData)
    .put("/posts/like/:id", dbController.updateData)
    .delete("/posts/:id", dbController.deleteData)


module.exports = router;