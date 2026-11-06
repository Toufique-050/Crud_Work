const bcrypt = require("bcrypt")

const User = require("../models/User")
const jwt = require("jsonwebtoken")


const singUp = async (req, res) => {

    try {

        const { email, password } = req.body

        // checking duplicate email

        const existingUser = await User.findOne({ email })

        if (existingUser) {

            return res.status(400).json({
                message: "Email already Registerd"
            })

        }

        const hashPassword = await bcrypt.hash(password, 10)

        const user = new User({
            email: email,
            password: hashPassword
        })

        await user.save()

        res.status(201).json({
            message: "User Registered Successfully"
        })

    } catch (error) {

        res.status(500).json({
            message: "Server Error",
            error: error.message
        })

    }

}


// Login api start from here

const login = async (req, res) => {

    try {

        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user) {

            return res.status(400).json({
                message: "Inavlid Email"
            })

        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        )

        if (!isMatch) {

            return res.status(400).json({
                message: "Inavlid Password"
            })

        }

        // JWT work start from here 

        const token = jwt.sign(
            {userId: user._id, role: user.role},
            process.env.JWT_SECRET
        )


      


        res.json({

            message: "Login Successfull",
            token: token,
            role: user.role

        })


    } catch (error) {

        res.status(500).json({
            message: "Server Error",
            error: error.message
        })

    }

}


module.exports = {
    singUp,
    login
}