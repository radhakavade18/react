import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    useEffect(() => {
        console.log("use effect called")
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        // Optional chaining
        setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        console.log(listOfRestaurant);
    }

    if (listOfRestaurant.length === 0) {
        // return <h1>Loading.....</h1>
        <Shimmer />
    }

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="search"><Search /></div>
            <div className="top-rated-res">
                <button className="top-rated-btn" onClick={() => {
                    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                    setListOfRestaurant(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="rest-container">
                {listOfRestaurant.map((restaurant) => < RestaurantCard key={restaurant.info.id} resCard={restaurant.info} />)}
            </div>
        </div>
    )
}

export default Body;