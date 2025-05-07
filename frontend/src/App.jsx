import "./App.css";
import { useEffect, useState } from "react";
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
import Works from "./pages/works/Works";
import Home from "./pages/home/Home";
import Quote from "./pages/quote/Quote";
import AboutUs from "./pages/aboutUs/AboutUs";
import Login from "./pages/login/Login";
import SuperAdmin from "./pages/superAdmin/SuperAdmin";
import Admin from "./pages/admin/Admin";
import User from "./pages/user/User";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./pages/profile/Profile";
import Orders from "./pages/orders/Orders";
import ChatButton from "./components/chatButton/ChatButton";
import Chat from "./components/chat/Chat";
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

const App = () => {
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();

  const { currentUser, loading } = useSelector((state) => state.auth);
  const { openChat, chats } = useSelector((state) => state.chat);

  useEffect(() => {
    dispatch(getChats());
    currentUser?.role !== "SuperAdmin" && dispatch(getCurrentChat(chats[0]));
  }, [dispatch, currentUser]);

  const Private = ({ children }) => {
    return !loading && currentUser ? children : <Navigate to="/login" />;
  };

  const Layout = () => {
    return (
      <>
        <ToastContainer />
        <Toaster position="top-right" richColors />
        {openChat && <Chat users={users} />}
        <ChatButton />
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
