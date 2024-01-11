const mongoose = require("mongoose")

const productCategorySchema = new mongoose.Schema({
    category_id: Number,
    category_display_name: String,
    is_active: Boolean,
    created_at: Date,
    updated_at: Date
})

module.exports = mongoose.model("ProductCategory", productCategorySchema)