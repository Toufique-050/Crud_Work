const express = require("express")
const { getAdminDashboard } = require("../controllers/adminController")
const { verifyToken, allowRoles } = require("../middleware/authMiddleware")


const router = express.Router()

// Every route in this file: must be logged in AND must be an admin

router.use(verifyToken, allowRoles("admin"))


router.get("/dashboard", getAdminDashboard)


module.exports = router
