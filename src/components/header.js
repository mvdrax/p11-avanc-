

import React from "react";
import Logo from "../assets/argentBankLogo.webp";
import { Link } from "react-router-dom";



const Header = () => {
    return (
        <nav className="main-nav">
      <div className="main-nav-logo">
         <Link to={"/index.html"}>
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
        </Link>
      </div>
      <div>
      <Link to={"/signin"}>
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
    );
};


export default Header;