import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function ProposalHistory() {

    const [proposals, setProposals] = useState([]);
    const [search, setSearch] = useState("");
    const [domain, setDomain] = useState("");

    useEffect(() => {
        fetchProposals();
    }, []);

    const fetchProposals = async () => {

        try {

            const token = localStorage.getItem("token");

            const res = await axios.get(
                `http://localhost:5000/api/proposals?search=${search}&domain=${domain}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setProposals(res.data.proposals);

        } catch (error) {
            console.log(error);
        }

    };

    const toggleFavorite = async (id) => {

        try {

            const token = localStorage.getItem("token");

            await axios.put(
                `http://localhost:5000/api/proposals/favorite/${id}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            fetchProposals();

        } catch (error) {
            console.log(error);
        }

    };

    const deleteProposal = async (id) => {

        const confirmDelete = window.confirm(
            "Delete this proposal?"
        );

        if (!confirmDelete) return;

        try {

            const token = localStorage.getItem("token");

            await axios.delete(
                `http://localhost:5000/api/proposals/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            fetchProposals();

        } catch (error) {
            console.log(error);
        }

    };

    return (

        <div className="layout">

            <Sidebar />

            <div className="content">

                <h1>📂 Proposal History</h1>

                <div className="history-search">

                    <input
                        type="text"
                        placeholder="Search Project..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <select
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                    >
                        <option value="">All Domains</option>
                        <option>Artificial Intelligence</option>
                        <option>Machine Learning</option>
                        <option>Healthcare</option>
                        <option>Cyber Security</option>
                        <option>IoT</option>
                    </select>

                    <button onClick={fetchProposals}>
                        Search
                    </button>

                </div>

                <div className="history-grid">

                    {proposals.length === 0 ? (

                        <h3>No proposals found.</h3>

                    ) : (

                        proposals.map((item) => (

    <div
        className={`history-card ${item.favorite ? "favorite" : ""}`}
        key={item._id}
    >

        <h2>{item.projectTitle}</h2>

                                <p>
                                    <b>Domain:</b> {item.domain}
                                </p>

                                <p>
                                    <b>Technology:</b> {item.technology}
                                </p>

                                <p>
                                    <b>Duration:</b> {item.duration}
                                </p>

                                <div
                                    style={{
                                        display: "flex",
                                        gap: "10px",
                                        marginTop: "15px",
                                        flexWrap: "wrap"
                                    }}
                                >

                                    <Link to={`/proposal/${item._id}`}>
                                        <button>
                                            👁 View
                                        </button>
                                    </Link>

                                    <button
                                        onClick={() => toggleFavorite(item._id)}
                                    >
                                        {item.favorite
                                            ? "⭐ Unfavorite"
                                            : "☆ Favorite"}
                                    </button>

                                    <button
                                        onClick={() => deleteProposal(item._id)}
                                    >
                                        🗑 Delete
                                    </button>

                                </div>

                            </div>

                        ))

                    )}

                </div>

            </div>

        </div>

    );

}

export default ProposalHistory;