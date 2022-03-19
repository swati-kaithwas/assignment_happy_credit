import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="nav_bar">
        <div className="nav_logo">
          <h2>Klarna.</h2>
        </div>
        <div className={menu ? "mobile_nav_menu" : " nav_menu"}>
          <ul>
            <li>
              <a
                href="#"
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                How its Work
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                Pay in 4
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                The Shopping App
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                Help
              </a>
            </li>
          </ul>
        </div>
        <div className="nav_button">
          <div className="login">
            <button className="nav_btn1">Login </button>
            <button className="nav_btn2">Get the app</button>
          </div>

          <div className="hamburger">
            <a
              href="#"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
