import { useState } from "react";
import { useParams } from "react-router-dom";

import api from "../services/api";

function Reservation() {

    const { restaurantId } =
        useParams();

    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    const [formData,
        setFormData] =
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

                    userId:
                    user.id,

                    restaurantId,

                    ...formData

                }
            );

            alert(
                "Reservation Created Successfully"
            );

        } catch (error) {

            alert(
                error.response?.data?.message
            );
        }
    };

    return (

        <div
            className=
            "container mt-5"
        >

            <h2>
                Book Table
            </h2>

            <form
                onSubmit={handleSubmit}
            >

                <input
                    type="date"
                    name="date"
                    className=
                    "form-control mb-3"
                    onChange={
                        handleChange
                    }
                />

                <input
                    type="time"
                    name="time"
                    className=
                    "form-control mb-3"
                    onChange={
                        handleChange
                    }
                />

                <input
                    type="number"
                    name="guests"
                    placeholder="Guests"
                    className=
                    "form-control mb-3"
                    onChange={
                        handleChange
                    }
                />

                <button
                    className=
                    "btn btn-success"
                >
                    Reserve Table
                </button>

            </form>

        </div>
    );
}

export default Reservation;