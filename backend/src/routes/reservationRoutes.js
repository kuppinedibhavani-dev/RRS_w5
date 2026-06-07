const express = require("express");

const router = express.Router();

const {
    createReservation,
    getReservations,
    getReservationsByUser
} = require("../controllers/reservationController");

// Create Reservation
router.post(
    "/",
    createReservation
);

// Get All Reservations
router.get(
    "/",
    getReservations
);

// Get Reservations By User
router.get(
    "/user/:userId",
    getReservationsByUser
);

module.exports = router;