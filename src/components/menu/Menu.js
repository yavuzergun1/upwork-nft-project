import React, { useState } from "react";
import "./Menu.scss";
function Menu({ showMenu, setShowMenu }) {
  return (
    <div className={showMenu ? "menu-container" : "menu-none"}>
      <div className="menu-buttons">
        <img src={require(`../../assets/png/mute bear.png`)} className="menu-mute" />
        <img
          src={require(`../../assets/png/x mark bear 1.png`)}
          className="menu-close"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
    </div>
  );
}

export default Menu;
