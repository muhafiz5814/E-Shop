const renderBuyerRegister = (req, res) => {
    res.render("login-register/register", {userType: "buyer"})
}

const renderBuyerLogin = (req, res) => {
    res.render("login-register/login", {userType: "buyer"})
}

const renderSellerRegister = (req, res) => {
    res.render("login-register/register", {userType: "seller"})
}

const renderSellerLogin = (req, res) => {
    res.render("login-register/login", {userType: "seller"})
}

module.exports = {
    renderBuyerRegister,
    renderBuyerLogin,
    renderSellerRegister,
    renderSellerLogin
}