const RestaurantCard = (props) => {
    const { resCard } = props;
    const { name, cuisines, costForTwo, avgRating, deliveryTime, cloudinaryImageId } = resCard;
    return (
        <div data-testid="resCard" className="w-80 bg-gray-100 h-full p-4 mx-4 rounded-md mb-4 hover:bg-gray-200">
            <div className="h-40">
                <img className="rounded-md h-full w-full object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
            </div>
            <h3 className="font-bold text-lg py-2">{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <h4>{costForTwo}</h4>
            <h4>
                <span>{avgRating} stars </span>
                <span>{deliveryTime}</span>
            </h4>
        </div>
    )
}

export default RestaurantCard;