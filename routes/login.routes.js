const express = require("express")
const loginControllers = require("../controllers/login.controllers.js")
const router = express.Router()

/** GET request to render login Page. */
router.get("/login", loginControllers.renderBuyerLogin)

/** GET request to render register Page */
router.get("/register", loginControllers.renderBuyerRegister)

/** GET request to render seller's login Page. */
router.get("/seller/login", loginControllers.renderSellerLogin)

/** GET request to render seller's register Page */
router.get("/seller/register", loginControllers.renderSellerRegister)

module.exports = router