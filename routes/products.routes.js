const express = require("express")
const Product = require("../models/product.js")
const router = express.Router()

router.get("/products", async (req, res) => {

    const search = req.query.search || ""

    const allProducts = await Product.find({
        $or:[
            { title: { $regex: ".*"+search+".*", $options:"i" } },
            { description: { $regex: ".*"+search+".*", $options:"i" } }
        ]
    })
    res.render("products", {products: allProducts})
})

module.exports = router