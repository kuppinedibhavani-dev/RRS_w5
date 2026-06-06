import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import api from "../services/api";

function Register() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] =
        useState(false);

    const [name, setName] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post(
                "/auth/register",
                {
                    name,
                    email,
                    password
                }
            );

            alert(
                "Registration Successful"
            );

            navigate("/login");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Registration Failed"
            );
        }
    };

    return (

        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh",
                background:
                "linear-gradient(135deg,#ff6a00,#ee0979)"
            }}
        >

            <div
                className="shadow p-5"
                style={{
                    width: "450px",
                    background:
                    "rgba(255,255,255,0.15)",
                    backdropFilter:
                    "blur(12px)",
                    borderRadius: "20px",
                    color: "white"
                }}
            >

                <h2
                    className="text-center mb-4"
                >
                    Create Account
                </h2>

                <form
                    onSubmit={handleSubmit}
                >

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Full Name"
                        onChange={(e)=>
                            setName(
                                e.target.value
                            )
                        }
                    />

                    <input
                        type="email"
                        className="form-control mb-3"
                        placeholder="Email"
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
                        className=
                        "btn btn-light w-100"
                    >
                        Register
                    </button>

                </form>

                <p
                    className="text-center mt-3"
                >

                    Already have an account?

                    <Link
                        to="/login"
                        className="ms-2 text-warning"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Register;