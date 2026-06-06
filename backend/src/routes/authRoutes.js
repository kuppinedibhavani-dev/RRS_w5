const express = require("express");

const router = express.Router();

const {

    registerUser,

    loginUser,

    registerStaff,

    loginStaff

} = require("../controllers/authController");
const protect =
require("../middleware/authMiddleware");

const {
    getProfile
} = require("../controllers/profileController");


// USER ROUTES

router.post(
    "/register",
    registerUser
);

router.post(
    "/login",
    loginUser
);


// STAFF ROUTES

router.post(
    "/staff-register",
    registerStaff
);

router.post(
    "/staff-login",
    loginStaff
);

router.get(
    "/profile",
    protect,
    getProfile
);


module.exports = router;