const RestaurantCard = (props) => {
    const { resCard } = props;
    const { name, cuisines, costForTwo, avgRating, deliveryTime, cloudinaryImageId } = resCard;
    return (
        <>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} className="rest-img" />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <h4>{costForTwo}</h4>
            <h4>
                <span>{avgRating} stars </span>
                <span>{deliveryTime}</span>
            </h4>
        </>
    )
}

export default RestaurantCard;