import { useEffect, useState } from "react";

const useRestaurantList = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        console.log(json)
        // Optional chaining
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(listOfRestaurant)
    }

    return listOfRestaurant;

}

export default useRestaurantList;