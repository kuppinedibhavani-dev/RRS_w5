import { useEffect, useState } from "react";
import api from "../services/api";

function MyReservations() {

    const [reservations, setReservations] = useState([]);

    useEffect(() => {

        const fetchReservations = async () => {

            try {

                const response =
                    await api.get("/reservations");

                setReservations(response.data);

            } catch (error) {

                console.log(error);
            }
        };

        fetchReservations();

    }, []);

    return (

        <div
            style={{
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg,#667eea,#764ba2)",
                padding: "40px"
            }}
        >

            <div className="container">

                <h1
                    className="text-center text-white fw-bold mb-5"
                >
                    📅 My Reservations
                </h1>

                {
                    reservations.length === 0
                    ?
                    (
                        <div
                            className="text-center text-white"
                        >

                            <h3>
                                No Reservations Found
                            </h3>

                        </div>
                    )
                    :
                    (
                        <div className="row">

                            {
                                reservations.map(
                                    (reservation) => (

                                    <div
                                        className="col-md-6 col-lg-4 mb-4"
                                        key={reservation._id}
                                    >

                                        <div
                                            className="card shadow-lg h-100"
                                            style={{
                                                borderRadius: "20px",
                                                border: "none"
                                            }}
                                        >

                                            <div
                                                className="card-body"
                                            >

                                                <h4
                                                    className="fw-bold text-primary"
                                                >
                                                    🍽️ Reservation
                                                </h4>

                                                <hr />

                                                <p>
                                                    <strong>
                                                        Date:
                                                    </strong>
                                                    {" "}
                                                    {reservation.date}
                                                </p>

                                                <p>
                                                    <strong>
                                                        Time:
                                                    </strong>
                                                    {" "}
                                                    {reservation.time}
                                                </p>

                                                <p>
                                                    <strong>
                                                        Guests:
                                                    </strong>
                                                    {" "}
                                                    {reservation.guests}
                                                </p>

                                                <p>
                                                    <strong>
                                                        Reservation ID:
                                                    </strong>
                                                    <br />
                                                    {reservation._id}
                                                </p>

                                                <span
                                                    className="badge bg-success"
                                                >
                                                    Confirmed
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                ))
                            }

                        </div>
                    )
                }

            </div>

        </div>
    );
}

export default MyReservations;