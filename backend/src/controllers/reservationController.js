const Reservation =
require("../models/Reservation");

const getReservationsByUser =
async (req, res) => {

    try {

        const reservations =
            await Reservation.find({
                userId:
                req.params.userId
            });

        res.status(200).json(
            reservations
        );

    } catch (error) {

        res.status(500).json({
            message:
            error.message
        });
    }
};
module.exports = {
    createReservation,
    getReservations,
    getReservationsByUser
};