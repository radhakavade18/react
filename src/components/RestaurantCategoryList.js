import { useDispatch } from "react-redux";
import { addItem } from "../utils/store/cartSlice";

const RestaurantCategoryList = ({ list }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // dispatch an action
        dispatch(addItem(item))
    }

    return (
        <>
            {list.map((item) => (
                <div data-testid="foodItems" className="mb-4 flex justify-between p-4" key={item.card.info.id}>
                    <div className="w-3/4">
                        <div className="text-xl font-bold"> {item.card.info.name}</div>
                        <div className="text-l font-semibold"> ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}</div>
                        <span className="text-sm">
                            {item.card.info.description}
                        </span>
                    </div>
                    <div className="relative w-1/4 flex items-center justify-end">
                        <img className="w-40 h-32 object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`} />
                        <button className="bg-black text-white py-2 w-20 absolute right-0 bottom-4" onClick={() => handleAddItem(item)}>Add +</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default RestaurantCategoryList;