import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import api from "../services/api";

function StaffLogin() {

    const navigate =
        useNavigate();

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

            await api.post(
                "/auth/staff-login",
                {
                    email,
                    password
                }
            );

            navigate(
                "/staff-dashboard"
            );

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
                "linear-gradient(135deg,#141e30,#243b55)"
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
                    Staff Login
                </h1>

                <p
                    className="text-center mb-4"
                >
                    Manage Restaurant Operations
                </p>

                <form
                    onSubmit={handleSubmit}
                >

                    <input
                        type="email"
                        className="form-control mb-3"
                        placeholder="Staff Email"
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
                        className="btn btn-warning w-100 fw-bold"
                    >
                        Staff Login
                    </button>

                </form>

            </div>

        </div>
    );
}

export default StaffLogin;