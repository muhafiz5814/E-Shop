/** Import required packages and models */
const passport = require("passport")
const User = require("../models/user.js")

/** Register new user */
const userRegister = (req, res) => {
    const userDetails = {username: req.body.username,
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.username,
        user_type: req.body.type,
        is_active: true,
        wallet_balance: 10,
        created_at: new Date()
    }
    /** Below register method is from passport-local-mongoose package which has been added as plugin to User model. */
    User.register(userDetails, req.body.password, (err, user) => {
        if (err) {
            console.log(err)
            res.redirect("/register")
        } else {
            /** Authenticate the user and redirect to respective products routes. */
            passport.authenticate("local")(req, res, () => {
                if(req.body.type === "buyer"){
                    res.redirect("/products")
                } else {
                    res.redirect("/seller/products")
                }
            })
        }
    })
}

/** Log in the user */
const userLogin = (req, res) => {
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
            /** Authenticate the user and redirect to respective products routes. */
            passport.authenticate("local")(req, res, () => {
                if(req.body.type === "buyer") {
                    res.redirect("/products")
                } else {
                    res.redirect("/seller/products")
                }
            })
        }
    })
}

/** Logout the user */
const userLogout = (req, res, next) => {
    // Below logout() method is from passport
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/')
    })
}

/** Export all the controllers */
module.exports = {
    userRegister,
    userLogin,
    userLogout
}