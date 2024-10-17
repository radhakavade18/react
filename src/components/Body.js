import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        console.log("use effect called")
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        // Optional chaining
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(listOfRestaurant)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(listOfRestaurant);
    }

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }} />

                <button onClick={() => {
                    const filteredRest = listOfRestaurant.filter((res) => {
                        res.info.name.toLowerCase().includes(searchText.toLowerCase());
                    })
                    setFilteredRestaurant(filteredRest);
                }}>
                    Search
                </button>
            </div>
            <div className="top-rated-res">
                <button className="top-rated-btn" onClick={() => {
                    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                    setListOfRestaurant(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="rest-container">
                {listOfRestaurant.map((restaurant) => <Link className="res-card" to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}><RestaurantCard resCard={restaurant.info} /></Link>)}
            </div>
        </div >
    )
}

export default Body;