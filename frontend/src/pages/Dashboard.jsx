import { useContext } from "react";
import { Link } from "react-router-dom";
import {
    FaUtensils,
    FaCalendarCheck,
    FaClipboardList,
    FaUserCircle
} from "react-icons/fa";

import { AuthContext } from "../context/AuthContext";

function Dashboard() {

    const { user } =
        useContext(AuthContext);

    return (

        <div
            style={{
                minHeight: "100vh",
                background:
                "linear-gradient(135deg,#0f172a,#1e293b,#2563eb)",
                padding: "40px"
            }}
        >

            <div className="container">

                {/* Welcome Card */}

                <div
                    className="card shadow-lg border-0 mb-5"
                    style={{
                        borderRadius: "25px",
                        overflow: "hidden"
                    }}
                >

                    <div
                        style={{
                            background:
                            "linear-gradient(135deg,#2563eb,#06b6d4)",
                            color: "white",
                            padding: "40px"
                        }}
                    >

                        <div className="d-flex align-items-center">

                            <FaUserCircle
                                size={70}
                                className="me-4"
                            />

                            <div>

                                <h2 className="fw-bold">
                                    Welcome Back,
                                    {" "}
                                    {user?.name || "User"} 👋
                                </h2>

                                <p
                                    className="mb-0"
                                    style={{
                                        fontSize: "18px"
                                    }}
                                >
                                    {user?.email}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Quick Actions */}

                <h3
                    className="text-white mb-4"
                >
                    Quick Actions
                </h3>

                <div className="row g-4">

                    {/* Restaurants */}

                    <div className="col-md-4">

                        <div
                            className="card shadow-lg border-0 h-100"
                            style={{
                                borderRadius: "20px"
                            }}
                        >

                            <div
                                className="card-body text-center p-4"
                            >

                                <FaUtensils
                                    size={50}
                                    className="mb-3 text-primary"
                                />

                                <h4>
                                    Restaurants
                                </h4>

                                <p>
                                    Browse all available restaurants
                                </p>

                                <Link
                                    to="/restaurants"
                                    className="btn btn-primary w-100"
                                >
                                    View Restaurants
                                </Link>

                            </div>

                        </div>

                    </div>

                    {/* Book Table */}

                    <div className="col-md-4">

                        <div
                            className="card shadow-lg border-0 h-100"
                            style={{
                                borderRadius: "20px"
                            }}
                        >

                            <div
                                className="card-body text-center p-4"
                            >

                                <FaCalendarCheck
                                    size={50}
                                    className="mb-3 text-success"
                                />

                                <h4>
                                    Book Table
                                </h4>

                                <p>
                                    Select a restaurant and reserve a table
                                </p>

                                <Link
                                    to="/restaurants"
                                    className="btn btn-success w-100"
                                >
                                    Choose Restaurant
                                </Link>

                            </div>

                        </div>

                    </div>

                    {/* Reservations */}

                    <div className="col-md-4">

                        <div
                            className="card shadow-lg border-0 h-100"
                            style={{
                                borderRadius: "20px"
                            }}
                        >

                            <div
                                className="card-body text-center p-4"
                            >

                                <FaClipboardList
                                    size={50}
                                    className="mb-3 text-info"
                                />

                                <h4>
                                    My Reservations
                                </h4>

                                <p>
                                    View and manage your reservations
                                </p>

                                <Link
                                    to="/my-reservations"
                                    className="btn btn-info w-100"
                                >
                                    View Reservations
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Dashboard;