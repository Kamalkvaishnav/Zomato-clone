import { useEffect, useState } from "react";

export function useRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  const [location, setLocation] = useState(null);

  useEffect(() => {
    // console.log("location", restaurants);
    setRestaurants((res) => [...res, location?.label]);
  }, [location]);
  return { restaurants: restaurants, setLocation: setLocation };
}
