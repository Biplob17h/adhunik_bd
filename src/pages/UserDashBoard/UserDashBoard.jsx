import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../../components/Navbar/Navbar";

const UserDashBoard = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("AdhunikToken");
    toast.success("Logout successful");
    navigate("/login");
    window.location.reload();
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-52 p-4">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard/user/profile">My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/user/order">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/user/update">Update My Profile</Link>
            </li>
            <li
              onClick={() => {
                handleLogOut();
              }}
            >
              <Link>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;
