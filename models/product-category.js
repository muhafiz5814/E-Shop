/** Import required package */
const mongoose = require("mongoose")

/** Create a new mongoose schema for product category */
const productCategorySchema = new mongoose.Schema({
    category_name: String,
    is_active: {type: Boolean, default: true},
    created_at: Date,
    updated_at: {type: Date, default: null}
})

/** Export the model */
module.exports = mongoose.model("ProductCategory", productCategorySchema)