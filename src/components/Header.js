import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");

    handleLoginClick = () => {
        loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
    }

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo" />
                <h2>Swiggato</h2>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={handleLoginClick}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;