import React from "react";
import logo from "./../logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="My WG Logo" className="logo animation-cycle" />
    </header>
  );
};

export default Header;
