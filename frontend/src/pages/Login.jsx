import { useState } from "react"
import { loginUser } from "../services/authService"
import { Link, useNavigate, useLocation } from "react-router-dom"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [message, setMessage] = useState("")

  const location = useLocation()
  const [error, setError] = useState(location.state?.error || "")

  const navigate = useNavigate()


  const handleSubmit = async (e) => {

    e.preventDefault()

    setMessage("")
    setError("")

    try {

      const data = await loginUser(email, password)

      // console.log(data)

      localStorage.setItem("token", data.token)
      localStorage.setItem("role", data.role)

      setMessage(data.message)

      setEmail("")
      setPassword("")


      setTimeout(() => {

        navigate(`/${data.role}/dashboard`)

      }, 1000)


    } catch (error) {

      setError(
        error.response?.data?.message || "Login failed"
      )

    }

  }


  return (

    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">

      <div className="card shadow border-0" style={{ width: "420px" }}>

        <div className="card-body p-4">

          <h2 className="text-center fw-bold mb-2">
            Welcome Back
          </h2>

          <p className="text-center text-muted mb-4">
            Login to your account
          </p>


          {message && (
            <div className="alert alert-success">
              {message}
            </div>
          )}


          {error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )}


          <form onSubmit={handleSubmit}>

            <div className="mb-3">

              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>


            <div className="mb-4">

              <label className="form-label">
                Password
              </label>

              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

            </div>


            <button
              type="submit"
              className="btn btn-success w-100"
            >
              Login
            </button>

          </form>


          <p className="text-center mt-4 mb-0">

            Don't have an account?{" "}

            <Link
              to="/signup"
              className="text-decoration-none fw-semibold"
            >
              Create Account
            </Link>

          </p>

        </div>

      </div>

    </div>

  )
}


export default Login