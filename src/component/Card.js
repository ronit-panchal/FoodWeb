import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/restaurant/${data.info.id}`)}>
      <img
        src={`images/${data?.info.cloudinaryImageId}.avif`}
        alt={data?.info.name}
        onError={(e) => (e.target.src = "images/default.jpg")} // Fallback Image
      />
      <div className="cardData">
        <h3 className="cardResName">{data?.info.name}</h3>
        <div className="cardResCuisines">{data?.info.cuisines?.join(", ") || "N/A"}</div>
        <div className="cuisinePrice">{data?.info.costForTwo || "Not available"}</div>
        <div className="cardResInfo">
          <span className="cardResRating">{data?.info.avgRating || "No rating"}</span>
          <span>3.2 min</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
