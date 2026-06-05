const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB =
require("./src/config/db");

const restaurantRoutes =
require("./src/routes/RestaurantRoutes");

const errorHandler =
require("./src/middleware/errorMiddleware");

const menuRoutes =
require("./src/routes/MenuRoutes");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use(
    "/api/restaurants",
    restaurantRoutes
);

app.use(
    "/api/menus",
    menuRoutes
);

app.use(errorHandler);

app.listen(
    process.env.PORT,
    () => {
        console.log(
            `Server Running on port ${process.env.PORT}`
        );
    }
);