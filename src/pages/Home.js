import { useEffect, useState } from "react";
import Card from "../component/Card";
import "../style/home.css";

export const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("http://localhost:3000/restaurant.json");  
        if (!response.ok) throw new Error("Failed to fetch data");
        let jsonData = await response.json();
        setData(jsonData);
        setLoading(false)
      } catch (err) {
        // setError(err.message);
      } 
    };
    fetchData();
  }, []);

  return (
    <div className="home-container">
      <h2>Restaurants with Online Food Delivery in Delhi</h2>

      {loading && <p>Loading...</p>}
      {/* {error && <p className="error-message">{error}</p>} */}

      <div className="card-container">
        {data.length > 0 ? (
          data.map((item) => <Card key={item.info.id} data={item} />)
        ) : (
          <p>No restaurants available.</p>
        )}
      </div>
    </div>
  );
};
