const getUserDashboard = (req, res) => {

    res.json({
        message: "Welcome to the User Dashboard"
    })

}


module.exports = {
    getUserDashboard
}
