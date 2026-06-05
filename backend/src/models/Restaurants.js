const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name: String,
    location: String,
    phone: String,
    description: String,
    image: String
}, { timestamps: true });

module.exports = mongoose.model(
    "Restaurant",
    restaurantSchema
);