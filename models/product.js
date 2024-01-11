const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new mongoose.Schema({
    is_active: {type: Boolean, default: true},
    title: String,
    description: String,
    stock_count: Number,
    price: Number,
    selling_price: Number,
    created_at: Date,
    updated_at: {type: Date, default: null},
    created_by: {type: Schema.Types.ObjectId, ref: "User", default: null},
    category_id: {type: Schema.Types.ObjectId, ref: "ProductCategory", default: null},
    product_metadata: {type: Schema.Types.ObjectId, default: null}
})

module.exports = mongoose.model("Product", productSchema)