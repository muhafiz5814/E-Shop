const express = require("express")
const router = express.Router()
const walletDetailsController = require("../controllers/wallet-details.controllers.js")

router.get("/wallet/details", walletDetailsController.showDetails)

module.exports = router