/** Require packages and routers. */
const express = require("express")
const bodyParser = require("body-parser")
const authRouter = require("./routes/auth.js")

/** Create an express app. */
const app = express()
const port = 3000

/** use static middlware to access static files in public directory and bodyParser to get the form values as request body. */
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

/** Direct all the authentication related routes to authRouter. */
app.use("/", authRouter)

/** Use EJS as the view engine to render ejs files to browser. */
app.set("view engine", "ejs")

/** GET route to home/starting page. */
app.get("/", (req, res) => {
    res.render("home")
})

/** Listen on port. */
app.listen(port, (req, res) => {
    console.log("Server is running on port: " + port)
})