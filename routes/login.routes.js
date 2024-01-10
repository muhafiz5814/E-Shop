const express = require("express")
const router = express.Router()

/** GET request to render login Page. */
router.get("/login", (req, res) => {
    res.render("login-register/login", {userType: "buyer"})
})

/** GET request to render register Page */
router.get("/register", (req, res) => {
    res.render("login-register/register", {userType: "buyer"})
})

/** GET request to render seller's login Page. */
router.get("/seller/login", (req, res) => {
    res.render("login-register/login", {userType: "seller"})
})

/** GET request to render seller's register Page */
router.get("/seller/register", (req, res) => {
    res.render("login-register/register", {userType: "seller"})
})

module.exports = router