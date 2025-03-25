import { useEffect, useState } from "react";
import Card from "../component/Card";
export const Home = () => {
  const [ data, setData ] = useState([]);
  useEffect(() => {
    const FetchData = async () => {
      try {
        let response = await fetch("http://localhost:3000/restaurant.json");
        let jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };
    FetchData();
  }, []);

  useEffect(()=>{
    console.log(data);
  },[data])

  return (
    <div>
      <h2>Restaurants with online food delivery in Delhi</h2>
  
         {data.map((item)=>{
         return <Card data={item}/>
         })

         }
         
    </div>
  );
};
