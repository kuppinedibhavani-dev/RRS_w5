const Restaurant = require("../models/Restaurants");

// GET ALL
const getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();

        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// GET BY ID
const getRestaurantById = async (req, res) => {
    try {
        const restaurant =
            await Restaurant.findById(req.params.id);

        if (!restaurant) {
            return res.status(404).json({
                message: "Restaurant not found"
            });
        }

        res.status(200).json(restaurant);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// CREATE
const createRestaurant = async (req, res) => {
    try {
        const restaurant =
            new Restaurant(req.body);

        const savedRestaurant =
            await restaurant.save();

        res.status(201).json(savedRestaurant);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// UPDATE
const updateRestaurant = async (req, res) => {
    try {
        const updatedRestaurant =
            await Restaurant.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

        res.status(200).json(updatedRestaurant);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// DELETE
const deleteRestaurant = async (req, res) => {
    try {

        await Restaurant.findByIdAndDelete(
            req.params.id
        );

        res.status(200).json({
            message:
            "Restaurant deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getRestaurants,
    getRestaurantById,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
};