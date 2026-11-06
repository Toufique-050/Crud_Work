require("dotenv").config()

const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const User = require("./models/User")

// Run once with:  npm run seed:admin

const ADMIN_EMAIL = "admin@example.com"
const ADMIN_PASSWORD = "admin123"


const createAdmin = async () => {

    try {

        await mongoose.connect(process.env.MONGO_URI)

        const existingAdmin = await User.findOne({ email: ADMIN_EMAIL })

        if (existingAdmin) {

            console.log("Admin already exists")

        } else {

            const hashPassword = await bcrypt.hash(ADMIN_PASSWORD, 10)

            await User.create({
                email: ADMIN_EMAIL,
                password: hashPassword,
                role: "admin"
            })

            console.log("Admin created successfully")

        }

    } catch (error) {

        console.log(error)

    } finally {

        await mongoose.disconnect()

    }

}

createAdmin()
