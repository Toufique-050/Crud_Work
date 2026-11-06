import axios from "axios"

const API = "http://localhost:3000"


// Sends the saved token with every request: Authorization: Bearer <token>

const getAuthHeader = () => {

    const token = localStorage.getItem("token")

    return {
        headers: { Authorization: `Bearer ${token}` }
    }
}


export const getAdminDashboard = async () => {

    const response = await axios.get(
        `${API}/admin/dashboard`, getAuthHeader())

    return response.data
}


export const getUserDashboard = async () => {

    const response = await axios.get(
        `${API}/user/dashboard`, getAuthHeader())

    return response.data
}
