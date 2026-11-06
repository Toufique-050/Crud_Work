import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signupUser } from "../services/authService"


function Signup() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()


  const handleSubmit = async (e) => {

    e.preventDefault()

    setMessage("")
    setError("")

    try {

      const data = await signupUser(email, password)

      setMessage(data.message)

      setEmail("")
      setPassword("")


      setTimeout(() => {

        navigate("/login")

      }, 1500)


    } catch (error) {

      setError(
        error.response?.data?.message || "Signup failed"
      )

    }

  }


  return (

    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">

      <div className="card shadow border-0" style={{ width: "420px" }}>

        <div className="card-body p-4">

          <h2 className="text-center fw-bold mb-2">
            Create Account
          </h2>

          <p className="text-center text-muted mb-4">
            Sign up to get started
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
              className="btn btn-primary w-100"
            >
              Sign Up
            </button>

          </form>


          <p className="text-center mt-4 mb-0">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-decoration-none fw-semibold"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>

  )
}


export default Signup