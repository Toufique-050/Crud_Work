const express = require("express")
const { getUserDashboard } = require("../controllers/userController")
const { verifyToken, allowRoles } = require("../middleware/authMiddleware")


const router = express.Router()

// Every route in this file: must be logged in AND must be a user

router.use(verifyToken, allowRoles("user"))


router.get("/dashboard", getUserDashboard)


module.exports = router
