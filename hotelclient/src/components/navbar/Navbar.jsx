import "./navbar.css";
import logo from "../../images/Logomate.png";
import { Link } from "react-router-dom";
import userImage from "../../images/tempa.webp"
import { useState } from "react";
function Navbar() {
  const [user, setUser] = useState(false)
  const PF = "http://localhost:8800/images/"

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <ul className="navLink">
          <li>
            <Link to="/" className="linkNavBar">Home</Link>
          </li>
          <li>
            <Link to="/rooms" className="linkNavBar">Rooms</Link>
          </li>
          <li>
            <Link to="/" className="linkNavBar">About</Link>
          </li>
          <li>
            <Link to="/" className="linkNavBar">Contact</Link>
          </li>
        </ul>
        {user ? (
          <Link to="/profilesetting">
            <img
              src={user.img ? PF + user.img : userImage}
              alt=""
              className="navBarImgUser"
            />
          </Link>
        ) : (
          <div className="navItems">
            <Link className="link" to="/register">
              <button className="navButton">Register</button>
            </Link>
            <Link className="link" to="/login">
              <button className="navButton">Login</button>
            </Link>

          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
