import { useState } from "react";
import RestaurantCategoryList from "./RestaurantCategoryList";

const RestaurantCategory = ({ category, showItems, setShowIndex }) => {
    const [toggle, setToggle] = useState(showItems);

    const handlePanelCollapse = () => {
        setShowIndex();
        setToggle(!toggle);
    }

    return (
        <>
            <div className="w-full shadow-sm mb-6">
                <div className="flex justify-between cursor-pointer py-3 px-2 bg-gray-100 rounded-md" onClick={handlePanelCollapse}>
                    <span className="font-bold text-lg">{category?.title} ({category?.itemCards?.length})</span>
                    <span>{showItems ? "⬇" : "⬆"}</span>
                </div>
                {showItems && toggle &&
                    < RestaurantCategoryList list={category?.itemCards} />
                }
            </div>
        </>
    )
}

export default RestaurantCategory;