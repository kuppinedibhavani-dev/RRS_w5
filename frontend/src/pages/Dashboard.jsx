import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function Dashboard() {

    const { user } = useContext(AuthContext);

    return (

        <div className="container mt-4">

            <div className="card shadow p-4">

                <h2>
                    User Dashboard
                </h2>

                <hr />

                <h4>
                    Welcome,
                    {" "}
                    {user?.name || "User"}
                </h4>

                <p>
                    <strong>Email:</strong>
                    {" "}
                    {user?.email}
                </p>

            </div>

            <div className="row mt-4">

                <div className="col-md-4">

                    <div className="card p-3 text-center">

                        <h5>
                            Restaurants
                        </h5>

                        <p>
                            Browse available restaurants
                        </p>

                        <Link
                            to="/"
                            className="btn btn-primary"
                        >
                            View Restaurants
                        </Link>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card p-3 text-center">

                        <h5>
                            Book Table
                        </h5>

                        <p>
                            Reserve a table instantly
                        </p>

                        <Link
                            to="/book-table"
                            className="btn btn-success"
                        >
                            Book Now
                        </Link>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card p-3 text-center">

                        <h5>
                            My Reservations
                        </h5>

                        <p>
                            View your bookings
                        </p>

                        <Link
                            to="/my-reservations"
                            className="btn btn-info"
                        >
                            View Reservations
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Dashboard;