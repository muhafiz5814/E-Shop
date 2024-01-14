const express = require("express")
const sellerProductsController = require("../controllers/seller-products.controllers.js")
const router = express.Router()

router.get("/seller/products", sellerProductsController.showProducts)

router.get("/seller/products/add", sellerProductsController.renderAddProduct)

router.post("/seller/products", sellerProductsController.addProduct)

router.get("/seller/products/update/:id", sellerProductsController.renderUpdateProduct)

router.post("/seller/products/update/:id", sellerProductsController.updateProduct)

router.get("/seller/products/delete/:id", sellerProductsController.deleteProduct)

module.exports = router