import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../Home/Home";
import Overview from "../Overview/Overview";
import Profile from "../../components/Profile/Profile";
import Login from "../../components/Login/Login";
import SignUp from "../../components/Signup/Signup";
import UserDashBoard from "../UserDashBoard/UserDashBoard";
import DashboardProfilePage from "../UserDashBoard/DashboardProfilePage";
import DashboardOrderPage from "../UserDashBoard/DashboardOrderPage";
import UpdateUserProfile from "../UserDashBoard/UpdateUserProfile";
import Services from "../Services/Services";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service",
        element: <Overview></Overview>,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },

  {
    path: "/dashboard/user",
    element: <UserDashBoard></UserDashBoard>,
    children: [
      {
        path: "/dashboard/user/profile",
        element: <DashboardProfilePage></DashboardProfilePage>,
      },
      {
        path: "/dashboard/user/order",
        element: <DashboardOrderPage></DashboardOrderPage>,
      },
      {
        path: "/dashboard/user/update",
        element: <UpdateUserProfile></UpdateUserProfile>,
      },
    ],
  },
]);

export default routes;
