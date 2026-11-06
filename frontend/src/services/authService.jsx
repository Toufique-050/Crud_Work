
import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/auth`;

export const signupUser = async (email, password) => {
    const response = await axios.post(
        `${API}/singup`,
        { email, password }
    );

    return response.data;
};

export const loginUser = async (email, password) => {
    const response = await axios.post(
        `${API}/login`,
        { email, password }
    );

    return response.data;
};
