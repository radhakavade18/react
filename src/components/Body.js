import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');
    const onlineStatus = useOnlineStatus();
    const { loggedInUser, setUserName } = useContext(UserContext);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        // Optional chaining
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(listOfRestaurant)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(filteredRestaurant);
    }
    // const listOfRestaurant = useRestaurantList();
    // setFilteredRestaurant(listOfRestaurant);

    if (onlineStatus === false) {
        return <h1>Looks like you're offline! Please check your internet connection.</h1>
    }

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="p-4">
            <div className="flex pb-4">
                <div className="mr-3">
                    <input type="text" data-testid="searchInput" className="border p-1 mr-2 rounded-md" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />

                    <button onClick={() => {
                        const filteredRestaurant = listOfRestaurant.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurant(filteredRestaurant);
                    }} className="bg-blue-500 text-white py-1 px-3 rounded-md">
                        Search
                    </button>
                </div>
                {/* <div className="mr-3">
                    <label>Update user</label>
                    <input type="text" className="border p-1 mr-2 rounded-md" value={loggedInUser} onChange={(e) => {
                        setUserName(e.target.value);
                    }} />
                </div> */}
                <button className="py-1 px-3 rounded-md border border-cyan-600" onClick={() => {
                    const filteredList = listOfRestaurant.filter((res) => res?.info?.avgRating > 4);
                    setFilteredRestaurant(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="flex flex-wrap py-4">
                {filteredRestaurant.map((restaurant) => <Link className="res-card mb-8" to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}><RestaurantCard resCard={restaurant?.info} className="h-96" /></Link>)}
            </div>
        </div >
    )
}

export default Body;