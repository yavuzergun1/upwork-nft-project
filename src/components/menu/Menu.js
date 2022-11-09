import React, { useState } from "react";
import "./Menu.scss";
function Menu({ showMenu, setShowMenu }) {
  return (
    <div className={showMenu ? "menu-container" : "none"}>
      <img
        src={require(`../../assets/png/x mark bear 1.png`)}
        className="nav-menu"
        onClick={() => setShowMenu(!showMenu)}
      />
    </div>
  );
}

export default Menu;
