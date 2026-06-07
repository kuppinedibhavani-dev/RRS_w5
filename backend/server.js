const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./src/config/db");

const restaurantRoutes = require("./src/routes/RestaurantRoutes");
const menuRoutes = require("./src/routes/MenuRoutes");
const authRoutes = require("./src/routes/authRoutes");
const reservationRoutes = require("./src/routes/reservationRoutes");

connectDB();

const app = express();

// CORS
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://rrs-w5.vercel.app"
        ],
        credentials: true
    })
);

app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("Restaurant Reservation API Running");
});

// Routes
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/menus", menuRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/reservations", reservationRoutes);

// Start Server
app.listen(process.env.PORT, () => {
    console.log(
        `Server Running on port ${process.env.PORT}`
    );
});