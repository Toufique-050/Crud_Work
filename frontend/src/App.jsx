import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"

import Signup from "./pages/Signup"
import Login from "./pages/Login"
import AdminDashboard from "./pages/AdminDashboard"
import UserDashboard from "./pages/UserDashboard"
import ProtectedRoute from "./components/ProtectedRoute"


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Navigate to="/login" />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/admin/dashboard"
          element={<ProtectedRoute allowedRole="admin">
            <AdminDashboard />
          </ProtectedRoute>}
        />

        <Route
          path="/user/dashboard"
          element={<ProtectedRoute allowedRole="user">
            <UserDashboard />
          </ProtectedRoute>}
        />

      </Routes>

    </BrowserRouter>

  )
}


export default App