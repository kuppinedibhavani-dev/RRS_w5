function StaffDashboard() {

    return (

        <div className="container mt-5">

            <h2>
                Staff Dashboard
            </h2>

            <hr />

            <div
                className="card p-3"
            >

                <h5>
                    Menu Management
                </h5>

                <p>
                    Add / Edit / Delete Menus
                </p>

            </div>

            <div
                className="card p-3 mt-3"
            >

                <h5>
                    Reservation Management
                </h5>

                <p>
                    View customer bookings
                </p>

            </div>

        </div>
    );
}

export default StaffDashboard;