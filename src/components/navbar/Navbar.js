import React, { useState } from "react";
import Menu from "../menu/Menu";
import "./Navbar.scss";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
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
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      />
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
}

export default Navbar;
