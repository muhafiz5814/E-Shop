const express = require("express")
const productsControllers = require("../controllers/products.controllers.js")
const router = express.Router()

router.get("/products", productsControllers.showProducts)

router.get("/products/:id", productsControllers.getProduct)

module.exports = router