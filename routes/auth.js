const express = require("express")
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")
const User = require("../models/user.js")

/** Create express router */
const router = express.Router()

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

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

/** Temporary get routes for home pages to test authentication */
router.get("/buyerhome", (req, res) => {
    res.json({message: "This is buyer Home"})
})

router.get("/sellerhome", (req, res) => {
    res.json({message: "This is Seller Home"})
})



router.post("/register", (req, res) => {

    const userDetails = {username: req.body.username,
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.username,
        user_type: req.body.type,
        is_active: true,
        wallet_balance: 10,
        created_at: new Date()
    }

    User.register(userDetails, req.body.password, (err, user) => {
        if (err) {
            console.log(err)
            res.redirect("/register")
        } else {
            passport.authenticate("local")(req, res, () => {
                if(req.body.type == "buyer"){
                    res.redirect("/buyerhome")
                } else {
                    res.redirect("/sellerhome")
                }
            })
        }
    })
})

router.post("/login", (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })

    // Below login() method is from passport
    req.login(user, (err) => {
        if(err) {
            console.log(err)
            res.redirect("/login")
        } else {
            passport.authenticate("local")(req, res, () => {
                res.redirect("/buyerhome")
            })
        }
    })
})

/** Export router to use in app.js. */
module.exports = router