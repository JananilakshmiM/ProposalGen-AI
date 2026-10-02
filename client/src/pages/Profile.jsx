import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(res.data.user);
    } catch (error) {
      console.log(error);
      alert("Unable to load profile");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  if (!user) return <h2>Loading...</h2>;

  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <div className="form-card">

          <h1>👤 My Profile</h1>

          <h3>Name</h3>
          <p>{user.name}</p>

          <h3>Email</h3>
          <p>{user.email}</p>

          <h3>User ID</h3>
          <p>{user._id}</p>

          <button onClick={logout}>
            Logout
          </button>

        </div>
      </div>
    </div>
  );
}

export default Profile;