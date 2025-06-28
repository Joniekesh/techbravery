import "./App.css";
import { lazy, Suspense, useEffect, useState } from "react";
import { Toaster } from "sonner";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
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
// import Home from "./pages/home/Home";
import Quote from "./pages/quote/Quote";
// import AboutUs from "./pages/aboutUs/AboutUs";
import SuperAdmin from "./pages/superAdmin/SuperAdmin";
import Admin from "./pages/admin/Admin";
import User from "./pages/user/User";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./pages/profile/Profile";
import Orders from "./pages/orders/Orders";
import ChatButton from "./components/chatButton/ChatButton";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import Register from "./pages/register/Register";
import { getChats } from "./redux/actions/ChatActions";

import { io } from "socket.io-client";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import { makeRequest } from "./utils/makeRequest";
import { getCurrentChat } from "./redux/reducers/ChatReducer";
import Technologies from "./pages/technologies/Technologies";
import OurTeam from "./pages/ourteam/OurTeam";
import Projects from "./pages/projects/Projects";
import Project from "./pages/project/Project";
import Product from "./pages/product/Product";
import useSystemThemeEffect from "./utils/useSystemThemeEffect";
import NotFound from "./pages/notFound/NotFound";

const Home = lazy(() => import("./pages/home/Home"));
const AboutUs = lazy(() => import("./pages/aboutUs/AboutUs"));

const App = () => {
  useSystemThemeEffect();
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();

  const { currentUser, loading } = useSelector((state) => state.auth);

  const Private = ({ children }) => {
    return !loading && currentUser ? children : <Navigate to="/auth" />;
  };

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <Register />,
    },
    {
      path: "*",
      element: <NotFound />,
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
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          ),
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
          path: "/store",
          element: <Store />,
        },
        {
          path: "/quote",
          element: <Quote />,
        },
        {
          path: "/aboutus",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <AboutUs />
            </Suspense>
          ),
        },
        {
          path: "/technology",
          element: <Technologies />,
        },
        {
          path: "/team",
          element: <OurTeam />,
        },
        {
          path: "/project",
          element: <Projects />,
        },
        {
          path: "/project/:id",
          element: <Project />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/superAdmin",
          element: (
            <Private>
              <SuperAdmin />,
            </Private>
          ),
        },
        {
          path: "/admin",
          element: (
            <Private>
              <Admin />,
            </Private>
          ),
        },
        {
          path: "/user",
          element: (
            <Private>
              <User />,
            </Private>
          ),
        },
        {
          path: "/profile",
          element: (
            <Private>
              <Profile />,
            </Private>
          ),
        },
        {
          path: "/orders",
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
      <ToastContainer />
      <Toaster position="top-right" richColors />
      <ChatButton />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
