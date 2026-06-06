import { Link } from "react-router-dom";

function LandingPage() {

    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb)"
            }}
        >
            <div className="container">

                <div className="row align-items-center">

                    <div className="col-md-6">

                        <h1
                            className="display-3 fw-bold text-white"
                        >
                            Reserve Your Perfect Dining Experience
                        </h1>

                        <p
                            className="lead text-white mt-4"
                        >
                            Discover restaurants, explore menus,
                            and reserve tables in seconds.
                        </p>

                        <div className="mt-4">

                            <Link
                                to="/register"
                                className="btn btn-light btn-lg me-3"
                            >
                                Get Started
                            </Link>

                            <Link
    to="/staff-register"
    className="btn btn-outline-light btn-lg me-3"
>
    Staff Register
</Link>

                            <Link
                                to="/login"
                                className="btn btn-dark btn-lg"
                            >
                                Login
                            </Link>

                        </div>

                        <div className="mt-3">

                            <Link
                                to="/staff-login"
                                className="text-white text-decoration-none"
                            >
                                Staff Login →
                            </Link>

                        </div>

                    </div>

                    <div className="col-md-6 text-center">

                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                            alt="Restaurant"
                            className="img-fluid rounded shadow-lg"
                        />

                    </div>

                </div>

            </div>
        </div>
    );
}

export default LandingPage;