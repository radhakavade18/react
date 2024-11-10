import { useDispatch, useSelector } from "react-redux";
import RestaurantCategoryList from "./RestaurantCategoryList";
import { clearItem } from "../utils/store/cartSlice";

const Cart = () => {
    const cartItem = useSelector((store) => store.cart.items);
    console.log(cartItem)
    const dispatch = useDispatch();

    const handleCartClear = () => {
        dispatch(clearItem());
    }

    return (
        <div className="m-4 p-4 relative">
            <h1 className="text-2xl font-bold text-center ">Cart</h1>
            {cartItem.length > 0 &&
                <>
                    <button className="text-white bg-black p-4 absolute right-6 rounded-md" onClick={handleCartClear}>Clear Cart</button>

                    <div className="w-6/12 m-auto">
                        <RestaurantCategoryList list={cartItem} />
                    </div>
                </>
            }
            {cartItem.length === 0 &&
                <div className="text-center w-full my-5"><h1 className="font-bold text-3xl">Cart is empty..</h1></div>}
        </div>
    )
}

export default Cart;