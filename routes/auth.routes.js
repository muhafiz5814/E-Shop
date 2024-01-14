const express = require("express")
const passport = require("passport")
const User = require("../models/user.js")

/** Create express router */
const router = express.Router()

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

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
                if(req.body.type === "buyer"){
                    res.redirect("/products")
                } else {
                    res.redirect("/seller/products")
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
                if(req.body.type === "buyer") {
                    res.redirect("/products")
                } else {
                    res.redirect("/seller/products")
                }
            })
        }
    })
})

router.get('/logout', (req, res, next) => {
    // Below logout() method is from passport
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/')
    })
})

/** Export router to use in app.js. */
module.exports = router