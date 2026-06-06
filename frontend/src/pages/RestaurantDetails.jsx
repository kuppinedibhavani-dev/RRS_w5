import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../services/api";
import MenuCard from "../components/MenuCard";

function RestaurantDetails() {

    const { id } = useParams();

    const [menus, setMenus] = useState([]);

    useEffect(() => {

        const fetchMenus = async () => {

            try {

                const response =
                    await api.get(
                        `/menus/restaurant/${id}`
                    );

                setMenus(response.data);

            } catch (error) {

                console.log(error);
            }
        };

        fetchMenus();

    }, [id]);

    return (

        <div className="container mt-4">

            <h2>Restaurant Menu</h2>

            <div className="row">

                {menus.map((menu) => (

                    <div
                        className="col-md-4"
                        key={menu._id}
                    >

                        <MenuCard
                            menu={menu}
                        />

                    </div>

                ))}

            </div>

        </div>
    );
}

export default RestaurantDetails;