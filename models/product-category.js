const mongoose = require("mongoose")

const productCategorySchema = new mongoose.Schema({
    category_name: String,
    is_active: {type: Boolean, default: true},
    created_at: Date,
    updated_at: {type: Date, default: null}
})

module.exports = mongoose.model("ProductCategory", productCategorySchema)