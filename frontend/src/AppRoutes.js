import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import FoodPage from "./Pages/Food/FoodPage";
import CartPage from "./Pages/Cart/CartPage";
import LoginPage from "./Pages/Login/LoginPage";
import RegisterPage from "./Pages/Register/RegisterPage";
import AuthRoute from './components/AuthRoute/AuthRoute';
import CheckoutPage from './Pages/Checkout/CheckoutPage';
import PaymentPage from './Pages/Payment/PaymentPage';
import OrderTrackPage from "./Pages/OrderTrack/OrderTrackPage";
import ProfilePage from "./Pages/Profile/ProfilePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search/:searchTerm" element={<HomePage />} />
      <Route path="/tag/:tag" element={<HomePage />} />
      <Route path="/food/:id" element={<FoodPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/checkout" element={ <AuthRoute><CheckoutPage/></AuthRoute>}/>
      <Route path="/payment" element={ <AuthRoute><PaymentPage /></AuthRoute>}/>
      <Route path="/track/:orderId" element={ <AuthRoute><OrderTrackPage/></AuthRoute>}/>
      <Route path="/profile" element={ <AuthRoute><ProfilePage/></AuthRoute>}/>
    </Routes>
  );
}
