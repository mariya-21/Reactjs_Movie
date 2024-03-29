import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";
// log passing
const Header = () => {
  return (
    <div className="header">
      <Link>
        <div className="logo">MOVIE APP</div>
      </Link>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
      </div>
  );
};
export default Header;
