const express = require("express");
const router = express.Router();

const Menu = require("../models/Menu");

// GET MENU ITEMS FOR A RESTAURANT
router.get("/", async (req, res) => {
    try {
        const menus = await Menu.find()
            .populate("restaurantId");

        res.json(menus);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// CREATE MENU ITEM
router.post("/", async (req, res) => {
    try {

        const menu =
            new Menu(req.body);

        const savedMenu =
            await menu.save();

        res.status(201).json(savedMenu);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// GET MENU ITEM BY ID
router.get("/:id", async (req, res) => {
    try {

        const menu =
            await Menu.findById(req.params.id);

        res.json(menu);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

//get menu items by restaurant id
router.get(
    "/restaurant/:restaurantId",
    async (req, res) => {

        try {

            const menus =
                await Menu.find({
                    restaurantId:
                    req.params.restaurantId
                });

            res.json(menus);

        } catch (error) {

            res.status(500).json({
                message: error.message
            });
        }
});

// UPDATE MENU ITEM
router.put("/:id", async (req, res) => {

    try {

        const updatedMenu =
            await Menu.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

        res.json(updatedMenu);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

// DELETE MENU ITEM
router.delete("/:id", async (req, res) => {

    try {

        await Menu.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message:
            "Menu deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;