import React, { useState } from "react";
import "./Menu.scss";
function Menu({ showMenu, setShowMenu }) {
    return (
      <React.Fragment>
        <div className={showMenu ? "menu-container" : "menu-none"}>
          <div className="menu-buttons">
            <img
              src={require(`../../assets/png/mute bear.png`)}
              className="menu-mute"
            />
            <img
              src={require(`../../assets/png/x mark bear 1.png`)}
              className="menu-close"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
          <div className="menu-links">
            <p>HOME</p>
            <p>ABOUT US</p>
            <p>ROADMAP</p>
            <p>TEAM</p>
            <p>BLOG</p>
            <p>MERCH</p>
            <p>SAVE THE WORLD</p>
          </div>
          <div className="menu-logo logo-container">
            <img src={require(`../../assets/png/Group 1000002657.png`)} />
            <img src={require(`../../assets/png/Group 1000002658.png`)} />
            <img src={require(`../../assets/png/Group 1000002656.png`)} />
            <img src={require(`../../assets/png/Group 1000002655.png`)} />
            <img src={require(`../../assets/png/Group 1000002654.png`)} />
          </div>
        </div>
      </React.Fragment>
    );
}

export default Menu;
