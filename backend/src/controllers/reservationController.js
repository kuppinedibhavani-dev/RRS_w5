const Reservation =
require("../models/Reservation");

const createReservation =
async (req, res) => {

    try {

        const reservation =
            await Reservation.create(
                req.body
            );

        res.status(201).json(
            reservation
        );

    } catch (error) {

        res.status(500).json({
            message:
            error.message
        });
    }
};

const getReservations =
async (req, res) => {

    try {

        const reservations =
            await Reservation.find();

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

    getReservations

};