import axios from "axios"

const API = "http://localhost:3000/auth"


export const signupUser = async (email, password) => {

    const response = await axios.post(
        `${API}/singup`,{email, password})

    return response.data
}


export const loginUser = async (email, password) => {

    const response = await axios.post(
        `${API}/login`, {email, password})
    return response.data
}









// for explanation 
// response = {
//     data: {
//         message: "Signup successful"
//     },

//     status: 201,

//     statusText: "Created",

//     headers: {...},

//     config: {...}
// }