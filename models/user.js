const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    user_type: { enum: [ "buyer", "seller"] },
    is_active: Boolean,
    wallet_balance: Number,
    created_at: Date,
    updated_at: Date
})

module.exports = mongoose.model("User", userSchema)