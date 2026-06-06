import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import api from "../services/api";
import { AuthContext } from "../context/AuthContext";

function Login() {

    const navigate = useNavigate();

    const { login } =
        useContext(AuthContext);

    const [showPassword,
        setShowPassword] =
        useState(false);

    const [email,
        setEmail] =
        useState("");

    const [password,
        setPassword] =
        useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response =
                await api.post(
                    "/auth/login",
                    {
                        email,
                        password
                    }
                );

            login(response.data);

            navigate("/dashboard");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Login Failed"
            );
        }
    };

    return (

        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh",
                background:
                "linear-gradient(135deg,#00c6ff,#0072ff)"
            }}
        >

            <div
                className="shadow-lg p-5"
                style={{
                    width: "450px",
                    background:
                    "rgba(255,255,255,0.15)",
                    backdropFilter:
                    "blur(15px)",
                    borderRadius: "25px",
                    color: "white",
                    border:
                    "1px solid rgba(255,255,255,0.2)"
                }}
            >

                <h1
                    className="text-center fw-bold mb-2"
                >
                    Welcome Back
                </h1>

                <p
                    className="text-center mb-4"
                >
                    Login to continue
                </p>

                <form
                    onSubmit={handleSubmit}
                >

                    <input
                        type="email"
                        className="form-control mb-3"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e)=>
                            setEmail(
                                e.target.value
                            )
                        }
                    />

                    <div
                        className="input-group mb-3"
                    >

                        <input
                            type={
                                showPassword
                                ?
                                "text"
                                :
                                "password"
                            }
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e)=>
                                setPassword(
                                    e.target.value
                                )
                            }
                        />

                        <button
                            type="button"
                            className="btn btn-light"
                            onClick={()=>
                                setShowPassword(
                                    !showPassword
                                )
                            }
                        >

                            {
                                showPassword
                                ?
                                <FaEyeSlash />
                                :
                                <FaEye />
                            }

                        </button>

                    </div>

                    <button
                        type="submit"
                        className="btn btn-light w-100 fw-bold"
                    >
                        Login
                    </button>

                </form>

                <div
                    className="text-center mt-4"
                >

                    Don't have an account?

                    <Link
                        to="/register"
                        className="ms-2 text-warning fw-bold text-decoration-none"
                    >
                        Register
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Login;