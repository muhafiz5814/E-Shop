const express = require("express")
const passport = require("passport")
const authControllers = require("../controllers/auth.controllers.js")
const User = require("../models/user.js")

/** Create express router */
const router = express.Router()

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

router.post("/register", authControllers.userRegister)

router.post("/login", authControllers.userLogin)

router.get('/logout', authControllers.userLogout)

/** Export router to use in app.js. */
module.exports = router