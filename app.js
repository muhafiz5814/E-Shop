/** Require packages and routers. */
require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const passport = require("passport")
const session = require("express-session")

const loginRouter = require("./routes/login.routes.js")
const authRouter = require("./routes/auth.routes.js")
const productsRouter = require("./routes/products.routes.js")

/** Create an express app. */
const app = express()
const port = 3000

/** use static middlware to access static files in public directory and bodyParser to get the form values as request body. */
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

/** Use EJS as the view engine to render ejs files to browser. */
app.set("view engine", "ejs")

/** 
 * Create session to save user login credentials and start session.
 * Initialize passport.
 * Sonnect passport to session.
 */
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

/** Connect to MongoDB database. */
mongoose.connect(process.env.MONGODB_CONNECTING_STRING)

/** Direct all the authentication related routes to authRouter. */
app.use("/", loginRouter)
app.use("/", authRouter)
app.use("/", productsRouter)

/** GET route to home/starting page. */
app.get("/", (req, res) => {
    res.render("home")
})

/** Listen on port. */
app.listen(port, (req, res) => {
    console.log("Server is running on port: " + port)
})