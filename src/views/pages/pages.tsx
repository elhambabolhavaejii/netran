
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Register from "./register";
import Faq from "./faq";
import PaymentList from "./paymentList";
import Notification from "./notification";
import Profile from "./profile";
import Subscription from "./subscription";
import SubscriptionManagement from "./subscriptionManagement";
import PriceList from "./priceList";
import Orders from "./orders";
import { ToastContainer } from "react-toastify";
const Pages = () => {
  const isLogin = localStorage.getItem("token");
  const navigate = useNavigate();

  return (
   <>
    <Routes >
    <Route path="/" element={isLogin ? <Navigate to="/home" /> : <Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home />} />
          <Route path="price-management" element={<PriceList />}/>
          <Route path="orders" element={<Orders />}/>
          <Route path="/profile/:id" element={<Profile />}/>
          <Route path="subscription" element={<Subscription />} />
          <Route path="payments-list" element={<PaymentList />} />
          <Route path="subscription-management" element={<SubscriptionManagement />} />

          <Route path="notifications" element={<Notification />} />
          <Route path="faq" element={<Faq />} />

  </Routes>
          <ToastContainer />
   </>
  );
}

export default Pages;
