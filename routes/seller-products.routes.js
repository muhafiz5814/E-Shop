const express = require("express")
const Product = require("../models/product.js")
const ProductCategory = require("../models/product-category.js")
const router = express.Router()

router.get("/seller/products", async (req, res) => {

    const allProducts = await Product.find({})
    console.log(allProducts)

    res.render("dashboard", {products: allProducts})
})

router.get("/seller/products/add", (req, res) => {
    res.render("product-add-update/add-product")
})

router.post("/seller/products", async (req, res) => {

    console.log(req.body)
    const newProduct = new Product({
        is_active: true,
        title: req.body.title,
        description: req.body.description,
        stock_count: req.body.stock_count,
        price: req.body.price,
        selling_price: req.body.selling_price,
        created_at: new Date(),
        created_by: req.user._id,
        category_id: (await ProductCategory.findOne({category_name: req.body.category}))._id
    })

    try {
        newProduct.save()
        res.redirect("/seller/products")
    } catch (error) {
        console.log(error)
        res.status(500).send("Unable to add product. Internal Server Error!")
    }

})


module.exports = router