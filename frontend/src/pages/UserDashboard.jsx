import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserDashboard } from "../services/dashboardService";

function UserDashboard() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const data = await getUserDashboard();
      setMessage(data.message);
   } catch (error) {

  const status = error.response?.status

  if (status === 401 || status === 403) {

    localStorage.removeItem("token")
    localStorage.removeItem("role")

    navigate("/login", {
      state: { error: "Unauthorized access. Please log in again." }
    })

  } else {

    setError(
      error.response?.data?.message || "Something went wrong"
    )

  }

}
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  }

  return (
    <div className="container mt-4">

      <h2>User Dashboard</h2>

      <div className="mt-4">
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </div>

      <button
        className="btn btn-danger mt-3"
        onClick={handleLogout}
      >
        Logout
      </button>

    </div>
  );
}

export default UserDashboard;