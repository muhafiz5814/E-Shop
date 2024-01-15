const User = require("../models/user.js")

const showDetails = async (req, res) => {
    const currentuUser = await User.findById(req.user._id)
    res.render("wallet-details", {walletBalance: currentuUser.wallet_balance})
}

module.exports = {
    showDetails
}