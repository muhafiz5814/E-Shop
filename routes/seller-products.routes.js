const express = require("express")
const Product = require("../models/product.js")
const ProductCategory = require("../models/product-category.js")
const  mongoose  = require("mongoose")
const router = express.Router()

router.get("/seller/products", async (req, res) => {

    const allProducts = await Product.find({})
    res.render("dashboard", {products: allProducts})
})

router.post("/seller/products", async (req, res) => {

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

router.get("/seller/products/add", (req, res) => {
    res.render("product-add-update/add-product")
})

router.get("/seller/products/update/:id", async (req, res) => {
    // Do not need to convert id into ObjectId, mongoose will still get the result if we provide it in string form.
    const id = req.params.id
    const product = await Product.findOne({_id: id})
    res.render("product-add-update/update-product", {product: product})

})

router.post("/seller/products/update/:id", async (req, res) => {
     
    try {
        await Product.findByIdAndUpdate({_id: req.params.id}, {
            is_active: (req.body.is_active === "true") ? true : false,
            title: req.body.title,
            description: req.body.description,
            stock_count: req.body.stock_count,
            price: req.body.price,
            selling_price: req.body.selling_price,
            updated_at: new Date(),
            category_id: (await ProductCategory.findOne({category_name: req.body.category}))._id
        })
        res.redirect("/seller/products")
    } catch (error) {
        console.log(error)
        res.status(500).send("Unable to update product. Internal Server Error!")
    }
})

module.exports = router