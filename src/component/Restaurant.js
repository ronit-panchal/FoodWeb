import "../style/restaurant.css";
import { useParams } from "react-router-dom";
import Re from "../utils/Restaurant.json"; 
import RestaurantInfo from "../component/RestaurantInfo"; 
import CardMenu from "./RestaurantMenu"; 

const Restaurant = () => {
  const { resId } = useParams();
  const result = Re.find((item) => item.info.id.toString() === resId); 

  if (!result) {
    return <h2>Restaurant Not Found</h2>;
  }

  const text = result.info.name;

  return (
    <div className="restPage">
      <div className="path">
        <span>Home / Delhi / {text}</span>
      </div>
      <div className="restContainerfood">
        <div className="restInfo">
          <p>{text}</p>
          <div className="restaurantService">
            <p>Order Online</p>
            <p>Dineout</p>
          </div>

          {/* Restaurant Information */}
          <RestaurantInfo restaurant={result.info} /> 

          <CardMenu resId={resId} />
          
        </div>

        <div className="restcuisineCont">
          {/* You can put something else here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
