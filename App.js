import React from "react";
import ReactDOM from "react-dom/client";

// --- Components ---
// Header 
//     - logo
//     - NavItems
// Body
//     - RestaurantContainer
//         - RestaurantCard
// - img
// - Name of rest, Star rating, cuisine, delivery time
// Footer
//     - Copyright
//     - Links
//     - Address
//     - Contact

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc_fnxkQVzdHu0rdTaa2pjHi6Gr--mRPJ1ZlmAjqnQeEI8ulE_sP_mnrnnXn0O-uVaReY&usqp=CAU" alt="logo" />
                <h2>Swiggato</h2>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Search = () => {
    return <div>Search</div>
}

const RestaurantCard = (props) => {
    const { resCard } = props;
    const { name, cousines, costForTwo, avgRating, deliveryTime, img } = resCard.data;
    return (
        <div className="res-card">
            <img src={img} className="rest-img" />
            <h3>{name}</h3>
            <p>{cousines.join(", ")}</p>
            <h4>₹{costForTwo / 100} Cost for two</h4>
            <h4>
                <span>{avgRating} </span>
                <span>{deliveryTime}</span>
            </h4>
        </div>
    )
}

const resList = [
    {
        data: {
            id: 1,
            name: "KFC",
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/0a394524-ec41-4e42-9b44-a3e4dff3b623_89140.JPG",
            cousines: ["Biryani", "Burger"],
            avgRating: "4.2 stars",
            deliveryTime: "27 mins",
            costForTwo: 40000
        }
    },
    {
        data: {
            id: 2,
            name: "Chinese Wok",
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
            cousines: ["Chinese", "Asian", "Tibetan", "Desserts"],
            avgRating: "3.9 stars",
            deliveryTime: "45 mins",
            costForTwo: 30000
        }
    },
    {
        data: {
            id: 3,
            name: "Subway",
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552",
            cousines: ["Healthy Food", "Salad", "Snacks"],
            avgRating: "4 stars",
            deliveryTime: "35 mins",
            costForTwo: 35000
        }
    },
    {
        data: {
            id: 4,
            name: "McDonalds",
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fedaee6f-c5e9-4f19-8188-93627e6d6776_237669.JPG",
            cousines: ["Burger", "Beverages", "Cafe", "Desserts"],
            avgRating: "4.5 stars",
            deliveryTime: "25 mins",
            costForTwo: 40000
        }
    },
    {
        data: {
            id: 5,
            name: "Burger King",
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
            cousines: ["Burger", "American"],
            avgRating: "4.1 stars",
            deliveryTime: "30 mins",
            costForTwo: 35000
        }
    },
    {
        data: {
            id: 6,
            name: "Lored Petrick",
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/422fc50a8988ba7a788900591f768101",
            cousines: ["Burger", "Snacks", "Italian", "Desserts"],
            avgRating: "4.2 stars",
            deliveryTime: "30 mins",
            costForTwo: 40000
        }
    }
]

const Body = () => {
    return (
        <div className="body">
            <div className="search"><Search /></div>
            <div className="rest-container">
                {resList.map((restaurant) => <RestaurantCard key={restaurant.data.id} resCard={restaurant} />)}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);