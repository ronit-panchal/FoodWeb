import { useEffect, useState } from "react";
import Card from "../component/Card";
import "../style/home.css";
import RestaurantCarousel from "../component/RestaurantCarousel"; 

export const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("http://localhost:3000/restaurant.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        let jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="home-container">

      {!loading && data.length > 0 && <RestaurantCarousel restaurants={data} />}

      <h2>Restaurants with Online Food Delivery in Delhi</h2>

      {loading && <p>Loading...</p>}

      <div className="card-container">
        {data.length > 0 ? (
          data.map((item) => <Card key={item.info.id} data={item} />)
        ) : (
          !loading && <p>No restaurants available.</p>
        )}
      </div>
    </div>
  );
};
