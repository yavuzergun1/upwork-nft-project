import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="nav-container">
      <img
        src={require(`../../assets/png/BEAR-HOME-UI_UX 1.png`)}
        className="nav-home"
      />
      <img
        src={require(`../../assets/png/BEAR-LOGO.png`)}
        className="nav-bear-logo"
      />
      <img
        src={require(`../../assets/png/MENU ICON.png`)}
        className="nav-menu"
      />
    </div>
  );
}

export default Navbar;
