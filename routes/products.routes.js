const express = require("express")
const productsControllers = require("../controllers/products.controllers.js")
const router = express.Router()

router.get("/products", productsControllers.showProducts)

module.exports = router