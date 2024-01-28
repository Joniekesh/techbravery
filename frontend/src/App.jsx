import "./App.css";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import Store from "./pages/store/Store";
import Works from "./pages/works/Works";
import Home from "./pages/home/Home";
import Quote from "./pages/quote/Quote";
import AboutUs from "./pages/aboutUs/AboutUs";
import Login from "./pages/login/Login";
import SuperAdmin from "./pages/superAdmin/SuperAdmin";
import Admin from "./pages/admin/Admin";
import User from "./pages/user/User";
import { useSelector } from "react-redux";
import Profile from "./pages/profile/Profile";
import Orders from "./pages/orders/Orders";
import ChatButton from "./components/chatButton/ChatButton";
import Chat from "./components/chat/Chat";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import Register from "./pages/register/Register";
import ResetPassword from "./pages/resetPassword/ResetPassword";

const App = () => {
  const [openChat, setOpenChat] = useState(false);
  const [active, setActive] = useState(false);

  const { currentUser, loading } = useSelector((state) => state.auth);

  const Private = ({ children }) => {
    return !loading && currentUser ? children : <Navigate to="/login" />;
  };

  const Layout = () => {
    return (
      <>
        <ToastContainer />
        {openChat && (
          <Chat
            setOpenChat={setOpenChat}
            active={active}
            setActive={setActive}
          />
        )}
        <ChatButton setOpenChat={setOpenChat} setActive={setActive} />
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassword />,
    },
    {
      path: "/resetpassword/:resetToken",
      element: <ResetPassword />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/works",
          element: <Works />,
        },
        {
          path: "/store",
          element: <Store />,
        },
        {
          path: "/quote",
          element: <Quote />,
        },
        {
          path: "/aboutus",
          element: <AboutUs />,
        },
        {
          path: "/SuperAdmin",
          element: (
            <Private>
              <SuperAdmin />,
            </Private>
          ),
        },
        {
          path: "/Admin",
          element: (
            <Private>
              <Admin />,
            </Private>
          ),
        },
        {
          path: "/User",
          element: (
            <Private>
              <User />,
            </Private>
          ),
        },
        {
          path: "/Profile",
          element: (
            <Private>
              <Profile />,
            </Private>
          ),
        },
        {
          path: "/Orders",
          element: (
            <Private>
              <Orders />,
            </Private>
          ),
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
