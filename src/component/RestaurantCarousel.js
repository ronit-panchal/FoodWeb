import React, { useState } from "react";
import "../style/RestaurantCarousel.css";
import { useNavigate } from "react-router-dom";

const RestaurantCarousel = ({ restaurants }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 5;
  const navigate = useNavigate();

  const nextSlide = () => {
    if (currentIndex < restaurants.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        ❮
      </button>

      <div className="carousel-track-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
        >
          {restaurants.map((restaurant) => (
            <div
              className="carousel-card"
              key={restaurant.info.id}
              onClick={() => navigate(`/Restaurant/${restaurant.info.id}`)} // ✅ make it clickable
              style={{ cursor: "pointer" }}
            >
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${restaurant.info.cloudinaryImageId}`}
                alt={restaurant.info.name}
              />
              <h4>{restaurant.info.name}</h4>
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-button next" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default RestaurantCarousel;
