function MenuCard({ menu }) {

    return (

        <div className="card mb-3">

            <img
                src={menu.image}
                className="card-img-top"
                alt={menu.itemName}
            />

            <div className="card-body">

                <h5>
                    {menu.itemName}
                </h5>

                <p>
                    Category:
                    {menu.category}
                </p>

                <p>
                    {menu.description}
                </p>

                <h6>
                    ₹ {menu.price}
                </h6>

                <span
                    className={
                        menu.available
                        ?
                        "badge bg-success"
                        :
                        "badge bg-danger"
                    }
                >

                    {
                        menu.available
                        ?
                        "Available"
                        :
                        "Not Available"
                    }

                </span>

            </div>

        </div>
    );
}

export default MenuCard;