import { useEffect, useState } from "react";

const useRestaurantMenu = (restId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=${restId}`);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    return resInfo;
}

export default useRestaurantMenu;