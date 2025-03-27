import "./../style/home.css";
import { useParams } from "react-router-dom";
import Re from "../utils/Restaurant.json";
import Reb from "../utils/Menu.json";

const Restaurant = () => {
  const { resId } = useParams();
  console.log("Restaurant ID:", resId);

  // Find restaurant by ID
  const restaurantData = Re.find((item) => item.info.id.toString() === resId);

  if (!restaurantData) {
    return <p>Restaurant not found.</p>;
  }

  const {
    name,
    rating,
    totalRatingsString,
    costForTwo,
    cuisines,
    locality,
    availability,
  } = restaurantData.info;

  const isClosed = availability?.nextOpenMessage ? true : false;
  const nextOpenTime = availability?.nextOpenMessage || "11:00 AM tomorrow";

  const recommendedObj = Reb.find(
    (outerObj) => outerObj?.card?.card?.title === "Recommended"
  );

  const recommendedItems = recommendedObj?.card?.card?.itemCards?.map(
    (ic) => ic?.card?.info
  ) || [];

  return (
    <div className="restPage">

      <div className="restContainerfood">

        <div className="restcuisineCont">
          <div className="recommendedSection">
            <h2>Recommended ({recommendedItems.length})</h2>
            <div className="menuList">
              {recommendedItems.length > 0 ? (
                recommendedItems.map((menuItem) => (
                  <div key={menuItem.id} className="menuItem">

                    <div className="menuItem-left">
                      <h3 className="menuItem-name">{menuItem.name}</h3>
                      {menuItem.defaultPrice && (
                        <p className="menuItem-price">
                          ₹{(menuItem.defaultPrice / 100).toFixed(2)}
                        </p>
                      )}
                      <p className="menuItem-desc">{menuItem.description}</p>
                    </div>

                    <div className="menuItem-right">
                      <button className="addBtn">Add</button>
                      <img
                        src={
                          menuItem.imgName
                            ? `/images/${menuItem.imgName}`
                            : "/images/default.jpg"
                        }
                        alt={menuItem.name}
                        className="menuImg"
                      />
                    </div>

                  </div>
                ))
              ) : (
                <p>No recommended items available.</p>
              )}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Restaurant;
