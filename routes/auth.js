const express = require("express")

/** Create express router */
const router = express.Router()

/** GET request to render login Page. */
router.get("/login", (req, res) => {
    res.render("login-register/login")
})

/** GET request to render register Page */
router.get("/register", (req, res) => {

    const hiddenValues = {
        userType: "buyer",
        creationDate: new Date()
    }

    res.render("login-register/register", {values: hiddenValues})
})

/** GET request to render seller's login Page. */
router.get("/seller/login", (req, res) => {
    res.render("login-register/login")
})

/** GET request to render seller's register Page */
router.get("seller/register", (req, res) => {
    const hiddenValues = {
        userType: "seller",
        creationDate: new Date()
    }
    res.render("login-register/register", {values: hiddenValues})
})

/** Export router to use in app.js. */
module.exports = router