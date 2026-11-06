import { Navigate } from "react-router-dom"


function ProtectedRoute({ children, allowedRole }) {

    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")

    // not logged in
    if (!token || !role) {
        return <Navigate to="/login" />
    }

    // logged in, but this page belongs to another role
    if (role !== allowedRole) {
        return <Navigate to={`/${role}/dashboard`} />
    }

    return children

}

export default ProtectedRoute
