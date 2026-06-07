import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaUsers } from "react-icons/fa";

import api from "../services/api";

function Reservation() {

    const { restaurantId } = useParams();

    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    const [formData, setFormData] =
        useState({
            date: "",
            time: "",
            guests: ""
        });

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
                "/reservations",
                {
                    userId: user.id,
                    restaurantId,
                    ...formData
                }
            );

            alert(
                "🎉 Table Reserved Successfully!"
            );

            setFormData({
                date: "",
                time: "",
                guests: ""
            });

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Reservation Failed"
            );
        }
    };

    return (

        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh",
                background:
                "linear-gradient(135deg,#ff512f,#dd2476)"
            }}
        >

            <div
                className="shadow-lg p-5"
                style={{
                    width: "550px",
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
                    🍽️ Book Your Table
                </h1>

                <p
                    className="text-center mb-4"
                >
                    Reserve your perfect dining experience
                </p>

                <form
                    onSubmit={handleSubmit}
                >

                    <label className="mb-2">
                        <FaCalendarAlt />
                        {" "}
                        Select Date
                    </label>

                    <input
                        type="date"
                        name="date"
                        className="form-control mb-3"
                        value={formData.date}
                        onChange={handleChange}
                    />

                    <label className="mb-2">
                        <FaClock />
                        {" "}
                        Select Time
                    </label>

                    <input
                        type="time"
                        name="time"
                        className="form-control mb-3"
                        value={formData.time}
                        onChange={handleChange}
                    />

                    <label className="mb-2">
                        <FaUsers />
                        {" "}
                        Number of Guests
                    </label>

                    <input
                        type="number"
                        name="guests"
                        min="1"
                        max="20"
                        className="form-control mb-4"
                        placeholder="Enter guests"
                        value={formData.guests}
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        className="btn btn-light w-100 fw-bold"
                        style={{
                            padding: "12px"
                        }}
                    >
                        Reserve Table
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Reservation;