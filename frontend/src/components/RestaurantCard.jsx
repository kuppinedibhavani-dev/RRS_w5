import { Link } from "react-router-dom";

function RestaurantCard({ restaurant }) {

    return (

        <div className="card mb-3">

            <img
                src={restaurant.image}
                className="card-img-top"
                alt={restaurant.name}
            />

            <div className="card-body">

                <h5>
                    {restaurant.name}
                </h5>

                <p>
                    {restaurant.location}
                </p>

                <Link
                    to={`/restaurant/${restaurant._id}`}
                    className="btn btn-primary"
                >
                    View Menu
                </Link>

            </div>

        </div>
    );
}

export default RestaurantCard;