const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    user_type: { 
        type: String,
        enum: ["buyer", "seller"],
        default: "buyer"
    },
    is_active: Boolean,
    wallet_balance: Number,
    created_at: Date,
    updated_at: Date
})

userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", userSchema)