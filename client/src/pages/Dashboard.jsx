import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function Dashboard() {
  const [stats, setStats] = useState({
    totalProposals: 0,
    latestProposal: null,
  });

  

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/proposals/stats",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="content">

        <h1>Dashboard</h1>

        <div className="dashboard-cards">

          <div className="card">
            <h2>{stats.totalProposals}</h2>
            <p>Total Proposals</p>
          </div>

          <div className="card">
            <h2>
              {stats.latestProposal
                ? stats.latestProposal.projectTitle
                : "No Proposal"}
            </h2>
            <p>Latest Proposal</p>
          </div>

        </div>

        <div className="dashboard-actions">

          <Link to="/proposal">
            <button>Generate Proposal</button>
          </Link>

          <Link to="/history">
            <button>Proposal History</button>
          </Link>

          <Link to="/profile">
            <button>Profile</button>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;