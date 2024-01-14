/** Render register form for buyer. */
const renderBuyerRegister = (req, res) => {
    res.render("login-register/register", {userType: "buyer"})
}

/** Render login form for buyer. */
const renderBuyerLogin = (req, res) => {
    res.render("login-register/login", {userType: "buyer"})
}

/** Render register form for seller. */
const renderSellerRegister = (req, res) => {
    res.render("login-register/register", {userType: "seller"})
}

/** Render login form for seller. */
const renderSellerLogin = (req, res) => {
    res.render("login-register/login", {userType: "seller"})
}

/** Export all the controllers */
module.exports = {
    renderBuyerRegister,
    renderBuyerLogin,
    renderSellerRegister,
    renderSellerLogin
}