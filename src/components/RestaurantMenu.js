import { useContext, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import UserContext from "../utils/UserContext";

const RestaurantMenu = () => {
    const { restId } = useParams();
    const [showIndex, setShowIndex] = useState(null);
    // custom hook to handle resposibility to fetch data from api
    const resInfo = useRestaurantMenu(restId);
    const { loggedInUser } = useContext(UserContext);

    if (resInfo === null) return <Shimmer />;

    const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;
    const { name, costForTwoMessage, cuisines, avgRating } = restaurantInfo;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categoryFilter = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) => category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(categoryFilter)

    return (
        <div className="flex justify-center mt-8">
            <div className="w-[850px]">
                <h1 className="font-bold text-3xl mb-4">{name}</h1>
                <h4>{cuisines.join(", ")}</h4>
                <span className="fonnt-bold text-xl">Rating {avgRating} / {costForTwoMessage}</span>
                <span className="fonnt-bold text-xl">User: {loggedInUser}</span>
                <h3 className="mb-3 text-2xl font-bold">Menu</h3>
                {categoryFilter.map((category, index) => (
                    <RestaurantCategory
                        key={category?.card?.card?.title}
                        category={category?.card?.card}
                        showItems={index === showIndex ? true : false}
                        setShowIndex={() => setShowIndex(index)}
                    />
                ))}
            </div>
        </div >
    )
}

export default RestaurantMenu;