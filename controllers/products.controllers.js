/** Import required model */
const Product = require("../models/product.js")

const showProducts = async (req, res) => {

    /** Get the value to search in database. */
    const search = req.query.search || ""

    /** Get page value from the query parameter and convert it to number. */
    const page = +req.query.page || 1
    const limit = 6

    /** Get the products to render to the page.
     * It will find all the products, if we do not provide the "search" value or
     * It will find the products which matches the search.
     * 
     * Search is based on string fields of our product document which are title and description.
     * 
     * To add the pagination in our result, use the skip() and limit() method to narrow down the results fetched from database.
     */
    const allProducts = await Product.find({
        $or:[
            { title: { $regex: ".*"+search+".*", $options:"i" } },
            { description: { $regex: ".*"+search+".*", $options:"i" } }
        ]
    }).skip((page - 1) * limit).limit(limit)

    /** Get the count of all products, so that we can get the totalPages required to show all the products.
     * 
     * First find all the products from the database.
     * Then get the length of array of products.
     */
    const allProductsCount = await Product.find({
        $or:[
            { title: { $regex: ".*"+search+".*", $options:"i" } },
            { description: { $regex: ".*"+search+".*", $options:"i" } }
        ]
    })
    const count = allProductsCount.length

    /** Send the products, totalPages and currentPage to render to the products page. */
    res.render("products", {
        products: allProducts,
        totalPages: Math.ceil(count/limit),
        currentPage: page
    })
}

/** Export all the controllers */
module.exports = {
    showProducts
}