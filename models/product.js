const { ObjectID } = require("bson")
const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    is_active: Boolean,
    title: String,
    description: String,
    stock_count: Number,
    price: Number,
    selling_price: Number,
    created_at: Date,
    updated_at: Date,
    created_by: {type: mongoose.Schema.Types.ObjectId, default: null},
    category_id: {type: mongoose.Schema.Types.ObjectId, default: null},
    product_metadata: {type: mongoose.Schema.Types.ObjectId, default: null}
})

module.exports = mongoose.model("Product", productSchema)