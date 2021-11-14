import React, { useEffect } from "react";
import RestoCard from "./restoCard";
import { useLocation } from "../../location/location-provider";
import axios from "axios";

function Main() {
  const { location } = useLocation();

  useEffect(() => {
    async function fetchRestaurants({ latitude, longitude }) {
      const response = await axios.get("http://localhost:5000/restaurants", {
        params: { latitude: latitude, longitude: longitude },
      });
      console.log(response);
    }
    if (location) {
      fetchRestaurants({ latitude: location.latitude, longitude: location.longitude });
    }
  }, [location]);

  return (
    <div>
      <div className="text-5xl Restaurants flex flex-wrap align-middle  max-w-7xl ml-auto mr-auto font-semibold pl-5 mt-10 mb-5">
        Top Restaurants near you
      </div>
      <div className="Restaurants flex flex-wrap align-middle  max-w-7xl ml-auto mr-auto ">
        <RestoCard
          id="1"
          imgUrl="https://b.zmtcdn.com/data/pictures/chains/0/100180/ca285708630d9056e32e01ea579c3b44_o2_featured_v2.jpg?output-format=webp"
          restoName="Skyfall"
          discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          rating="4.2"
        />
        <RestoCard
          id="2"
          imgUrl="https://b.zmtcdn.com/data/pictures/chains/6/100756/f06cf41f8fe738a3b1d1fcd125ede6cc_o2_featured_v2.jpg?output-format=webp"
          restoName="Agarwal Sweets"
          discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          rating="4.3"
        />
        <RestoCard
          id="3"
          imgUrl="https://b.zmtcdn.com/data/pictures/chains/8/100148/49dbb6b8db9bd82a41a79d573643f4fa_o2_featured_v2.jpg?output-format=webp"
          restoName="Arora Sweets"
          discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          rating="4.6"
        />
        <RestoCard
          id="4"
          imgUrl="https://b.zmtcdn.com/data/pictures/1/18697071/a2b3f82751578142cfdb6b7756decac7_o2_featured_v2.jpg"
          restoName="Janto Sweets"
          discription={("Pizza", "Sweets", "South Indian")}
          rating="3.2"
        />
        <RestoCard
          id="5"
          imgUrl="https://b.zmtcdn.com/data/pictures/4/18833754/ca1f4478ebd73e06018d8dfd7ad3f06c_o2_featured_v2.jpg"
          restoName="Poker Sweets"
          discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          rating="3.8"
        />
        <RestoCard
          id="6"
          imgUrl="https://b.zmtcdn.com/data/pictures/chains/0/100180/ca285708630d9056e32e01ea579c3b44_o2_featured_v2.jpg?output-format=webp"
          restoName="Skyfall"
          discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          rating="4.1"
        />
        <RestoCard
          id="7"
          imgUrl="https://b.zmtcdn.com/data/pictures/chains/6/100756/f06cf41f8fe738a3b1d1fcd125ede6cc_o2_featured_v2.jpg?output-format=webp"
          restoName="Agarwal Sweets"
          discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          rating="4.5"
        />
        <RestoCard
          id="8"
          imgUrl="https://b.zmtcdn.com/data/pictures/chains/8/100148/49dbb6b8db9bd82a41a79d573643f4fa_o2_featured_v2.jpg?output-format=webp"
          restoName="Arora Sweets"
          discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          rating="4.1"
        />
        <RestoCard
          id="9"
          imgUrl="https://b.zmtcdn.com/data/pictures/1/18697071/a2b3f82751578142cfdb6b7756decac7_o2_featured_v2.jpg"
          restoName="Janto Sweets"
          discription={("Pizza", "Sweets", "South Indian")}
          rating="3.9"
        />
        <RestoCard
          id="10"
          imgUrl="https://b.zmtcdn.com/data/pictures/4/18833754/ca1f4478ebd73e06018d8dfd7ad3f06c_o2_featured_v2.jpg"
          restoName="Poker Sweets"
          discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          rating="3.7 "
        />
      </div>
    </div>
  );
}

export default Main;
