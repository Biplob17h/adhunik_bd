/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <section className="h-wrapper bg-black">
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <Link to="/">logo</Link>
        {/* menu */}

        <div
          // ref={menuRef}
          className="flexCenter h-menu"
          style={getMenuStyles(menuOpened)}
        >
          <NavLink to="/services">Services</NavLink>
          <a href="mailto:zainkeepscode@gmail.com">Contact</a>

          {/* add property */}
          <div>Add Property</div>
          {/* login button */}

          <button className="button">Login</button>
        </div>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
