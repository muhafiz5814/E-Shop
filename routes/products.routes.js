const express = require("express")
const Product = require("../models/product.js")
const router = express.Router()

router.get("/products", async (req, res) => {
    const allProducts = await Product.find({})
    res.render("products", {products: allProducts})
})

module.exports = router