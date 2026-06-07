import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Home() {

    const [restaurants, setRestaurants] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const loadRestaurants = async () => {

            try {

                const response =
                    await api.get("/restaurants");

                setRestaurants(
                    response.data
                );

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);
            }
        };

        loadRestaurants();

    }, []);

    if (loading) {

        return (

            <div className="container mt-5 text-center">

                <h3>
                    Loading Restaurants...
                </h3>

            </div>
        );
    }

    return (

        <div
            style={{
                minHeight: "100vh",
                background:
                "linear-gradient(135deg,#0f172a,#1e293b,#2563eb)",
                padding: "40px"
            }}
        >

            <div className="container">

                <h1
                    className="text-center text-white mb-5"
                >
                    🍽️ Restaurants
                </h1>

                <div className="row">

                    {
                        restaurants.length > 0 ?

                        restaurants.map(
                            (restaurant) => (

                            <div
                                className="col-md-4 mb-4"
                                key={restaurant._id}
                            >

                                <div
                                    className="card shadow-lg border-0 h-100"
                                    style={{
                                        borderRadius:
                                        "20px",
                                        overflow:
                                        "hidden"
                                    }}
                                >

                                    <img
                                        src={
                                            restaurant.image ||
                                            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                                        }
                                        alt={
                                            restaurant.name
                                        }
                                        style={{
                                            height:
                                            "220px",
                                            objectFit:
                                            "cover"
                                        }}
                                    />

                                    <div
                                        className="card-body"
                                    >

                                        <h4>
                                            {
                                                restaurant.name
                                            }
                                        </h4>

                                        <p>
                                            📍 {
                                                restaurant.location
                                            }
                                        </p>

                                        <p>
                                            {
                                                restaurant.description
                                            }
                                        </p>

                                        <div
                                            className="d-grid gap-2"
                                        >

                                            <Link
                                                to={`/book-table/${restaurant._id}`}
                                                className="btn btn-success"
                                            >
                                                Book Table
                                            </Link>

                                            <Link
                                                to={`/restaurant/${restaurant._id}`}
                                                className="btn btn-primary"
                                            >
                                                View Menu
                                            </Link>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        ))

                        :

                        <div
                            className="text-center text-white"
                        >

                            <h3>
                                No Restaurants Found
                            </h3>

                        </div>
                    }

                </div>

            </div>

        </div>
    );
}

export default Home;