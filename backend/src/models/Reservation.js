const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true
    },

    date: {
        type: String,
        required: true
    },

    time: {
        type: String,
        required: true
    },

    guests: {
        type: Number,
        required: true
    }

}, { timestamps: true });

module.exports =
mongoose.model(
    "Reservation",
    reservationSchema
);