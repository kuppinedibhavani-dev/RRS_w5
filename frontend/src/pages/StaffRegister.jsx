import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import api from "../services/api";

function StaffRegister() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] =
        useState(false);

    const [restaurants, setRestaurants] =
        useState([]);

    const [formData, setFormData] =
        useState({
            name: "",
            email: "",
            password: "",
            restaurantId: ""
        });

    useEffect(() => {

        const fetchRestaurants = async () => {

            try {

                const response =
                    await api.get(
                        "/restaurants"
                    );

                setRestaurants(
                    response.data
                );

            } catch (error) {

                console.log(error);
            }
        };

        fetchRestaurants();

    }, []);

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]:
            e.target.value

        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post(
                "/auth/staff-register",
                formData
            );

            alert(
                "Staff Registered Successfully"
            );

            navigate(
                "/staff-login"
            );

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
                "linear-gradient(135deg,#141e30,#243b55)"
            }}
        >

            <div
                className="shadow-lg p-5"
                style={{
                    width: "500px",
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
                    Staff Registration
                </h1>

                <p
                    className="text-center mb-4"
                >
                    Create Restaurant Staff Account
                </p>

                <form
                    onSubmit={handleSubmit}
                >

                    <input
                        type="text"
                        name="name"
                        className="form-control mb-3"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        className="form-control mb-3"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <select
                        name="restaurantId"
                        className="form-control mb-3"
                        value={formData.restaurantId}
                        onChange={handleChange}
                    >

                        <option value="">
                            Select Restaurant
                        </option>

                        {
                            restaurants.map(
                                (restaurant) => (

                                <option
                                    key={restaurant._id}
                                    value={restaurant._id}
                                >
                                    {restaurant.name}
                                </option>

                            ))
                        }

                    </select>

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
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />

                        <button
                            type="button"
                            className="btn btn-light"
                            onClick={() =>
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
                        Create Staff Account
                    </button>

                </form>

                <div
                    className="text-center mt-4"
                >

                    Already Registered?

                    <Link
                        to="/staff-login"
                        className="ms-2 text-warning fw-bold text-decoration-none"
                    >
                        Staff Login
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default StaffRegister;