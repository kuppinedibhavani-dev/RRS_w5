const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({

    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true
    },

    itemName: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    description: String,

    price: {
        type: Number,
        required: true
    },

    image: String,

    available: {
        type: Boolean,
        default: true
    }

}, { timestamps: true });

module.exports = mongoose.model("Menu", menuSchema);