const getAdminDashboard = (req, res) => {

    res.json({
        message: "Welcome to the Admin Dashboard"
    })

}


module.exports = {
    getAdminDashboard
}
