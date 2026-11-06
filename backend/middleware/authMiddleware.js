const jwt = require("jsonwebtoken")


// Step 1: Is the user logged in? (checks the token)

const verifyToken = (req, res, next) => {

    const authHeader = req.headers.authorization

    // Token is sent like this:  Authorization: Bearer <token>

    if (!authHeader || !authHeader.startsWith("Bearer ")) {

        return res.status(401).json({
            message: "Access denied. No token provided"
        })

    }

    const token = authHeader.split(" ")[1]

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        // decoded = { userId: "...", role: "admin", iat: ... }

        req.user = decoded

        next()

    } catch (error) {

        return res.status(401).json({
            message: "Invalid token"
        })

    }

}


// Step 2: Does the user have the right role? (checks the role)

const allowRoles = (...roles) => {

    return (req, res, next) => {

        if (!roles.includes(req.user.role)) {

            return res.status(403).json({
                message: "Access denied. You do not have permission"
            })

        }

        next()

    }

}


module.exports = {
    verifyToken,
    allowRoles
}
