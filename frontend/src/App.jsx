import "./App.css";
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

const App = () => {
  const { currentUser, loading } = useSelector((state) => state.auth);

  const Private = ({ children }) => {
    return !loading && currentUser ? children : <Navigate to="/login" />;
  };

  const Layout = () => {
    return (
      <>
        <ToastContainer />
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
