
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const getAuthHeader = () => {
    const token = localStorage.getItem("token");

    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
};

export const getAdminDashboard = async () => {
    const response = await axios.get(
        `${API}/admin/dashboard`,
        getAuthHeader()
    );

    return response.data;
};

export const getUserDashboard = async () => {
    const response = await axios.get(
        `${API}/user/dashboard`,
        getAuthHeader()
    );

    return response.data;
};
