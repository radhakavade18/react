import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");

    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    handleLoginClick = () => {
        loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
    }

    // subscribing to the store by selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)

    return (
        <div className="flex justify-between shadow-md mb-2 px-3">
            <div className="pl-3">
                <img className="w-16" src={LOGO_URL} alt="logo" />
                <h2>Swiggato</h2>
            </div>
            <ul className="flex items-center w-3/6 justify-around">
                <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li> <Link to="/cart" className="font-bold text-xl">Cart ({`${cartItems.length} items`})</Link></li>
                <button className="bg-blue-500 text-white py-2 px-3 rounded-md" onClick={handleLoginClick}>{loginBtn}</button>
                <li className="font-bold">{loggedInUser}</li>
            </ul>
        </div >
    )
}

export default Header;