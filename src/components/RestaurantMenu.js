import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { restId } = useParams();

    // custom hook to handle resposibility to fetch data from api
    const resInfo = useRestaurantMenu(restId);

    if (resInfo === null) return <Shimmer />;

    const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;
    const { name, costForTwoMessage, cuisines, avgRating } = restaurantInfo;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{costForTwoMessage}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>Rating {avgRating}</h5>
            <h3>Menu</h3>
            <ul>
                {itemCards?.length > 0 ? (
                    itemCards.map((item) => {
                        return (<li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs: {item?.card?.info?.price / 100}</li>);
                    })
                ) : (<li>No menu items available!</li>)}
            </ul>
        </div >
    )
}

export default RestaurantMenu;