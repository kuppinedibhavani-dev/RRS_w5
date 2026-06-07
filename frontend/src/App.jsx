import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StaffLogin from "./pages/StaffLogin";
import Dashboard from "./pages/Dashboard";
import StaffDashboard from "./pages/StaffDashboard";

import ProtectedRoute from "./components/ProtectedRoute";
import RestaurantDetails
from "./pages/RestaurantDetails";

import Reservation
from "./pages/Reservation";

import MyReservations
from "./pages/MyReservations";

import LandingPage from "./pages/LandingPage";
import StaffRegister
from "./pages/StaffRegister";

function App() {

    return (

        <BrowserRouter>

            <Navbar />

            <Routes>
                <Route
    path="/restaurants"
    element={<Home />}
/>

                {/* Landing Page */}
                <Route
    path="/"
    element={<LandingPage />}
/>

                {/* User Authentication */}
                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                {/* Staff Authentication */}
                <Route
                    path="/staff-login"
                    element={<StaffLogin />}
                />

                {/* User Dashboard */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                {/* Staff Dashboard */}
                <Route
                    path="/staff-dashboard"
                    element={
                        <ProtectedRoute>
                            <StaffDashboard />
                        </ProtectedRoute>
                    }
                />

                    {/* Staff Registration */}
                    <Route
    path="/staff-register"
    element={<StaffRegister />}
/>

                    {/* Restaurant Details */}
                <Route
    path="/restaurant/:id"
    element={<RestaurantDetails />}
/>
     {               /* Reservation Routes */}
    <Route
    path="/book-table"
    element={<Reservation />}
/>
{               /* My Reservations */}
<Route
    path="/my-reservations"
    element={<MyReservations />}
/>

            </Routes>

        </BrowserRouter>
    );
}

export default App;