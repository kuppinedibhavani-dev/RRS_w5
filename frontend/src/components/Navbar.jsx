import { Link } from "react-router-dom";

function Navbar() {

    const token = localStorage.getItem("token");

    const logout = () => {
        localStorage.clear();
        window.location.href = "/login";
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Restaurant App
                </Link>

                <div>

                    <Link
                        className="btn btn-light me-2"
                        to="/"
                    >
                        Home
                    </Link>

                    <Link
                        className="btn btn-warning me-2"
                        to="/book-table"
                    >
                        Book Table
                    </Link>

                    <Link
                        className="btn btn-info me-2"
                        to="/my-reservations"
                    >
                        Reservations
                    </Link>

                    {
                        token ? (
                            <button
                                className="btn btn-danger"
                                onClick={logout}
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                className="btn btn-success"
                                to="/login"
                            >
                                Login
                            </Link>
                        )
                    }

                </div>

            </div>
        </nav>
    );
}

export default Navbar;