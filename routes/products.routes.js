const express = require("express")
const router = express.Router()

router.get("/products", (req, res) => {
    res.json({message: "This is products page for products."})
})

router.get("/seller/products", (req, res) => {
    res.json({message: "This is sellers page for products."})
})

module.exports = router